# Minecraft----THREEJS
 
<b>The why</b>
As an Innitiation to ThreeJS, Vincent Caruso our JavaScript teacher, decided to build Minecraft with us. 

<b>Concept</b>
It’s Minecraft in your browser, generated with a noise algorithm. Depending on the level of the blocks, the texture changes.

<b>Pre-conception (april 2020)</b> :
We first started by setting up ThreeJS with webpack. The difficulty here was to set a good environnement for developpement. It was new but we grasped the basic of folders organization, npm scripts and more. After that, we had an initiation to a lot of 3D principles linked with ThreeJS : culling, oclusion, fov, light system, drawcall, batching... We’ve built our first scene with ThreeJS :  a simple cube, a simple lightning, a colored background, and an axis helper. We also solved a couples things. For example, we needed to have an “animate” function to refresh in real time the cube & we added a fps counter.

<b>Conception (april 2020 - may 2020)</b> : 

We continued with the logic of the program by multiplying the cubes in order to have a tray of 50 x 50 cubes. Then, we added the option to multiply the tray vertically so cubes could be disposed vertically. However we add a question: 
Why 50 cubes were making us lagging like we were playing a game at 8k on an AMD athlon II ?
We started optimizing the cubes by putting them in one cube so the render would be smoother.

Then, we had another question : how to randomize the cubes position everytime we refresh the page ? We used an algorithm of noise to generate that. It’s called “open-noise”. 
How it works : depending on the height passed in the index constructor (which defines the size of the tray), the algorithm will define a random elevation with an array. This array takes in parameters (size x size) for every elevations of the array. The algorithm generates a seed so the tray is different at each refresh of the page. The noise value is stored in a new array of 1 dimension. 

When the algorithm was setup, we had the randomness of the ground working perfectly. Cubes were also colored randomly.

The last step was to put textures on the cubes. Depending on the height of the world, the cubes wouldn’t have the same texture. For example, if the height was between 0-2, cubes would have the water texture part. We used class to do that by putting the cubes in another javascript file. It was a way to have a constructor to define the cubetype. Then we used UV Mapping to unfold the texture with vertexs. Vertexs works with coordinates. You need to assign to each vertexs a position in order to unfold the right part of the texture on the cube.
After that, it was over ! Minecraft was in the browser. 




