(()=>{var e={};e.id=548,e.ids=[548],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7382:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>h,routeModule:()=>u,tree:()=>d}),a(6119),a(7761),a(5866);var o=a(3191),n=a(8716),s=a(7922),i=a.n(s),r=a(5231),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);a.d(t,l);let d=["",{children:["blog",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6119)),"C:\\Users\\Ben\\OneDrive - Embry-Riddle Aeronautical University\\Documents\\benfiscool.github.io\\src\\app\\blog\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,7761)),"C:\\Users\\Ben\\OneDrive - Embry-Riddle Aeronautical University\\Documents\\benfiscool.github.io\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],h=["C:\\Users\\Ben\\OneDrive - Embry-Riddle Aeronautical University\\Documents\\benfiscool.github.io\\src\\app\\blog\\[id]\\page.tsx"],c="/blog/[id]/page",m={require:a,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/blog/[id]/page",pathname:"/blog/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1680:(e,t,a)=>{Promise.resolve().then(a.bind(a,4309))},7358:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});let o=(0,a(2881).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},4309:(e,t,a)=>{"use strict";a.d(t,{default:()=>h});var o=a(326),n=a(4846),s=a(434);let i=(0,a(2881).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var r=a(7358),l=a(9635),d=a(7577);function h({post:e,postId:t}){return e?o.jsx("div",{className:"min-h-screen bg-gray-950 text-gray-100 pt-20",children:(0,o.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl",children:[o.jsx(n.E.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"mb-6 sm:mb-8",children:(0,o.jsxs)(s.default,{href:"/blog",className:"inline-flex items-center text-stark-400 hover:text-stark-300 transition-colors text-sm sm:text-base",children:[o.jsx(i,{className:"w-4 h-4 mr-2"}),"Back to Blog"]})}),(0,o.jsxs)(n.E.header,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"mb-8 sm:mb-12",children:[(0,o.jsxs)("div",{className:"flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stark-400 mb-4",children:[o.jsx("span",{className:"px-2 sm:px-3 py-1 bg-stark-600/20 rounded-full",children:e.category}),o.jsx("span",{className:"text-gray-500 hidden sm:inline",children:"•"}),(0,o.jsxs)("div",{className:"flex items-center gap-1",children:[o.jsx(r.Z,{className:"w-3 h-3 sm:w-4 sm:h-4"}),o.jsx("span",{children:new Date(e.date).toLocaleDateString()})]})]}),o.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 glow-text leading-tight",children:e.title}),o.jsx("p",{className:"text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8",children:e.excerpt}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-6 sm:mb-8",children:e.tags.map(e=>(0,o.jsxs)("span",{className:"px-2 sm:px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs sm:text-sm",children:["#",e]},e))}),o.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-t border-b border-gray-800 py-4 sm:py-6 gap-4 sm:gap-0",children:(0,o.jsxs)("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-stark-600/20 rounded-full flex items-center justify-center",children:o.jsx(l.Z,{className:"w-5 h-5 sm:w-6 sm:h-6 text-stark-400"})}),(0,o.jsxs)("div",{children:[o.jsx("p",{className:"text-white font-semibold text-sm sm:text-base",children:"Benjamin Freeman"}),o.jsx("p",{className:"text-gray-400 text-xs sm:text-sm",children:"Mechanical Engineering Student"})]})]})})]}),o.jsx(n.E.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none",children:o.jsx(c,{post:e})}),o.jsx(n.E.footer,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},className:"mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800",children:(0,o.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6",children:[(0,o.jsxs)("div",{className:"flex items-start sm:items-center gap-3",children:[o.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 bg-stark-600/20 rounded-full flex items-center justify-center flex-shrink-0",children:o.jsx(l.Z,{className:"w-6 h-6 sm:w-8 sm:h-8 text-stark-400"})}),(0,o.jsxs)("div",{children:[o.jsx("h3",{className:"text-white font-bold text-base sm:text-lg",children:"Benjamin Freeman"}),o.jsx("p",{className:"text-gray-400 text-sm sm:text-base",children:"Senior Mechanical Engineering Student at Embry-Riddle, specializing in jet propulsion systems."})]})]}),o.jsx("div",{className:"flex gap-3",children:o.jsx(s.default,{href:"/blog",className:"btn-primary text-sm sm:text-base",children:"More Posts"})})]})}),(0,o.jsxs)(n.E.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},className:"mt-12 sm:mt-16",children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-stark-300 mb-6 sm:mb-8",children:"More Posts Coming Soon"}),(0,o.jsxs)("div",{className:"card-glass p-6 sm:p-8 text-center",children:[o.jsx("p",{className:"text-gray-400 mb-4 text-sm sm:text-base",children:"I'm working on more blog posts about my engineering projects and experiences."}),o.jsx("p",{className:"text-stark-400 text-sm sm:text-base",children:"Check back soon for updates!"})]})]})]})}):o.jsx("div",{className:"min-h-screen bg-gray-950 text-gray-100 pt-20 flex items-center justify-center",children:(0,o.jsxs)("div",{className:"text-center",children:[o.jsx("h1",{className:"text-4xl font-bold text-stark-300 mb-4",children:"Post Not Found"}),o.jsx("p",{className:"text-gray-300 mb-8",children:"The blog post you're looking for doesn't exist."}),o.jsx(s.default,{href:"/blog",className:"btn-primary",children:"Back to Blog"})]})})}function c({post:e}){let[t,a]=(0,d.useState)(null);return o.jsx("div",{className:"text-gray-300 leading-relaxed blog-content",dangerouslySetInnerHTML:{__html:t??""}})}},6119:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r,generateStaticParams:()=>s});var o=a(9510);let n=(0,a(8570).createProxy)(String.raw`C:\Users\Ben\OneDrive - Embry-Riddle Aeronautical University\Documents\benfiscool.github.io\src\components\BlogPostContent.tsx#default`);async function s(){return[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"}]}let i={1:{title:"Datsun Roadster Project",excerpt:"A 30-year restoration project involving reverse engineering, 3D scanning, and CNC machining to create a custom dashboard conversion kit for the Datsun community.",date:"2024-12-15",category:"Projects",tags:["Restoration","CNC","3D Scanning","Reverse Engineering"],content:`
      <p>Sometime in the early nineties, my dad brought home a 1968 Datsun Roadster and parked it in our backyard. There it sat for 30 years until he and I dug it out during my sophomore year of high school with plans of a full restoration. My goal at the time was to drive my girlfriend to senior prom in it. While that did not happen (not even close), it has turned out to be the most rewarding project I have worked on with all sorts of fun challenges along the way.</p>
      
      <p>I could write a book on all of the learnings along the way, so I'll spare you the boring bits about body filler and redoing the electrical harness, and rather talk about the fun part – the dashboard! You'll have to hear me out…</p>

      <p>The 1968 Roadster came with a vinyl covered foam padded dashboard. It was ugly and did not at all match the style of the rest of the car. In fact, throughout the span of the Roadster's production, the design never drastically changed. The only big difference is the ugly interior they put in for the 1968 model year. We decided that rather than restoring the ugly blob dash that was in there, we favored the look of the flat dash that had been in the earlier cars.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-1.jpeg" alt="1968 Datsun Roadster Dashboard" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">1968 Datsun Roadster Dashboard</p>
      </div>

      <p>I did a lot of research on flat dash conversions for our car and found that it is a very involved process. It requires creating new brackets, lengthening wires, and cutting and welding of the dash, among others. All of this comes after forking out hundreds of dollars for a used, rusted out flat dash from a parts car. We therefore decided not to do a flat dash swap and opted to spend several times as much time and money developing our own lookalike kit. That way anyone in the Datsun community could easily swap our kit into their late model cars.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-2.jpeg" alt="1967 Datsun Roadster Dashboard" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">1967 Datsun Roadster Dashboard</p>
      </div>

      <p>We started by actually buying the roached and rotting dash out of a 1966 Roadster complete with the gauges appropriate for that year, along with a 3D scanner to digitize it. We decided on a budget Revopoint Pop 2 3D scanner, and used Fusion 360 to reverse engineer the original flat dash. This was the first time I'd ever had to reverse engineer anything, and it was made especially challenging due to it being an organic shape with compound curved features. After lots of trial and error, I was very happy with the result.</p>

      <p>I never would have taken on this project without a plan to build it once the design was done. So, this project coincided with me starting my first semester of college and gaining access to a large CNC router. I still had no idea how to use it though. I initially practiced with CAM software by making little trinkets like a checkers board and decorative wood boxes. After many trial runs figuring out feeds and speeds, I prayed a little prayer and sent the G-code to the machine.</p>

      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg mb-4 max-w-full" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <source src="/pictures (2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic">CNC machining process</p>
      </div>

      <p>Everything ran perfectly smoothly the first time, albeit I could have cut the machining time in half, and that still would be conservative for just cutting foam. The real issue came when we then prepared the mold to pull a fiberglass part on. The mold release began to dissolve the foam. The next obvious solution was to machine a more permanent mold out of MDF that could be used for several parts. That was much the same as the foam mold, and in the end I was left with a very nice looking part.</p>

      <p>While the dash still needs some finishing touches, it is very nearly done and has been one of my favorite projects to date. It was rewarding to mount it in the car and be one step closer to driving it, albeit three years late to make my high school senior prom.</p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/blog/datsun-roadster/image-3.jpeg" alt="Finished dashboard view 1" className="w-full rounded-lg shadow-lg" />
        <img src="/blog/datsun-roadster/image-4.jpeg" alt="Finished dashboard view 2" className="w-full rounded-lg shadow-lg" />
      </div>
      <p className="text-sm text-gray-400 text-center italic mt-2">(Nearly) Finished Dashboard</p>
    `},2:{title:"CNC Tubing Coper",excerpt:"Building a custom CNC machine to help the Formula SAE team cope tubing with high accuracy and minimal human intervention, solving chassis asymmetry issues.",date:"2024-11-20",category:"Projects",tags:["CNC","Formula SAE","Manufacturing","Automation","Plasma Cutting"],content:`
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
    `},3:{title:"DIY Balancing Skateboard",excerpt:"Building my own OneWheel-inspired balancing skateboard from scratch using a VESC motor controller, aluminum chassis, and custom PID tuning for the perfect ride.",date:"2024-10-15",category:"Projects",tags:["DIY","Electric Vehicle","PID Control","VESC","Fabrication"],content:`
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
    `},4:{title:"CNC Machined Custom Shift Knob",excerpt:"Learning CNC machining through hands-on experience creating a custom aluminum shift knob using both lathe and mill operations in a machine shop class.",date:"2024-09-20",category:"Projects",tags:["CNC Machining","Lathe","Mill","Aluminum","CAM Programming"],content:`
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
    `},5:{title:"Honeywell Capstone Project",excerpt:"My senior capstone project sponsored by Honeywell - an innovative engineering solution that showcases advanced technical skills and industry collaboration.",date:"2025-01-20",category:"Capstone",tags:["Honeywell","Senior Project","Industry Sponsorship","Engineering"],content:`
      <h2>Coming Soon!</h2>
      <p>Details about this exciting Honeywell-sponsored capstone project will be posted here soon. This project represents the culmination of my engineering education and showcases cutting-edge technical solutions developed in collaboration with industry experts.</p>
      
      <p>Stay tuned for an in-depth look at the challenges, solutions, and outcomes of this super cool project!</p>
    `},6:{title:"Robotic Golf Caddy",excerpt:"Building an autonomous golf cart that uses computer vision and machine learning to follow me around the golf course while avoiding hazards like water and sand bunkers.",date:"2024-10-01",category:"Projects",tags:["Robotics","Computer Vision","Machine Learning","DIY","Golf"],content:`
      <p>In high school, my girlfriend played varsity golf and wanted me to pick up the sport so that we could play together. Over four years later, she still beats me by at least twenty strokes, but I still love to play. I go play by myself fairly often in hopes that one day I lose by not as much. Usually, I walk the course in order to save some money by avoiding the cart rental fee, but my legs and feet hurt after hours of carrying around a golf bag on my back. One day I was walking through goodwill and found a used hoverboard for $15. To my surprise, it actually worked! This game me an idea: I could build a robot that would carry my clubs and follow me around using the hoverboard motors and battery. It would save me tons of money by recycling the guts of the hoverboard including the battery, motors, and speed controllers.</p>
      
      <p>While standing there at the store on my phone, I pulled up Github and immediately started searching for an open-source software to reprogram the hoverboard motor controllers. Apparently, this is actually a very common thing to do in the budget-oriented DIY robotics community. There was already software written that allows DIYers to flash the microcontrollers on the main board (typically either an ESP32 or STM32) to take them over. Being that it was only $15, I bought the board without much second thought.</p>
      
      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg mb-4 max-w-full" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <source src="/robotic-golf-caddy-explanation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic">A Brief Explanation of the Golf Cart</p>
      </div>
      
      <p>The next large consideration was how to control the robot once it was built. I considered several methods including remote control, lidar, gps, computer vision, and combinations thereof. I considered that remote controlled golf rolling carts are already commercially available, and they're nice but they're not that cool. Next, I considered using a Bluetooth connection between my phone and the cart which would send my phone's GPS location to the cart which, in turn, would use its own GPS and a magnetometer to follow me. I went very deep into the app development before I realized that this was computationally heavy for the microcontroller and also drained my phone battery. After considering other methods, I eventually landed on an elegant solution – computer vision.</p>
      
      <p>The beauty of this approach is that there are preexisting computer vision models that can detect humans and recognize them. This would allow the cart to detect humans, approximate the distance to them based on the size of the bounding box, and recognize which particular human it is supposed to follow. Using this method did necessitate a much more capable processor than my original esp32 microcontroller though. After some research I ended up purchasing an Orange Pi 5 - a Raspberry Pi compatible single board Linux-based computer with the addition of an on-board NPU (Neural Processing Unit). This extra chip allows for the Orange Pi to run real-time computer vision models.</p>
      
      <div className="my-8">
        <img src="/blog/robotic-golf-caddy/image-1.jpeg" alt="Orange Pi 5 Single Board Computer" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Orange Pi 5 Single Board Computer (Source: Orangepi.org)</p>
      </div>
      
      <p>Upon initial startup, I downloaded visual studio code and set up a python virtual environment. I used Github Copilot to generate a program which leveraged YoloV8 (an object detection model) and an additional Re-ID model which allows the Orange Pi to detect and remember the player which it is supposed to follow. This left me with one major problem: golf courses are covered in features which are dangerous for robots. I want the cart to follow me, but not while I'm in a sand bunker, standing on the green, or God forbid standing on the edge of a pond (as I often do). I once again considered using an onboard GPS module combined with OpenStreetMaps (a free open-source alternative to google maps) in order to steer clear of these hazards. However, in addition to the battery hog as discussed earlier, I also came across several golf courses during testing in which the hazards were not marked on OpenStreetMaps. This meant that if I were standing in a bunker, the cart would follow me in without thinking twice. Then it dawned on me that if I'm already using an object recognition model, why not train it to also recognize these kinds of hazards using the camera?</p>
      
      <p>The only issue with this method is that there is no computer vision model that is trained on these features meaning that I would have to do it myself. I spent the next several days manually labeling over 500 different golf course images including drawing bounding boxes around greens, bunkers, and water. It was time well-spent because after hours of machine learning, I had a lightweight model that ran side by side with the preexisting models all on the Orange Pi. Even better was that it reliably detected bunkers, greens, and water.</p>
      
      <p>Now that I had software more or less completed, I moved on to designing the actual bones of the golf cart. I had several meter-long sticks of 20x20mm T-slot aluminum extrusion leftover from a previous project that I figured would be perfect for building the chassis. It's easy to cut and makes the chassis highly modular. Any components that don't work can be removed and replaced with next to no hassle. Furthermore, the t-slot allowed me to mount components nearly anywhere meaning I could quickly adjust the location of everything that needed to be attached to the cart.</p>
      
      <p>I started by drawing up a quick CAD model. As you'll see, the current version strayed from the model but it helped to visualize how all of the base components would come together and take shape.</p>
      
      <div className="my-8">
        <img src="/blog/robotic-golf-caddy/image-2.png" alt="Initial CAD Model" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Initial CAD Model</p>
      </div>
      
      <div className="my-8">
        <img src="/blog/robotic-golf-caddy/image-3.png" alt="Generating Bracket Toolpaths in CAM" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Generating Bracket Toolpaths in CAM</p>
      </div>
      
      <div className="my-8">
        <img src="/blog/robotic-golf-caddy/image-4.jpeg" alt="Initial Layout of the Parts" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Initial Layout of the Parts</p>
      </div>
      
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src="/blog/robotic-golf-caddy/image-5.png" alt="Rear Brackets CAD/CAM" className="w-full rounded-lg shadow-lg mb-2" />
          <p className="text-sm text-gray-400 text-center italic">Rear Brackets CAD/CAM</p>
        </div>
        <div>
          <img src="/blog/robotic-golf-caddy/image-6.png" alt="Front Caster Wheel Mount CAD/CAM" className="w-full rounded-lg shadow-lg mb-2" />
          <p className="text-sm text-gray-400 text-center italic">Front Caster Wheel Mount CAD/CAM</p>
        </div>
      </div>
      
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src="/blog/robotic-golf-caddy/image-7.jpeg" alt="Finished Rear Bracket" className="w-full rounded-lg shadow-lg mb-2" />
          <p className="text-sm text-gray-400 text-center italic">Finished Rear Bracket</p>
        </div>
        <div>
          <img src="/blog/robotic-golf-caddy/image-8.jpeg" alt="Finished Front Caster Wheel Mount" className="w-full rounded-lg shadow-lg mb-2" />
          <p className="text-sm text-gray-400 text-center italic">Finished Front Caster Wheel Mount</p>
        </div>
      </div>
      
      <p>The following pictures are of the golf cart as it sits right now at the time of writing this, just waiting for the final bits and bobs to be attached. I am battling what engineers and developers alike refer to as "integration hell", where everything works individually but nothing works when brought together. I am learning the ins and outs of Linux while trying to set a custom resolution for the screen that will go on the golf cart. I am learning how to work with the can-bus protocol to allow the Orange Pi to talk to the speed controllers. I am also learning that good engineering takes patience and a willingness to learn, which I have done lots of throughout this project. It's my first time doing anything on the Linux operating system, let alone the first time I've ever used or trained computer vision models using machine learning. This project has pushed me out of my comfort zone but I'm thrilled with my progress so far and hope to have it working very soon. Thank you for taking the time to read this and be sure to check back in the future for project updates!</p>
      
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src="/blog/robotic-golf-caddy/image-9.jpeg" alt="Front of the Golf Cart" className="w-full rounded-lg shadow-lg mb-2" />
          <p className="text-sm text-gray-400 text-center italic">Front of the Golf Cart</p>
        </div>
        <div>
          <img src="/blog/robotic-golf-caddy/image-10.jpeg" alt="Back of the Golf Cart" className="w-full rounded-lg shadow-lg mb-2" />
          <p className="text-sm text-gray-400 text-center italic">Back of the Golf Cart</p>
        </div>
      </div>
    `}};function r({params:e}){let t=e.id,a=i[Number(t)];return o.jsx(n,{post:a||null,postId:t})}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),o=t.X(0,[784,681],()=>a(7382));module.exports=o})();