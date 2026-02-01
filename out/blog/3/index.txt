2:I[8255,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","548","static/chunks/app/blog/%5Bid%5D/page-100defdbbe706584.js"],"default"]
4:I[4707,[],""]
6:I[6423,[],""]
7:I[8133,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"Analytics"]
8:I[6971,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"MatrixBackground"]
9:I[9937,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"Header"]
a:I[2834,["345","static/chunks/345-6abda80b2e2899a3.js","216","static/chunks/216-ecc0742d6f9e42dc.js","667","static/chunks/667-1f7815e4e153b907.js","185","static/chunks/app/layout-3925f62722d7c5ff.js"],"Footer"]
3:T121c,
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
    5:["id","3","d"]
0:["croZWWoJaCZFMQKlt_P09",[[["",{"children":["blog",{"children":[["id","3","d"],{"children":["__PAGE__?{\"id\":\"3\"}",{}]}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":[["id","3","d"],{"children":["__PAGE__",{},[["$L1",["$","$L2",null,{"post":{"title":"DIY Balancing Skateboard","excerpt":"Building my own OneWheel-inspired balancing skateboard from scratch using a VESC motor controller, aluminum chassis, and custom PID tuning for the perfect ride.","date":"2024-10-15","category":"Projects","tags":["DIY","Electric Vehicle","PID Control","VESC","Fabrication"],"content":"$3"},"postId":"3"}],null],null],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","$5","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[null,["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/99abd9eda8029569.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","className":"dark","children":["$","body",null,{"className":"__variable_f367f3 __variable_13fb82 font-sans antialiased","children":[["$","$L7",null,{}],["$","$L8",null,{}],["$","div",null,{"className":"relative z-10 min-h-screen flex flex-col","children":[["$","$L9",null,{}],["$","main",null,{"className":"flex-grow","children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}],["$","$La",null,{}]]}]]}]}]],null],null],["$Lb",null]]]]
b:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","3",{"name":"description","content":"Portfolio of Benjamin Freeman, Senior Mechanical Engineering Student at Embry-Riddle Aeronautical University specializing in jet engine propulsion systems."}],["$","meta","4",{"name":"author","content":"Benjamin Freeman"}],["$","meta","5",{"name":"keywords","content":"Benjamin Freeman, Mechanical Engineering, Embry-Riddle, Jet Engine, Propulsion, Aerospace, Student Portfolio"}],["$","meta","6",{"name":"creator","content":"Benjamin Freeman"}],["$","meta","7",{"name":"robots","content":"index, follow"}],["$","meta","8",{"property":"og:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","9",{"property":"og:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}],["$","meta","10",{"property":"og:locale","content":"en_US"}],["$","meta","11",{"property":"og:type","content":"website"}],["$","meta","12",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","13",{"name":"twitter:title","content":"Benjamin Freeman | Mechanical Engineering Student"}],["$","meta","14",{"name":"twitter:description","content":"Portfolio showcasing my journey in mechanical engineering and passion for jet propulsion systems."}]]
1:null
