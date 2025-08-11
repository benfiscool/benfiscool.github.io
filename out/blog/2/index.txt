2:I[356,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","548","static/chunks/app/blog/%5Bid%5D/page-e58c27045ab96cbd.js"],"default"]
4:I[4707,[],""]
6:I[6423,[],""]
7:I[6971,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","185","static/chunks/app/layout-26faba855c9b49bd.js"],"MatrixBackground"]
8:I[2220,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","185","static/chunks/app/layout-26faba855c9b49bd.js"],"Header"]
9:I[2834,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","185","static/chunks/app/layout-26faba855c9b49bd.js"],"Footer"]
3:T19ae,
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
    5:["id","2","d"]
0:["zQ4BAKTipFMHxxRTS-dnW",[[["",{"children":["blog",{"children":[["id","2","d"],{"children":["__PAGE__?{\"id\":\"2\"}",{}]}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":[["id","2","d"],{"children":["__PAGE__",{},[["$L1",["$","$L2",null,{"post":{"title":"CNC Tubing Coper","excerpt":"Building a custom CNC machine to help the Formula SAE team cope tubing with high accuracy and minimal human intervention, solving chassis asymmetry issues.","date":"2024-11-20","readTime":"8 min read","category":"Projects","tags":["CNC","Formula SAE","Manufacturing","Automation","Plasma Cutting"],"content":"$3"},"postId":"2"}],null],null],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","$5","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/2608d1544d68cb93.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","className":"dark","children":["$","body",null,{"className":"__variable_e8ce0c __variable_ae1979 font-sans antialiased","children":[["$","$L7",null,{}],["$","div",null,{"className":"relative z-10 min-h-screen flex flex-col","children":[["$","$L8",null,{}],["$","main",null,{"className":"flex-grow","children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}],["$","$L9",null,{}]]}]]}]}]],null],null],["$La",null]]]]
a:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","3",{"name":"description","content":"Portfolio of Benjamin Freeman, Senior Mechanical Engineering Student at Embry-Riddle Aeronautical University specializing in jet engine propulsion systems."}],["$","meta","4",{"name":"author","content":"Benjamin Freeman"}],["$","meta","5",{"name":"keywords","content":"Benjamin Freeman, Mechanical Engineering, Embry-Riddle, Jet Engine, Propulsion, Aerospace, Student Portfolio"}],["$","meta","6",{"name":"creator","content":"Benjamin Freeman"}],["$","meta","7",{"name":"robots","content":"index, follow"}],["$","meta","8",{"property":"og:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","9",{"property":"og:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}],["$","meta","10",{"property":"og:locale","content":"en_US"}],["$","meta","11",{"property":"og:type","content":"website"}],["$","meta","12",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","13",{"name":"twitter:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","14",{"name":"twitter:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}]]
1:null
