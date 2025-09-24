// Simple DOCX -> HTML importer with image extraction
// Usage:
//   node scripts/convert-docx.js --file path/to/post.docx --slug datsun-roadster
// Outputs:
//   public/blog/<slug>/content.html and extracted images in the same folder

const fs = require('fs')
const path = require('path')
const mammoth = require('mammoth')

function parseArgs(argv) {
  const args = {}
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith('--')) {
      const key = a.slice(2)
      const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true
      args[key] = val
    }
  }
  return args
}

async function main() {
  const args = parseArgs(process.argv)
  const file = args.file || args.f
  const slug = args.slug || args.s
  if (!file || !slug) {
    console.error('Usage: node scripts/convert-docx.js --file <path.docx> --slug <post-slug>')
    process.exit(1)
  }

  const inputPath = path.resolve(file)
  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`)
    process.exit(1)
  }

  const outDir = path.resolve('public', 'blog', slug)
  fs.mkdirSync(outDir, { recursive: true })

  let imageIndex = 1
  const result = await mammoth.convertToHtml({
    path: inputPath,
  }, {
    convertImage: mammoth.images.imgElement(function(image) {
      return image.read('base64').then(function(imageBuffer) {
        const contentType = image.contentType || 'image/png'
        const ext = contentType.split('/')[1] || 'png'
        const filename = `image-${imageIndex++}.${ext}`
        const filePath = path.join(outDir, filename)
        fs.writeFileSync(filePath, Buffer.from(imageBuffer, 'base64'))
        return { src: `/blog/${slug}/${filename}` }
      })
    })
  })

  const html = result.value
  const warnings = result.messages?.filter(m => m.type === 'warning') || []

  const outFile = path.join(outDir, 'content.html')
  fs.writeFileSync(outFile, html)

  console.log(`Converted: ${inputPath}`)
  console.log(`→ HTML: ${outFile}`)
  if (imageIndex > 1) {
    console.log(`→ Images: ${imageIndex - 1} saved to ${outDir}`)
  }
  if (warnings.length) {
    console.warn('Warnings:')
    warnings.forEach(w => console.warn('-', w.message || String(w)))
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
