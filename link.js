class Link{
constructor(body1,body2){
var lastlink=body1.body.bodies.length-2
this.link=Constraint.create ({
    bodyA:body1.body.bodies[lastlink],
    bodyB:body2,
    length:-10,
    stiffness:0.01

})
World.add(world,this.link)



}




}