var config = {
  //config for the 4 buttons
  sides: {
    top:{
      name:'config',
      //will not be generated into html or js if set to false
      active:true,
      //will be resized to 70x70 px
      img:'gear.png',
      //name of the function that is executed onClick. These have to be declared before executing this!
      action:topAction
    },
    right:{
      name:'remove',
      active:true,
      img:'cross.png',
      action:rightAction
    },
    bottom:{
      name:'options',
      active:true,
      img:'bars.png',
      action:bottomAction
    },
    left:{
      name:'add',
      active:true,
      img:'plus.png',
      action:leftAction
    }
  },
  //will be resized to 300x300 px
  background:'emptyRing.png'
}
