import * as THREE from 'three';

/*
import { Mesh, AmbientLight } from 'three';
// j’importe toutes les classes en nommant la racine THREE depuis le fichier three (il est dans node_module)
*/


import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';
import { Ground } from './Ground';

import Stats from 'three/examples/jsm/libs/stats.module.js'; //c'est un module et non une classe, on importe sans accolade


export class World3D {



    constructor(size,height,debug) {
        
       
        this.loader();

        this.scene, this.camera, this.renderer, this.cube, this.controls, this.ground, this.loadingManager, this.loadingScreen;
    
        this.createScene();

        this.makeControls();
               
        this.createLights();

        this.makeGround(size,height);

        if(debug) {
            this.createHelper();
        }

        
        this.animate();
       
        document.body.querySelector("#loading-screen").classList.add("hidden");
            
    
        console.log("calls",this.renderer.info.render.calls);
        console.log("triangles",this.renderer.info.render.triangles);

    }
    
    
    
    
    loader() {

        this.loadingManager =  new THREE.LoadingManager();
        this.loadingScreen = document.getElementById( 'loading-screen' );


        this.loadingManager.onStart = function () {
            console.log('Loading started')
            
	
            loadingScreen = document.getElementById( 'loading-screen' );
                
    
        };
    
        this.loadingManager.onLoad = function ( ) {
    
            loadingScreen.classList.add( 'fade-out' );
            console.log( 'Loading complete!');
            
        
         }
    
           
    
    
    }

   

    createScene() {



        //creation du canvas WebGL 
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild(this.renderer.domElement);
        



        //Scene = niveau
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xcce0ff);
        this.scene.fog = new THREE.Fog(0xcce0ff,0.3,1000);
    }


  

    makeControls() {
        // camera avec des unités
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.3,1000);
        this.camera.position.z = 5;
        //je recule de 5 unités car ça pointe sur moi

        //Controls
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.keys = [65,83,68];

    }

    makeGround(size,height) {

        this.ground = new Ground(size, height);

        this.ground.position.x = -size*0.5;
        this.ground.position.z = -size*0.5;

        this.scene.add(this.ground);
        
    }


    createLights(){
        //Light
        this.light = new THREE.DirectionalLight(0xdfebff, 1);
        this.light.position.set(15,50,15);
        this.light.castShadow = true;
        // la lumière renvoit de l'ombre
        this.scene.add(this.light);

        
        let hemisphere = new THREE.HemisphereLight(
            0xddeeff //sky color
            ,0x3e2a0a //ground color
            ,0.75); //intensité

            this.scene.add(hemisphere);


        //Stats
        this.stats = new Stats();
        document.querySelector('#stats').appendChild(this.stats.dom)
    }
    
    createHelper() {
        //AxeHelper
        let axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);


        //light helper
        let lightHelper = new THREE.DirectionalLightHelper(this.light, 5);
        this.scene.add(lightHelper);
    }


   
    animate() {

        
        this.renderer.render(this.scene, this.camera);  

        this.controls.update();

        requestAnimationFrame(this.animate.bind(this));

        this.stats.update();

       
    }






        

        
    


}