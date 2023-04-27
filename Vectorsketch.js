        const leftCol = ( sketch ) => {
        let scroll_offset = 0;
        let RandNumsInitialzed = false;
        let RandomXPos = [];
        let RandomYPos = [];
        let RandomRadius =[];
        let RandomItters = 50;

        sketch.setup = () => {
            var width = document.getElementById('LeftCol').offsetWidth+1;
            var height = document.getElementById('CenterCol').offsetHeight
            // var myCanvas = sketch.createCanvas(1000, 1000, WEBGL);
            sketch.createCanvas(width, height, sketch.WEBGL);
        };
      
        sketch.draw = () => {
            sketch.background(255);
            sketch.cubes();
            // sketch.pop();
            sketch.InitRandomNums();
            sketch.randomDots();
        };


        sketch.mouseWheel = (event) => {
            scroll_offset += event.delta;
            // console.log(scroll_offset)
        }

        sketch.cubes = () =>{
            sketch.noFill();
            sketch.stroke(0);
            
            
            sketch.push();
            sketch.translate(-sketch.mouseX/40, -sketch.mouseY/60, 0);
            sketch.push();
            sketch.translate(0,-100,0);
            sketch.rotateY(scroll_offset * 0.001+76);
            sketch.rotateX(scroll_offset * 0.001+20);
            sketch.box(100);
            sketch.pop();
            
            sketch.push();
            sketch.translate(30,-500,0);
            sketch.rotateY(scroll_offset * -0.001+60);
            sketch.rotateX(scroll_offset * 0.001+90);
            sketch.box(50);
            sketch.pop();
            
            sketch.push();
            sketch.translate(-20,-700,0);
            sketch.rotateY(scroll_offset * 0.001+200);
            sketch.rotateX(scroll_offset * 0.001+60);
            sketch.box(90);
            sketch.pop();

            sketch.push();
            sketch.translate(-20,-300,0);
            sketch.rotateY(scroll_offset * 0.001+10);
            sketch.rotateX(scroll_offset * -0.001+56);
            sketch.box(20);
            sketch.pop();

            sketch.push();
            sketch.translate(-20,200,0);
            sketch.rotateY(scroll_offset * 0.001+23);
            sketch.rotateX(scroll_offset * -0.001+76);
            sketch.box(70);
            sketch.pop();


            sketch.push();
            sketch.translate(24,550,0);
            sketch.rotateY(scroll_offset * 0.001+120);
            sketch.rotateX(scroll_offset * -0.001+145);
            sketch.box(90);
            sketch.pop();


            sketch.pop();
        }


        sketch.randomDots = () =>{
            
            sketch.push();
            sketch.fill(0);
            sketch.translate(-sketch.mouseX/120, -sketch.mouseY/120, 0);
            for (let i = 0; i < RandomItters; i++) {
            sketch.ellipse(RandomXPos[i],RandomYPos[i],RandomRadius[i]);
            }
            sketch.pop();
            
            
        }

        sketch.InitRandomNums = () => {
            if (RandNumsInitialzed == false){
                for (let i = 0; i < RandomItters; i++) {
                    RandomXPos.push(sketch.random(-200,200));
                    RandomYPos.push(sketch.random(-1000,1000));
                    RandomRadius.push(sketch.random(2,7));
                }
            }
            RandNumsInitialzed = true;
        }


        //Resizes canvas when window resizes
        sketch.windowResized = function(){
            var width = document.getElementById('LeftCol').offsetWidth+1;
            var height = document.getElementById('CenterCol').offsetHeight
            sketch.resizeCanvas(width,height);
        };


      };
      let myp5leftCol = new p5(leftCol, "LeftCol");
    //
    //END OF LEFT COL
    //
    

      const rightCol = ( sketch ) => {
        let scroll_offset = 0;
        let RandNumsInitialzed = false;
        let RandomXPos = [];
        let RandomYPos = [];
        let RandomRadius =[];
        let RandomItters = 50;
        let c1 = sketch.color(255);
        let c2 = sketch.color(150);

        sketch.setup = () => {
            var width = document.getElementById('RightCol').offsetWidth;
            var height = document.getElementById('CenterCol').offsetHeight
            sketch.createCanvas(width, height, sketch.WEBGL);
        };
      
        sketch.draw = () => {

            sketch.background(255,255,255,50);
            // sketch.setGradient(-sketch.width/2,-sketch.height/2,sketch.width,sketch.height,c1,c2);
            
            
           
            sketch.cubes();  
            // sketch.pop();
            
            sketch.InitRandomNums();
            sketch.randomDots();
        
            
        };

        sketch.setGradient = (x, y, w, h, c2, c1,) => {
            sketch.noFill();
          
   
    
              // Left to right gradient
              for (let i = x; i <= x + w; i++) {
                let inter = sketch.map(i, x, x + w, 0, 1);
                let c = sketch.lerpColor(c1, c2, inter);
                sketch.stroke(c);
                sketch.line(i, y, i, y + h);
              }
          }


        sketch.mouseWheel = (event) => {
            scroll_offset += event.delta;
            // console.log(scroll_offset)
        }

        sketch.cubes = () =>{
            sketch.noFill();
            sketch.stroke(0);
            sketch.push();
            sketch.translate(-sketch.mouseX/40, -sketch.mouseY/60, 0);
            sketch.push();
            sketch.rotateY(scroll_offset * -0.001+50);
            sketch.rotateX(scroll_offset * 0.001+70);
            sketch.box(120);
            sketch.pop();

            sketch.push();
            sketch.translate(30,-400,0);
            sketch.rotateY(scroll_offset * 0.001+30);
            sketch.rotateX(scroll_offset * 0.001+70);
            sketch.box(50);
            sketch.pop();
            
            sketch.push();
            sketch.translate(-20,-850,0);
            sketch.rotateY(scroll_offset * 0.001+100);
            sketch.rotateX(scroll_offset * 0.001+10);
            sketch.box(70);
            sketch.pop();

            sketch.push();
            sketch.translate(-20,-200,0);
            sketch.rotateY(scroll_offset * -0.001+10);
            sketch.rotateX(scroll_offset * 0.001+56);
            sketch.box(20);
            sketch.pop();

            sketch.push();
            sketch.translate(70,300,0);
            sketch.rotateY(scroll_offset * -0.001+10);
            sketch.rotateX(scroll_offset * 0.001+56);
            sketch.box(30);
            sketch.pop();


            sketch.push();
            sketch.translate(-20,600,0);
            sketch.rotateY(scroll_offset * -0.001+10);
            sketch.rotateX(scroll_offset * 0.001+56);
            sketch.box(70);
            sketch.pop();

            sketch.pop();
        }

        sketch.randomDots = () =>{
            sketch.fill(0);
            sketch.push();
            sketch.translate(-sketch.mouseX/120, -sketch.mouseY/120, 0);
            for (let i = 0; i < RandomItters; i++) {
            sketch.ellipse(RandomXPos[i],RandomYPos[i],RandomRadius[i]);
            }
            sketch.pop();
            
            
        }

        sketch.InitRandomNums = () => {
            if (RandNumsInitialzed == false){
                for (let i = 0; i < RandomItters; i++) {
                    RandomXPos.push(sketch.random(-200,200));
                    RandomYPos.push(sketch.random(-1000,1000));
                    RandomRadius.push(sketch.random(2,7));
                }
            }
            RandNumsInitialzed = true;
        }
        sketch.windowResized = function(){
            var width = document.getElementById('RightCol').offsetWidth+1;
            var height = document.getElementById('CenterCol').offsetHeight
            sketch.resizeCanvas(width,height);
            sketch.setGradient(-sketch.width/2,-sketch.height/2,sketch.width,sketch.height,c1,c2);
        };
      };
      let myp5rightCol = new p5(rightCol, "RightCol");


    const MovingShape = ( sketch ) => {
      

        let mouse_offset = 0;
        let lastX_pos = 0;
        let lastY_pos = 0;
        let mouseInBounds = false;
        let a = 90;
        let lrToggle = 1.5;

        sketch.preload = () =>{
            font = sketch.loadFont('Fonts/Metropolis-Regular.otf');
            
            gif = sketch.loadImage('Images/SpinningCube.gif');
            Metalborder = sketch.loadImage('Images/MovingSquareBorder.png');
            bg = sketch.loadImage('Images/MovingSquareTestBg.png');


        }
        
        sketch.setup = () => {
            var width = document.getElementById('MovingShape').offsetWidth+1;
            var height = document.getElementById('MovingShape').offsetHeight
            // var myCanvas = sketch.createCanvas(1000, 1000, WEBGL);
            sketch.createCanvas(width, height, sketch.P2D);  
            sketch.textFont(font);
            sketch.textSize(30);
        };
      
        sketch.draw = () => {

            sketch.fill(255, 255, 255, 255);
            sketch.rect(30, 20, 460,260);
            sketch.inCanvasBounds();
            
            
            sketch.push();
            // sketch.translate(0,0);

            sketch.image(bg,250,150,450,260);
            sketch.pop();

            sketch.push();
            sketch.followSquare();
            sketch.pop();
            
            sketch.imageMode(sketch.CENTER);
            sketch.translate(0, 0, 0);
            sketch.image(Metalborder,sketch.width/2,sketch.height/2, Metalborder.width/1.9, Metalborder.height/1.9);
            // console.log(mouseInBounds);
            

        };


        sketch.followSquare = () =>{
            sketch.fill("White");
            if(mouseInBounds == true){
                sketch.text('X: '+ sketch.ceil(sketch.mouseX), 145,70);
                sketch.text('Y: '+ sketch.ceil(sketch.mouseY), 260,70);
            sketch.translate(sketch.mouseX, sketch.mouseY, 0);
            sketch.rotate(mouse_offset);
            }
            else{
                sketch.text('X: '+ sketch.ceil(a), 145,70);
                sketch.text('Y: '+ sketch.ceil(sketch.sin(a/20)*10+180), 260,70);
                var xDist = sketch.abs(100 - sketch.mouseX);
                var yDist = sketch.abs(100 - sketch.mouseX);
                let newAngel = sketch.atan2(sketch.mouseY - sketch.height / 2, sketch.mouseX - sketch.width / 2);
                // sketch.translate(a, sketch.height/1.65, 0);
                sketch.translate(a, sketch.sin(a/20)*10+180, 0);
                sketch.rotate(newAngel);
                a = a + lrToggle; 
                if (a < 90 || a > sketch.width-90){
                    lrToggle = lrToggle * -1;
                }
            }
            
            sketch.imageMode(sketch.CENTER);
            sketch.image(gif, 0, 0, gif.width / 2, gif.height / 2);
           
        };


        sketch.mouseMoved = (event) => {
            
            // mouse_offset += .05;
            if (event.x > lastX_pos){
                mouse_offset += .05; 
            }
            else{
                mouse_offset -= .05; 
            }

            lastX_pos = event.x;
            lastY_pos = event.y;
            // console.log(event.x);
        }

        sketch.inCanvasBounds = () =>{
            if(sketch.mouseX > 50 && sketch.mouseY > 30 && sketch.mouseX <sketch.width && sketch.mouseY < sketch.height){
                mouseInBounds = true;
            }
            else{
                mouseInBounds = false;
            }
        }

    };
        let myp5MovingShapes = new p5(MovingShape, "MovingShape");

      
    





