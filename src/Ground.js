import * as THREE from 'three';
import {makeNoise2D} from 'open-simplex-noise';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { MinecraftCube } from './MinecraftCube';



//heritage, la classe se comporte maintenant comme un groupe 3d
export class Ground extends THREE.Group {
    constructor(size, height, renderer, camera, scene){

        super();
        //j'appelle le constructor de THREE.Group


        this.renderer = renderer;
        this.camera = camera;
        this.scene = scene;


        const heightTab = this.generateNoise(size, height);

        console.log(heightTab);
        
        this.createBoxes(heightTab, size);

       
    }


    createBoxes(heightTab, size) {

        let heightValue = 0;
        
        

        let cubeGeometry;
        let groundGeometry = new THREE.BufferGeometry();
        let groundMesh;
        let material;
        
        let cubes = [];

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {         

                heightValue = heightTab[x + y * size];
                //retrouver la bonne valeur au bon endroit

                for (let h = 0; h <= heightValue; h++) {
                   
                    
                    if(h <=1) {
                        cubeGeometry = new MinecraftCube(0);
                    } else if(h > 1) {
                        cubeGeometry = new MinecraftCube(1);
                    }

                    
                
                    cubeGeometry.translate(x, h,y);
                    // il faut mettre ça dans la geometrie du sol
                    
                    cubes.push(new THREE.BufferGeometry().fromGeometry(cubeGeometry));
                    //geometry moins opti que le buffer, mais plus simple à utiliser
                    //on passe par une geometry normale en faisant une conversion , tu importes les données depuis le cubegeometry

                }
                
            }
            
        }

        groundGeometry = BufferGeometryUtils.mergeBufferGeometries(cubes);

        let texture = new THREE.TextureLoader().load('/src/atlas1.png');
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;
        //permet de voir les pixels de la texture


        material =  new THREE.MeshLambertMaterial();  // materiau basique qui ne réagit pas à la lumière avec un object en paramètre                       
        material.vertexColors = THREE.VertexColors;  // c'est une constante qui utilise la couleur passée au niveau de la geométrie
        material.map = texture; 
        




        /*
        material.color.r = Math.random();
        material.color.g = Math.random();
        material.color.b = Math.random();
        */


        groundMesh = new THREE.Mesh(groundGeometry, material);

        this.add(groundMesh);
    }


    generateNoise(size, height) {
        //taille total de mon tableau pour toutes les elevations de mon niveau = size x size
        let tab = new Array(size * size);

        const noise2D = makeNoise2D(Date.now());
        //la map sera différente à chaque refresh, ça génère une seed
        const zoomFactor = 10;

        //tableau d'une seule dimension POUR STOCKER LA VALEUR DE NOISE GENERée
        let i;
        let elevation; 

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                i = x + y * size;
                //i va monter de 0 jusqu'a la valeur du tableau

                elevation = Math.round((noise2D(x/zoomFactor, y/zoomFactor) + 1) * 0.5 * height);   

                tab[i] = elevation;


                
            }}



        return tab;
    }
}