import BlogPostContent from '@/components/BlogPostContent'

// Generate static params for all blog posts
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    // Add more IDs here as you create more blog posts
  ]
}

// Sample blog post data (in a real app, this would come from a CMS or database)
const blogPostData = {
  1: {
    title: 'Datsun Roadster Project',
    excerpt: 'A 30-year restoration project involving reverse engineering, 3D scanning, and CNC machining to create a custom dashboard conversion kit for the Datsun community.',
    date: '2024-12-15',
    readTime: '6 min read',
    category: 'Projects',
    tags: ['Restoration', 'CNC', '3D Scanning', 'Reverse Engineering'],
    content: `
      <p>Sometime in the early nineties, my dad brought home a 1968 Datsun Roadster and parked it in our backyard. There it sat for 30 years until he and I dug it out during my sophomore year of high school with plans of a full restoration. My goal at the time was to drive my girlfriend to senior prom in it. While that did not happen (not even close), it has turned out to be the most rewarding project I have worked on with all sorts of fun challenges along the way. While there was a massive amount of body filler and rewiring the entire car, one of the biggest parts of the restoration (for me) was creating a custom dashboard from scratch.</p>
      
      <h2>The Dashboard Dilemma</h2>
      <p>The 1968 Roadster came with a vinyl covered foam padded dashboard. It was ugly and did not at all match the style of the rest of the car. In fact, throughout the span of the Roadster's production, the design never drastically changed – besides the ugly interior they put in for the 1968 model year. We decided that rather than restoring the ugly molded padded dash that was in there, we favored the look of the flat dash that had been in the earlier cars.</p>
      
      <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src="https://www.sportscarmarket.com/uploads/2021/05/Datsun1600-01-scaled.jpg" alt="1968 Datsun Roadster Dashboard" class="w-full rounded-lg shadow-lg mb-2" />
          <p class="text-sm text-gray-400 text-center italic">1968 Datsun Roadster Dashboard (source: Sports Car Market)</p>
        </div>
        <div>
          <img src="https://ebayimages.s3.amazonaws.com/s-l1600.jpg" alt="1967 Datsun Roadster Dashboard" class="w-full rounded-lg shadow-lg mb-2" />
          <p class="text-sm text-gray-400 text-center italic">1967 Datsun Roadster Dashboard (Source: eBay Motors Blog)</p>
        </div>
      </div>
      
      <h2>3D Scanning and Reverse Engineering</h2>
      <p>I did a lot of research on flat dash conversions for our car and found that it is a very involved process. It requires creating new brackets, lengthening wires, and cutting and welding of the dash, among others. All of this comes after forking out hundreds of dollars for a used, rusted out flat dash from a parts car. We therefore decided not to do a flat dash swap and opted to spend several times as much time and money developing our own lookalike kit. That way anyone in the Datsun community could easily swap our kit into their late model cars.</p>
      
      <p>We started by actually buying the roached and rotting dash out of a 1966 Roadster complete with the gauges appropriate for that year, along with a 3D scanner to digitize it. We decided on a budget Revopoint Pop 2 3D scanner, and used Fusion 360 to reverse engineer the original flat dash. This was the first time I'd ever had to reverse engineer anything, and it was made especially challenging due to it being an organic shape with compound curved features. After lots of trial and error, I was very happy with the result.</p>
      
      <h2>CNC Machining Process</h2>
      <p>I never would have taken on this project without a plan to build it once the design was done. So, this project coincided with me starting my first semester of college and gaining access to a large CNC router. I still had no idea how to use it though. I initially practiced with CAM software by making little trinkets like a checkers board and decorative wood boxes. After many trial runs figuring out feeds and speeds, I prayed a little prayer and sent the G-code to the machine.</p>
      
      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg mb-4 max-w-full" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <source src="/pictures (2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic">Initial Machining Operation for the Dashboard Top Mold</p>
      </div>
      
      <p>Everything ran perfectly smoothly the first time, albeit I could have cut the machining time in half, and that still would be conservative for just cutting foam. The real issue came when we then prepared the mold to pull a fiberglass part on. The mold release began to dissolve the foam. The next obvious solution was to machine a more permanent mold out of MDF that could be used for several parts. That was much the same as the foam mold, and in the end I was left with a very nice looking part.</p>
      
      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg mb-4 max-w-full" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <source src="/pictures (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic">Machining the Final MDF Mold for the Dashboard Top</p>
      </div>
      
      <h2>Results and Reflections</h2>
      <p>While the dash still needs some finishing touches, it is very nearly done and has been one of my favorite projects to date. It was rewarding to mount it in the car and be one step closer to driving it, albeit three years late to make my high school senior prom.</p>
    `
  },
  2: {
    title: 'CNC Tubing Coper',
    excerpt: 'Building a custom CNC machine to help the Formula SAE team cope tubing with high accuracy and minimal human intervention, solving chassis asymmetry issues.',
    date: '2024-11-20',
    readTime: '8 min read',
    category: 'Projects',
    tags: ['CNC', 'Formula SAE', 'Manufacturing', 'Automation', 'Plasma Cutting'],
    content: `
      <p>During my sophomore year of college, I had a good friend who was the president of the Formula SAE race team on campus. If you are unfamiliar with the concept, Formula SAE is a competition in which students from universities all around the world build small formula racecars to strict standardized specifications and then ultimately go head to head in races against other universities. This was a newly formed club at the time with no racecar yet.</p>
      
      <p>My friend, the club president, convinced me to join. While I did not have the time to attend all of the meetings due to being president of the makerspace, I was eager to help in any way I could. Ultimately I volunteered to aid in the production of the car.</p>
      
      <h2>The Problem</h2>
      <p>The club's original plan was to use a tube coping jig consisting of a drill, a hole saw, and a clamp. There were dozens of cuts to be made and early testing revealed that small errors made during this process stacked up. This resulted in the chassis of the car being asymmetrical and difficult to weld.</p>
      
      <h2>The Solution: Custom CNC Machine</h2>
      <p>I instead proposed we build a CNC machine to aid in coping the tubing with a much higher accuracy and minimal human intervention. While there are services out there which will cut tubing for you, our club had very little money and could not afford it. We were also having no luck finding sponsors as it was new and had nothing to show for our efforts besides a SolidWorks model.</p>
      
      <p>I reasoned that we could use a cheap CNC kit that would come with the barebones parts to get us up and running. In addition, the frame could be constructed out of cheap aluminum extrusion and a couple of custom laser cut end pieces. This is what we ultimately decided to move forward with.</p>
      
      <h2>Design and Components</h2>
      <p>With our limited budget, we bought a two axis kit containing two stepper motors, two stepper drivers, a Mach3 CNC board, and some other miscellaneous hardware. I designed the machine in Fusion 360 and ordered the end plates for it.</p>
      
      <div class="my-8">
        <img src="/Blog2/IMG20250221200936.png" alt="Initial CNC machine frame assembly with aluminum extrusion" class="w-full rounded-lg shadow-lg mb-4" />
        <p class="text-sm text-gray-400 text-center italic">Early assembly of the CNC frame using aluminum extrusion and custom end plates</p>
      </div>
      
      <p>I knew that the longest piece of continuous tubing on the car was just under one meter, so I designed the machine to be long enough to cut both ends of the tube in one go, eliminating the need to re-index the tube in between cuts.</p>
      
      <div class="my-8">
        <img src="/Blog2/IMG20250221200946.png" alt="CNC machine linear motion system and rails" class="w-full rounded-lg shadow-lg mb-4" />
        <p class="text-sm text-gray-400 text-center italic">Linear motion system with precision rails for accurate positioning</p>
      </div>
      
      <h2>Manufacturing and Assembly</h2>
      <p>I also used the CNC router to cut several more pieces for the machine, namely a custom motor mount and the trolley on which the plasma torch was to be mounted. Under a tight time crunch and before I had to leave for spring break, I had a friend and fellow club member help with the wiring and software setup while I moved on to assembling the machine and machining an electronics enclosure.</p>
      
      <div class="my-8">
        <img src="/Blog2/IMG20250221200955.png" alt="Close-up of CNC machine components and wiring" class="w-full rounded-lg shadow-lg mb-4" />
        <p class="text-sm text-gray-400 text-center italic">Detailed view of the motor mounts and mechanical components</p>
      </div>
      
      <div class="my-8">
        <img src="/Blog2/IMG20250312180326.png" alt="CNC machine electronics and control system" class="w-full rounded-lg shadow-lg mb-4" />
        <p class="text-sm text-gray-400 text-center italic">Electronics enclosure housing the Mach3 CNC board and stepper drivers</p>
      </div>
      
      <h2>Final Assembly and Testing</h2>
      <p>As the machine came together, we could see the potential for precise, repeatable cuts that would solve the Formula SAE team's accuracy problems. The combination of stepper motor precision and rigid aluminum construction promised the accuracy we needed.</p>
      
      <div class="my-8">
        <img src="/Blog2/IMG20250312180330.png" alt="Nearly completed CNC tubing coper machine" class="w-full rounded-lg shadow-lg mb-4" />
        <p class="text-sm text-gray-400 text-center italic">The machine nearing completion with all major components installed</p>
      </div>
      
      <div class="my-8">
        <img src="/Blog2/IMG20250312180337.png" alt="CNC machine ready for plasma torch mounting" class="w-full rounded-lg shadow-lg mb-4" />
        <p class="text-sm text-gray-400 text-center italic">Custom trolley system ready for plasma torch integration</p>
      </div>
      
      <h2>Results and Handoff</h2>
      <p>Ultimately, this was the last time I got to work on my creation as I had to turn it over to the chassis team of the club where they mounted the plasma torch and calibrated it. They shared with me that it was performing test cuts and working well, and that they hope to start the chassis build this coming semester (Fall 2025).</p>
      
      <div class="my-8">
        <img src="/Blog2/IMG20250312180347.png" alt="Final view of completed CNC tubing coper" class="w-full rounded-lg shadow-lg mb-4" />
        <p class="text-sm text-gray-400 text-center italic">The completed CNC tubing coper ready for Formula SAE chassis production</p>
      </div>
      
      <h2>Lessons Learned</h2>
      <p>This project taught me valuable lessons about working within tight budgets and time constraints while still delivering a functional solution. The experience of designing a custom CNC machine from scratch, integrating off-the-shelf components, and collaborating with a team under pressure was invaluable for my engineering development.</p>
      
      <p>The project demonstrated that with creativity and resourcefulness, student teams can build sophisticated manufacturing tools that rival commercial solutions, all while staying within the constraints of a limited budget. The CNC tubing coper not only solved the immediate problem of chassis accuracy but also gave the Formula SAE team a competitive advantage in their manufacturing process.</p>
    `
  },
  3: {
    title: 'DIY Balancing Skateboard',
    excerpt: 'Building my own OneWheel-inspired balancing skateboard from scratch using a VESC motor controller, aluminum chassis, and custom PID tuning for the perfect ride.',
    date: '2024-10-15',
    readTime: '5 min read',
    category: 'Projects',
    tags: ['DIY', 'Electric Vehicle', 'PID Control', 'VESC', 'Fabrication'],
    content: `
      <p>I remember years ago seeing ads while I was scrolling through Instagram for a balancing skateboard sorta thing called a OneWheel. I was shocked when I clicked the link and saw the price, only to file the dream of owning one away and not look back. Later on when I got to college, my roommate brought two with him. He let me borrow his smaller one for just a few days, and then I was hooked. I wanted one so bad, but I still couldn't justify the price.</p>
      
      <h2>The Inspiration and Challenge</h2>
      <p>I had built an electric skateboard in middle school so then I thought that if I could build that, there's no reason that I couldn't also build a balancing version that just has one big wheel in the center instead of four wheels arranged in a rectangle. In the end, I decided that I would attempt to build one, and worst case I end up with a bunch of parts that I could use to build another project.</p>
      
      <h2>The Heart of the System: VESC Controller</h2>
      <p>I ended up with a 125A speed controller with a built in magnetometer and accelerometer from a website called Spintend. The speed controller, or ESC, runs on an open source software called VESC and allows for basically infinite ways to control the motor. In my case, I set it up in a "balance" mode which uses a PID controller to keep the board upright based on the input from the onboard sensors.</p>
      
      <p>There is a large community built around these motor controllers so it was easy to find PID gains for a good baseline, which I then tuned to my liking. The VESC community's open-source approach meant I had access to countless configurations and could learn from others who had tackled similar projects.</p>
      
      <h2>Building the Chassis</h2>
      <p>For the chassis of the skateboard itself, I went to the local metal yard and picked up a 6' length of 1x2 inch aluminum 1/8th wall C-channel. I cut it down according to my CAD model and 3D printed the end caps that join the two sides. I also marked and drilled holes for the motor shaft and the power button, while using self-tapping sheet metal screws to hold everything else on.</p>
      
      <p>The aluminum C-channel provided the perfect balance of strength and weight, while being easy to machine and modify. The modular design with 3D printed end caps allowed me to iterate quickly on the design and make adjustments as needed during the build process.</p>
      
      <h2>Foot Pads and Control System</h2>
      <p>The pads for my feet were simple rectangles cut out of half inch plywood with a radius sanded into the corners. I mounted large pressure sensors to the front foot pad so the board could recognize when I am on it and when I wish to stop by lifting my front heel.</p>
      
      <p>This pressure sensing system was crucial for safety - the board needed to know when I was actively riding versus when I had dismounted. The front heel lift detection became my primary method for controlled stops, mimicking the intuitive control scheme of commercial boards.</p>
      
      <h2>Tuning and Performance</h2>
      <p>The PID tuning process was both challenging and rewarding. Starting with community-recommended values, I spent hours adjusting the proportional, integral, and derivative gains to achieve the perfect balance response. Too aggressive and the board would oscillate wildly; too conservative and it wouldn't respond quickly enough to maintain balance.</p>
      
      <p>The final tuning resulted in a board that was stable enough for beginners but responsive enough for more advanced maneuvers. The 125A controller provided plenty of power for climbing hills and accelerating, while the built-in sensors delivered the precision needed for smooth balance control.</p>
      
      <h2>Campus Celebrity</h2>
      <p>This turned out to be a very fun and successful project in the end and I still use it to get around! For the first couple months of riding it around campus, I got stopped countless times by people wanting to know what it was, how I made it, or wanting to try it.</p>
      
      <p>The attention the board attracted was unexpected but rewarding. It sparked countless conversations about engineering, DIY projects, and problem-solving. Many students were amazed that something they thought required a huge company and expensive manufacturing could be built by a college student in their spare time.</p>
      
      <h2>Lessons Learned</h2>
      <p>Building the DIY balancing skateboard taught me valuable lessons about control systems, mechanical design, and the importance of safety features. The project demonstrated that with the right components and some engineering ingenuity, complex commercial products can often be replicated and even improved upon.</p>
      
      <p>More importantly, it showed me the power of open-source communities like VESC, where knowledge sharing accelerates innovation and makes complex projects accessible to hobbyists and students. The project cost a fraction of a commercial OneWheel while providing an invaluable learning experience.</p>
      
      <h2>Future Improvements</h2>
      <p>While the current version works great, I've already identified several areas for improvement. Better weatherproofing, more sophisticated foot pad sensors, and perhaps even smartphone connectivity for diagnostics and tuning adjustments are all on my wishlist for version 2.0.</p>
      
      <p>The modular design philosophy I adopted makes these upgrades entirely feasible - a testament to the value of planning for iteration from the beginning of any engineering project.</p>
    `
  },
  4: {
    title: 'CNC Machined Custom Shift Knob',
    excerpt: 'Learning CNC machining through hands-on experience creating a custom aluminum shift knob using both lathe and mill operations in a machine shop class.',
    date: '2024-09-20',
    readTime: '4 min read',
    category: 'Projects',
    tags: ['CNC Machining', 'Lathe', 'Mill', 'Aluminum', 'CAM Programming'],
    content: `
      <p>During the Spring semester of my junior year in college, I had the opportunity to take a machine shop class, something I'd been wanting to do for years. Over the course of the semester, we learned how to safely and properly use a wide range of tools including lathes, mills, as well as MIG (GMAW) and TIG (GTAW) welders. While I had used these tools before, I had never had the chance to use a CNC mill or lathe (aside from a CNC router). So, when assigned a final project of our own personal choosing, I jumped at the opportunity of having free reign over these machines.</p>
      
      <h2>Project Planning and Challenges</h2>
      <p>We were only allotted three class sessions to work on our projects, so I couldn't create anything too fancy or with many parts. We were also required to use three or more processes to make it (mill, lathe, waterjet, welding, etc.). Ultimately, I decided to make a shift knob for my car thinking it would be quick and easily doable in three class sessions (boy was I wrong).</p>
      
      <p>There are a lot of things that one can pick up quickly. Learning to do CAM on a machine and a whole process that you have never done before is not one of them. In the end, I spent 20-ish hours in the machine shop making friends with the staff and asking them for help on my project.</p>
      
      <h2>Learning from the Experts</h2>
      <p>Despite asking for help, I did not allow any hand-holding. I would ask for as little information as possible, just enough to not crash a big and expensive CNC machine. There are two machinists, each with decades of experience each, who were happy to share their expertise with me. While I know I could do it again, it was very tough to wrap my head around the setup the first time – how and where to mount the lathe tools, what order of operations is best, you name it! I greatly appreciate the advice they gave me.</p>
      
      <h2>Manufacturing Process</h2>
      <p>In the end, I settled on a process that worked out well. I cut 3 inch diameter aluminum bar stock to length on a band saw. Then I chucked it up in the Haas TL-2 CNC lathe and ran my program, but not before mounting and setting the zero on all of my tools and the stock itself. I made sure to leave the shift ball attached to the stock so that it could be easily mounted in a milling vice or back in the lathe for future operations.</p>
      
      <h2>Decorative Top Plate</h2>
      <p>After that, I drilled a 6 hole evenly spaced mounting pattern for a decorative plate atop. I then cut another piece of stock to be used as the top plate on the band saw. We didn't have aluminum sheet of the proper thickness so I used 1.5 inch round bar stock. I put it in the manual Bridgeport mill and drilled the corresponding mounting pattern in it with clearance fit holes for machine screws to pass through.</p>
      
      <p>Then I mounted the stock in a lathe to cut to the right diameter and then parted off the plate, ensuring to check that it was within tolerance from my CAD model and corresponding drawing. I then mounted the plate on top of the shift knob using six M2.5 machine screws, and mounted the whole assembly in the CNC mill.</p>
      
      <h2>Final Operations</h2>
      <p>After zeroing off the part and tools with a probe, I ran a program to engrave the shift pattern into the decorative top plate. Lastly, I mounted the shift knob back in the lathe using the stock I had left, and then brushed it with a scotch-brite pad before parting it off.</p>
      
      <h2>Results and Lessons Learned</h2>
      <p>I was and still am thrilled with the end result. One small issue that I failed to consider until I had already started the project is that the knob gets hot enough to boil water after having sat outside in the Phoenix heat for a work day. It's a shame that I have to keep a microfiber cloth on it just to be able to use it, but come wintertime, it'll be a show stopper!</p>
      
      <p>This project taught me valuable lessons about CNC programming, machining operations sequencing, and the importance of considering real-world use conditions in design. The hands-on experience with both CNC lathe and mill operations provided invaluable skills that I continue to use in other projects.</p>
    `
  },
  5: {
    title: 'Honeywell Capstone Project',
    excerpt: 'My senior capstone project sponsored by Honeywell - an innovative engineering solution that showcases advanced technical skills and industry collaboration.',
    date: '2025-01-20',
    readTime: '8 min read',
    category: 'Capstone',
    tags: ['Honeywell', 'Senior Project', 'Industry Sponsorship', 'Engineering'],
    content: `
      <h2>Coming Soon!</h2>
      <p>Details about this exciting Honeywell-sponsored capstone project will be posted here soon. This project represents the culmination of my engineering education and showcases cutting-edge technical solutions developed in collaboration with industry experts.</p>
      
      <p>Stay tuned for an in-depth look at the challenges, solutions, and outcomes of this super cool project!</p>
    `
  },
  // Add more blog posts here...
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = params.id
  const post = blogPostData[Number(postId) as keyof typeof blogPostData]

  return <BlogPostContent post={post || null} postId={postId} />
}
