2:I[8255,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","548","static/chunks/app/blog/%5Bid%5D/page-527c0a7c1bff85dd.js"],"default"]
4:I[4707,[],""]
6:I[6423,[],""]
7:I[6971,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","185","static/chunks/app/layout-634889e39ef871dc.js"],"MatrixBackground"]
8:I[9937,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","185","static/chunks/app/layout-634889e39ef871dc.js"],"Header"]
9:I[2834,["183","static/chunks/183-b7c0660f07b54635.js","216","static/chunks/216-f8ebcfec76b4de20.js","185","static/chunks/app/layout-634889e39ef871dc.js"],"Footer"]
3:T26fe,
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
    5:["id","6","d"]
0:["k9IFyOw30fYv4mdmBwXkk",[[["",{"children":["blog",{"children":[["id","6","d"],{"children":["__PAGE__?{\"id\":\"6\"}",{}]}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":[["id","6","d"],{"children":["__PAGE__",{},[["$L1",["$","$L2",null,{"post":{"title":"Robotic Golf Caddy","excerpt":"Building an autonomous golf cart that uses computer vision and machine learning to follow me around the golf course while avoiding hazards like water and sand bunkers.","date":"2024-10-01","category":"Projects","tags":["Robotics","Computer Vision","Machine Learning","DIY","Golf"],"content":"$3"},"postId":"6"}],null],null],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","$5","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/a8eb8fd93b25ae00.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","className":"dark","children":["$","body",null,{"className":"__variable_f367f3 __variable_13fb82 font-sans antialiased","children":[["$","$L7",null,{}],["$","div",null,{"className":"relative z-10 min-h-screen flex flex-col","children":[["$","$L8",null,{}],["$","main",null,{"className":"flex-grow","children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}],["$","$L9",null,{}]]}]]}]}]],null],null],["$La",null]]]]
a:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","3",{"name":"description","content":"Portfolio of Benjamin Freeman, Senior Mechanical Engineering Student at Embry-Riddle Aeronautical University specializing in jet engine propulsion systems."}],["$","meta","4",{"name":"author","content":"Benjamin Freeman"}],["$","meta","5",{"name":"keywords","content":"Benjamin Freeman, Mechanical Engineering, Embry-Riddle, Jet Engine, Propulsion, Aerospace, Student Portfolio"}],["$","meta","6",{"name":"creator","content":"Benjamin Freeman"}],["$","meta","7",{"name":"robots","content":"index, follow"}],["$","meta","8",{"property":"og:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","9",{"property":"og:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}],["$","meta","10",{"property":"og:locale","content":"en_US"}],["$","meta","11",{"property":"og:type","content":"website"}],["$","meta","12",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","13",{"name":"twitter:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","14",{"name":"twitter:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}]]
1:null
