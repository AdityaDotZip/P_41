class Rain{
    constructor(x, y){
        var options = {
            isStatic: false,
            density:1,
            friction: 0.1
        }

        this.body = Bodies.circle(x, y, 4, options);
        World.add(world, this.body);
    }

    display(){
       var pos = this.body.position;

        fill("blue");
        ellipse(pos.x, pos.y, 8, 8);
    }

    updatePos(){
        if(this.body.position.y >= 755){
            Matter.Body.setPosition(this.body, {x: random(0, 450), y: 0});
        }
    }
}