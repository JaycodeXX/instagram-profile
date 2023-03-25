let container = document.getElementById("container");

const gallery = ["https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/4763640/pexels-photo-4763640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/15987514/pexels-photo-15987514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/7162551/pexels-photo-7162551.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/5199147/pexels-photo-5199147.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/6957663/pexels-photo-6957663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/15577045/pexels-photo-15577045.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/15149059/pexels-photo-15149059.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/15780900/pexels-photo-15780900.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/15737940/pexels-photo-15737940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/15436975/pexels-photo-15436975.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
 "https://images.pexels.com/photos/15954139/pexels-photo-15954139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];


for(let index = 0; index < gallery.length; index++){
   let box = document.createElement("div");
   box.setAttribute("class", "box");
   container.appendChild(box);
   let image = document.createElement("img");
   image.setAttribute("src", gallery[index]);
   box.appendChild(image);
};