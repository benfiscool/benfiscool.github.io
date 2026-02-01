import BlogPostContent from '@/components/BlogPostContent'

// Generate static params for all blog posts
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    // Add more IDs here as you create more blog posts
  ]
}

// Sample blog post data (in a real app, this would come from a CMS or database)
const blogPostData = {
  1: {
    title: 'Datsun Roadster Project',
    excerpt: 'A 30-year restoration project involving reverse engineering, 3D scanning, and CNC machining to create a custom dashboard conversion kit for the Datsun community.',
    date: '2024-12-15',
    category: 'Projects',
    tags: ['Restoration', 'CNC', '3D Scanning', 'Reverse Engineering'],
    content: `
      <p>Sometime in the early nineties, my dad brought home a 1968 Datsun Roadster and parked it in our backyard. There it sat for 30 years until he and I dug it out during my sophomore year of high school with plans of a full restoration. My goal at the time was to drive my girlfriend to senior prom in it. When we first dug it out, it needed extensive mechanical work, hundreds of hours of body work, completely new wiring, and a full interior restoration. Among one of the big jobs was designing and manufacturing a custom dashboard from scratch.</p>
      
      <p>The 1968 Roadster came with a vinyl-covered foam padded dashboard. It was ugly and did not at all match the style of the rest of the car. Throughout the span of the Roadster's production, the design of the car never drastically changed – except for the dashboard that came in the 1968 model year. We decided that rather than restoring the stock molded padded dash, we would rather swap in a flat dash from the earlier model cars.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-1.jpeg" alt="1968 Datsun 1600 Roadster - Sports Car Market" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">1968 Datsun Roadster Dashboard (source: sportscarmarket.com)</p>
      </div>

      <p>I did a lot of research on flat dash conversions for our car and found it to be an involved process. It requires creating new brackets, lengthening wires, and cutting and welding of the dash, among others. All of this comes only after forking out hundreds of dollars for a used and rusted out original flat dash. We therefore decided not to do a flat dash swap and opted to spend several times as much time and money developing our own lookalike kit. That way anyone in the same situation as we were could easily swap our kit into their late model cars.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-2.jpeg" alt="A Datsun 1600 Fairlady Imported by a US Soldier in 1967 - eBay Motors Blog" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">1967 Datsun Roadster Dashboard (Source: ebay.com/motors/blog)</p>
      </div>

      <p>We started by buying a rotting dash out of a 1966 Roadster, along with a 3D scanner to digitize it. We decided on a budget Revopoint Pop 2 3D scanner, and I used Fusion 360 to reverse engineer the scan data from the original flat dash. This was the first time I'd ever had to do this, and it was made especially challenging due to it being an organic shape with compound curved features. After lots of trial and error, I was very happy with the result.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-3.png" alt="Dashboard 3D Scan" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Dashboard 3D Scan</p>
      </div>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-4.jpeg" alt="Rendering of my Dashboard CAD Model" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Rendering of my Dashboard CAD Model</p>
      </div>

      <p>This project coincided with me starting my first semester of college and gaining access to a large CNC router in the schools makerspace, which I eventually used to machine all the molds for the project. I had no idea how to use it at first though. I initially practiced the CAM software by making little trinkets like a checkers board and decorative wood boxes. After too many trial runs to count, I finally had the confidence to start cutting into my large foam layup.</p>

      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg mb-4 max-w-full" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <source src="/pictures (2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic">Video of the Mold Being Machined</p>
      </div>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-5.jpeg" alt="The Finished Foam Mold" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">The Finished Foam Mold</p>
      </div>

      <p>Everything ran smoothly for my first full-size attempt, albeit I could have cut the machining time in half. The real issue came when we then prepared the mold for fiberglassing. I drove home one weekend to work on the car with my dad, excited to make the fiberglass dash from the new mold. However, the spray-on mold release we used began to dissolve the foam on contact, leaving it completely unusable. I arrived back at school that Sunday and immediately went back to the makerspace to machine a new mold out of MDF.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-6.jpeg" alt="MDF Mold for the Dashboard Cap" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">MDF Mold for the Dashboard Cap</p>
      </div>

      <p>Next, I moved on to machining the mold for the face of the dashboard which was a slightly more difficult process. The vertical travel of the machine is only six inches and the mold itself is four inches tall. Coupled with an endmill with three inches of stick-out, this meant I had to machine the mold in two parts. After gluing the two pieces together, this too came out very nice.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-7.jpeg" alt="MDF Mold for the Dashboard Face" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">MDF Mold for the Dashboard Face</p>
      </div>

      <p>We opted to drop the molds off at a fiberglass shop in downtown phoenix to have them professionally lay up the parts and gel-coat them. However, the dashboard still needed lots of work to make it look more finished. We decided to go with a brushed aluminum cover to go on the dash face which we ordered from a metal laser cutting shop. We then wrapped the dashboard cap in foam and then in vinyl. This gave it a professional look and feel, complete with a little bit of padding just like the original had.</p>

      <div className="my-8">
        <img src="/blog/datsun-roadster/image-8.jpeg" alt="Fiberglass Dash Mockup in the Car" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Fiberglass Dash Mockup in the Car</p>
      </div>

      <p>While the dash still needs some finishing touches, it is very nearly done and has been one of my favorite projects to date. It was rewarding to mount it in the car and be one step closer to driving it, albeit nearly four years late to make my high school senior prom.</p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/blog/datsun-roadster/image-9.jpeg" alt="Finished dashboard view 1" className="w-full rounded-lg shadow-lg" />
        <img src="/blog/datsun-roadster/image-10.jpeg" alt="Finished dashboard view 2" className="w-full rounded-lg shadow-lg" />
      </div>
      <p className="text-sm text-gray-400 text-center italic mt-2">(Nearly) Finished Dashboard</p>
    `
  },
  2: {
    title: 'CNC Tubing Coper',
    excerpt: 'Building a custom CNC machine to help the Formula SAE team cope tubing with high accuracy and minimal human intervention, solving chassis asymmetry issues.',
    date: '2024-11-20',
    category: 'Projects',
    tags: ['CNC', 'Formula SAE', 'Manufacturing', 'Automation', 'Plasma Cutting'],
    content: `
      <p>Formula SAE is student design competition in which student-run teams from universities worldwide build small formula-style racecars to compete head to head. During my sophomore year of college, I joined our newly-formed team which, at the time, was in the process of designing their first car.</p>
      
      <p>I was eager to help in any way I could in order to get our racecar design built. The club's original plan for building the car was to use a tube coping jig consisting of a drill, a hole saw, and a clamp. There were dozens of cuts to be made and early testing revealed that small errors made during this process stacked up. This resulted in the chassis of the car being asymmetrical and difficult to weld.</p>
      
      <p>I instead proposed we build a CNC, or computer controlled, machine to aid in coping the tubing with a much higher accuracy than manually aligning and drilling each piece of tubing. While there are pre-existing services that do this, our club had very little money and could not afford to outsource tubing cutting and coping. We were also having a difficult time finding sponsors as it was a new club and we had nothing to show for our efforts besides a SolidWorks model.</p>
      
      <p>I reasoned that we could use a cheap CNC kit that would come with the barebones parts to get us up and running. In addition, the frame could be constructed out of cheap aluminum extrusion and a couple of custom laser-cut end pieces. This is what we ultimately decided to move forward with. With our limited budget, we bought a two-axis DIY CNC kit containing two stepper motors, two stepper drivers, a Mach3 CNC board, and some other miscellaneous hardware.</p>
      
      <p>I designed the machine in Fusion 360 and ordered the custom end plates for the chassis of the machine. I knew that the longest piece of continuous tubing on the car was just under one meter, so I designed the machine to be long enough to cut both ends of the tub in one go, eliminating the need to re-index the tube in between cuts. I also used the CNC router in our campus makerspace to cut several more pieces for the machine, namely a custom motor mount and the trolley on which the plasma torch was to be mounted.</p>
      
      <div className="my-8">
        <img src="/blog/cnc-tubing-coper-updated/image-1.png" alt="Tubing Coper CAD Model" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Tubing Coper CAD Model</p>
      </div>
      
      <div className="my-8">
        <img src="/blog/cnc-tubing-coper-updated/image-2.jpeg" alt="CNC Tubing Coper" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">CNC Tubing Coper</p>
      </div>
      
      <p>Under a tight time crunch and before I had to leave for spring break, I had a friend and fellow club member help with the wiring and software setup while I moved on to assembling the machine and machining the remaining parts. Ultimately, this was the last time I got to work on my creation as I had to turn it over to the chassis team of the club where they mounted the plasma torch and calibrated it. They shared with me that it was performing test cuts and working well, and that they hope to start the chassis build this coming semester (Fall 2025).</p>
    `
  },
  3: {
    title: 'DIY Balancing Skateboard',
    excerpt: 'Building my own OneWheel-inspired balancing skateboard from scratch using a VESC motor controller, aluminum chassis, and custom PID tuning for the perfect ride.',
    date: '2024-10-15',
    category: 'Projects',
    tags: ['DIY', 'Electric Vehicle', 'PID Control', 'VESC', 'Fabrication'],
    content: `
      <p>I remember years ago seeing ads while I was scrolling through Instagram for an electric skateboard that balances on one central motorized wheel, aptly named 'OneWheel'. I was shocked when I clicked the link and saw the price, and promptly filed the dream of owning one away. Later on when I got to college, my roommate brough two of them with him. He let me borrow his smaller one for just a few days, and I was hooked. I wanted one badly, but I still couldn't justify the price.</p>
      
      <p>I had built an electric skateboard in middle school so I reasoned that I could probably just build my own version of a OneWheel. I decided that I would attempt to build one, and worst case I end up with a bunch of parts that I could use to build another project. I started as I always do – research, research, research. This led me to exactly what I was looking for on a website called Spintend.com. I ended up with a 125A speed controller with a built-in magnetometer and accelerometer to handle the self-balancing. The speed controller, or ESC, runs on an open-source software called VESC and allows for basically infinite ways to control the motor. In my case, I set it up in a "balance" mode which uses a PID controller to keep the board upright based on the input from the onboard sensors. There is a large community built around these motor controllers so it was easy to find PID gains for a good baseline, which I then tuned to my liking later on.</p>
      
      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/blog/diy-balancing-skateboard/ow motor test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic mt-2">Initial Test of the Motor</p>
      </div>
      
      <div className="my-8">
        <img src="/blog/diy-balancing-skateboard/image-1.jpeg" alt="An Array of Parts Scattered on my Dorm Floor" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">An Array of Parts Scattered on my Dorm Floor</p>
      </div>
      
      <p>For the chassis of the skateboard itself, I created a CAD model as per usual, utilizing as many off-the-shelf components as possible.</p>
      
      <div className="my-8">
        <img src="/blog/diy-balancing-skateboard/image-2.png" alt="CAD Model of my One-Wheeled Electric Skateboard" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">CAD Model of my One-Wheeled Electric Skateboard</p>
      </div>
      
      <p>I went to the local metal yard and picked up a 6' length of 1x2 inch aluminum 1/8th wall C-channel. I cut it down according to my cad model and 3D printed the end caps that join the two sides. I also marked and drilled holes for the motor shaft and the power button, while using self-tapping sheet metal screws to hold everything else on.</p>
      
      <div className="my-8">
        <img src="/blog/diy-balancing-skateboard/image-3.jpeg" alt="In-Progress Picture of the Assembly" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">In-Progress Picture of the Assembly</p>
      </div>
      
      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/blog/diy-balancing-skateboard/ow test vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic mt-2">Initial Test of the Board</p>
      </div>
      
      <p>The pads for my feet were simple rectangles cut out of half inch plywood with a radius sanded into the corners. I mounted large pressure sensors to the front foot pad so the board could recognize when I am on it and when I wish to stop by lifting my front heel. This turned out to be a very fun and successful project in the end and I still use it to get around! For the first couple months of riding it around campus, I got stopped countless times by people wanting to know what it was, how I made it, or wanting to try it.</p>
      
      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/blog/diy-balancing-skateboard/ow final ride.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic mt-2">First Ride of the Board Around Campus</p>
      </div>
    `
  },
  4: {
    title: 'Custom CNC Machined Shift Knob',
    excerpt: 'Learning CNC machining through hands-on experience creating a custom aluminum shift knob using both lathe and mill operations in a machine shop class.',
    date: '2024-09-20',
    category: 'Projects',
    tags: ['CNC Machining', 'Lathe', 'Mill', 'Aluminum', 'CAM Programming'],
    content: `
      <p>During the Spring semester of my junior year in college, I had the opportunity to take a machine shop class, something I'd been wanting to do for years. Over the course of the semester, we learned how use a wide range of tools including lathes, mills, as well as MIG (GMAW) and TIG (GTAW) welders. While I had used most of these before, I had never had the chance to use a CNC mill or lathe (aside from a CNC router). So, when assigned a final project of our own personal choosing, I jumped at the opportunity of having free reign over these machines.</p>
      
      <p>We were only allotted three class sessions to work on our projects, so I couldn't create anything too fancy or with many parts. We were also required to use three or more processes to make it (mill, lathe, waterjet, welding, etc.). Ultimately, I decided to make a shift knob for my car thinking it would be quick and easily doable in three class sessions (I was wrong). In the end, I spent 20-ish hours in the machine shop making friends with the staff and asking them for help on my project.</p>
      
      <div className="my-8">
        <img src="/blog/cnc-shift-knob/image-1.png" alt="Custom Shift Knob CAD Model" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Custom Shift Knob CAD Model</p>
      </div>
      
      <p>Despite asking for help, I did not want any hand-holding. I would ask for as little information as possible, just enough to not crash a big and expensive CNC machine. There are two machinists, each with decades of experience each, who were happy to share their expertise with me. While I know I could do it again, it was very tough to wrap my head around the setup the first time – how and where to mount the lathe tools, what order of operations is best, you name it! I greatly appreciate the advice they gave me.</p>
      
      <div className="my-8">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/blog/cnc-shift-knob/CAM Path.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-400 text-center italic">Computer-Aided Manufacturing (CAM) Simulation</p>
      </div>
      
      <p>I eventually settled on a process that worked out well. I cut aluminum bar stock to length on a band saw. Then I chucked it up in the Haas TL-2 CNC lathe and ran my program, but not before mounting and setting the zero on all of my tools and the stock itself. I made sure to leave the shift ball attached to the stock so that it could be easily mounted in a milling vice or back in the lathe for future operations. After that, I drilled and tapped 6 evenly spaced holes radially around the top of the shift knob. I then cut another piece of stock to be used as the top plate on the band saw. We didn't have aluminum sheet of the proper thickness so I used a smaller piece of bar stock. I put it in the manual Bridgeport mill and drilled the corresponding mounting pattern in it. Then I mounted the stock in a lathe to cut to the right diameter and then parted off the plate, ensuring to check that it was within tolerance from my CAD model and corresponding drawing. I then mounted the plate on top of the shift knob using six M2.5 machine screws, and mounted the whole assembly in the CNC mill. After zeroing off the part and tools with a probe, I ran a program to engrave the shift pattern into the decorative top plate. Lastly, I mounted the shift knob back in the lathe using the stock I had left, and then brushed it with a scotch-brite pad before parting it off.</p>
      
      <div className="my-8">
        <img src="/blog/cnc-shift-knob/image-2.jpeg" alt="In-Progress Shot of Shift Knob on the Lathe" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">In-Progress Shot of Shift Knob on the Lathe</p>
      </div>
      
      <p>I was - and still am - thrilled with the end result. One small issue that I failed to consider until I had already started the project is that the knob gets too hot to touch after having sat outside in the phoenix heat. It's a shame that I have to keep a microfiber cloth on it just to be able to use it, but come wintertime, it'll be a show stopper!</p>
      
      <div className="my-8">
        <img src="/blog/cnc-shift-knob/image-3.jpeg" alt="Shift Knob Installed in my Car" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Shift Knob Installed in my Car</p>
      </div>
    `
  },
  5: {
    title: 'Senior Capstone Project: Foil Bearing Test Rig',
    excerpt: 'My senior capstone project sponsored by Honeywell Aerospace - developing a test rig to evaluate the lifespan of foil bearings used in gas turbine engines.',
    date: '2025-01-20',
    category: 'Capstone',
    tags: ['Honeywell', 'Aerospace', 'Foil Bearings', 'Test Rig', 'Senior Project'],
    content: `
      <p>As part of the final year for engineering students at Embry-Riddle, all seniors in the program must complete a Capstone project. These projects are two semesters long and consist of preliminary design in the first semester and detailed design in the second. As an undergraduate student, they are an excellent way to tackle real-world engineering problems in a way that resembles what soon-to-be graduates will experience in industry. Capstone projects are completed in groups ranging between 5 and 8 students.</p>
      
      <p>During the preliminary design phase, students are tasked with developing project requirements, performing trade studies, and delivering preliminary designs of their project. Although some teams must come up with their own ideas for capstone projects, my team has been fortunate enough to receive a sponsorship from Honeywell Aerospace. We are tasked with creating a rig to test foil bearings for use in their engines. The goal of the rig is to help engineers at Honeywell estimate the lifespan of the bearings before repair or replacement.</p>
      
      <p>To give some basic background on the project, foil bearings are contactless while spinning, and rely on a thin film of high-pressure air to keep the shaft suspended and constrained. Surrounding the shaft is a series of foils, which are thin metal sheets bent into various shapes depending on the application. One of these is known as the bump foil, which acts as a spring, absorbing small impacts from the shaft and also allowing the gap between foils and shaft to change with changing film air pressure. The other foil is called the top foil and it acts as a surface for which the pressure to act upon. Given ingestion of small, high velocity dust particles over time, these foils and their coatings will abrade and eventually need replacement. As mentioned, our project is concerned with finding out how long the foils will last before requiring such replacement.</p>
      
      <div className="my-8">
        <img src="/blog/capstone/image-1.png" alt="Diagram of a Basic Foil Bearing" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Diagram of a Basic Foil Bearing (Source: nasa.gov)</p>
      </div>
      
      <p>We were given a document from Honeywell detailing the "why" of this test rig and given basic requirements. Throughout the course of our meetings with our engineering contact at Honeywell, we have ascertained more about what the company requires of the machine and have developed a comprehensive set of high-level stakeholder requirements for the project.</p>
      
      <p>Given these high-level requirements, we created a block diagram of the system which included the main subsystems and how each of them will interface with each other. I then created several mathematical models in Matlab to validate whether our initial layout and assumptions would work. These include a heat transfer model for air heater sizing, a fluids model to determine torque required to maintain our target speed, and so on. We use the outcomes of these models to size components, determine electrical power required for our facilities team, and to refine our initial assumptions.</p>
      
      <p>With a basic system layout established, we then conducted trade studies on various components required for the project. These include components like seals, motors, heaters, controllers, and much more! The goal of these trade studies is to further refine our system based on several criteria including cost, safety, reliability, and ability to meet project requirements. While we conducted trade studies, I took some time to create our first CAD model of the test rig. While the design has not changed drastically since then, there were certain downfalls that we needed to address. Some of these were uncovered through CFD and vibrational analysis but other issues were brought up while presenting to our engineering professors and our advisor at Honeywell.</p>
      
      <p>With our test rig designed and refined, components picked out, and math to validate that it should all work, we were given the go ahead to start bringing the machine to life. This brings us to the detailed design semester. I have been living in the machine shop producing part after part for the project. Simultaneously the rest of my team has been sourcing our off-the-shelf supplies, ensuring campus facilities can supply power and air to our testing location, and further tweaking the design as we discover new information.</p>
      
      <p>That said, I'd like to walk you through how the test rig works. The diagram below provides a basic overview with our main subsystems labeled.</p>
      
      <div className="my-8">
        <img src="/blog/capstone/image-2.png" alt="System Overview" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">System Overview (Source: ERAU B.E.A.R Capstone Team)</p>
      </div>
      
      <p>Prior to entering the test rig, the air from our compressor passes through a mass flow controller. This ensures that we meet our mass flow requirement given to us by Honeywell. It then passes through a computerized heater and brought up to our target temperature. Finally, the air enters the test rig through the air inlet labeled towards the left of the diagram. It flows towards the right and intersects the inlet of the sediment injector. The job of the sediment injector is to seed the air with a precisely controlled amount of dust. To determine the right amount to inject, we are simulating the worst conditions one of Honeywell's engines will see in its regular operations, then multiplying it by an acceleration factor to speed up testing. The air and dust mixture then flows towards the back of the rig where it passes through the foil bearing and ultimately into the dust collection system. For a better look at what's happening inside the rig, see the following cross-sectional diagram.</p>
      
      <div className="my-8">
        <img src="/blog/capstone/image-3.png" alt="Cross-section Overview" className="w-full rounded-lg shadow-lg mb-2" />
        <p className="text-sm text-gray-400 text-center italic">Cross-section Overview (Source: ERAU B.E.A.R Capstone Team)</p>
      </div>
      
      <p>In the above diagram, you can clearly see the air inlet in the top left corner. What you will now notice is the ball bearing and labyrinth seal directly below it now. The ball bearing supports the shaft on one end while the foil bearing supports it on the other. The purpose of the labyrinth seal is to prevent air from flowing out of the left side of the rig, rather forcing it to exit through the foil bearing side. The shaft, labeled in blue, is driven by a 7.5-kilowatt electric motor up to a target speed of 60,000 rpm through the use of a belt drive system. The sediment distributors shown were designed with the intent of spreading the dirt more uniformly as to not wear the bearing down unevenly. However, they have since been redesigned as a result of our findings using computational fluid dynamics (CFD) simulations of our system.</p>
      
      <p>As of now, we have machined eight of our custom components with seven still remaining. We are on track to be finished machining by the end of February which is when we will begin assembly and integration of all of our systems. I will update the post as we make further progress.</p>
      
      <p>I would like to give a special thanks to Honeywell for sponsoring our project, as well as our advisor at Honeywell and the various professors at Embry-Riddle who have guided us throughout this project. Thank you for reading and be sure to check back for future updates!</p>
    `
  },
  6: {
    title: 'Robotic Golf Caddy',
    excerpt: 'Building an autonomous golf cart that uses computer vision and machine learning to follow me around the golf course while avoiding hazards like water and sand bunkers.',
    date: '2024-10-01',
    category: 'Projects',
    tags: ['Robotics', 'Computer Vision', 'Machine Learning', 'DIY', 'Golf'],
    content: `
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
    `
  },
  // Add more blog posts here...
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = params.id
  const post = blogPostData[Number(postId) as keyof typeof blogPostData]

  return <BlogPostContent post={post || null} postId={postId} />
}
