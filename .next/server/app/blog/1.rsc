2:I[8255,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","548","static/chunks/app/blog/%5Bid%5D/page-100defdbbe706584.js"],"default"]
4:I[4707,[],""]
6:I[6423,[],""]
7:I[8133,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"Analytics"]
8:I[6971,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"MatrixBackground"]
9:I[9937,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"Header"]
a:I[2834,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"Footer"]
3:T1d2f,
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
    5:["id","1","d"]
0:["croZWWoJaCZFMQKlt_P09",[[["",{"children":["blog",{"children":[["id","1","d"],{"children":["__PAGE__?{\"id\":\"1\"}",{}]}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":[["id","1","d"],{"children":["__PAGE__",{},[["$L1",["$","$L2",null,{"post":{"title":"Datsun Roadster Project","excerpt":"A 30-year restoration project involving reverse engineering, 3D scanning, and CNC machining to create a custom dashboard conversion kit for the Datsun community.","date":"2024-12-15","category":"Projects","tags":["Restoration","CNC","3D Scanning","Reverse Engineering"],"content":"$3"},"postId":"1"}],null],null],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","$5","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/99abd9eda8029569.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","className":"dark","children":["$","body",null,{"className":"__variable_f367f3 __variable_13fb82 font-sans antialiased","children":[["$","$L7",null,{}],["$","$L8",null,{}],["$","div",null,{"className":"relative z-10 min-h-screen flex flex-col","children":[["$","$L9",null,{}],["$","main",null,{"className":"flex-grow","children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}],["$","$La",null,{}]]}]]}]}]],null],null],["$Lb",null]]]]
b:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","3",{"name":"description","content":"Portfolio of Benjamin Freeman, Senior Mechanical Engineering Student at Embry-Riddle Aeronautical University specializing in jet engine propulsion systems."}],["$","meta","4",{"name":"author","content":"Benjamin Freeman"}],["$","meta","5",{"name":"keywords","content":"Benjamin Freeman, Mechanical Engineering, Embry-Riddle, Jet Engine, Propulsion, Aerospace, Student Portfolio"}],["$","meta","6",{"name":"creator","content":"Benjamin Freeman"}],["$","meta","7",{"name":"robots","content":"index, follow"}],["$","meta","8",{"property":"og:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","9",{"property":"og:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}],["$","meta","10",{"property":"og:locale","content":"en_US"}],["$","meta","11",{"property":"og:type","content":"website"}],["$","meta","12",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","13",{"name":"twitter:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","14",{"name":"twitter:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}]]
1:null
