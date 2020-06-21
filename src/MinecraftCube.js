import * as THREE from 'three';

export class MinecraftCube extends THREE.BoxGeometry {


    constructor(cubeType) {

        super();
        
        this.numTexture = 4;

        if (cubeType == 0) {
        
            this.makeWater();
            

        } else if (cubeType == 1) {

           
            this.makeGrass();
        }

    }





    makeWater() {

        //premier triangle de la face Right (le supérieur)
         this.faceVertexUvs[0][0] = [new THREE.Vector2(0, 1 / this.numTexture * 4), new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         this.faceVertexUvs[0][1] = [new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         // left
         this.faceVertexUvs[0][2] = [new THREE.Vector2(0, 1 / this.numTexture * 4), new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         this.faceVertexUvs[0][3] = [new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         // top
         this.faceVertexUvs[0][4] = [new THREE.Vector2(0, 1 / this.numTexture * 4), new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         this.faceVertexUvs[0][5] = [new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         // bottom
         this.faceVertexUvs[0][6] = [new THREE.Vector2(0, 1 / this.numTexture * 4), new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         this.faceVertexUvs[0][7] = [new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         // front
         this.faceVertexUvs[0][8] = [new THREE.Vector2(0, 1 / this.numTexture * 4), new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         this.faceVertexUvs[0][9] = [new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         // back
         this.faceVertexUvs[0][10] = [new THREE.Vector2(0, 1 / this.numTexture * 4), new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];
         this.faceVertexUvs[0][11] = [new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 3), new THREE.Vector2(1, 1 / this.numTexture * 4)];

       
       
    }


    makeGrass() {
         
        // right
        this.faceVertexUvs[0][0] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][1] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        // left
        this.faceVertexUvs[0][2] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][3] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        // top
        this.faceVertexUvs[0][4] = [new THREE.Vector2(0, 1 / this.numTexture * 2), new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(1, 1 / this.numTexture * 2)];
        this.faceVertexUvs[0][5] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(1, 1 / this.numTexture), new THREE.Vector2(1, 1 / this.numTexture * 2)];
        // bottom
        this.faceVertexUvs[0][6] = [new THREE.Vector2(0, 1 / this.numTexture * 3), new THREE.Vector2(0, 1 / this.numTexture * 2), new THREE.Vector2(1, 1 / this.numTexture * 3)];
        this.faceVertexUvs[0][7] = [new THREE.Vector2(0, 1 / this.numTexture * 2), new THREE.Vector2(1, 1 / this.numTexture * 2), new THREE.Vector2(1, 1 / this.numTexture * 3)];
        // front
        this.faceVertexUvs[0][8] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][9] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        // back
        this.faceVertexUvs[0][10] = [new THREE.Vector2(0, 1 / this.numTexture), new THREE.Vector2(0, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        this.faceVertexUvs[0][11] = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1 / this.numTexture)];
        

    }








}