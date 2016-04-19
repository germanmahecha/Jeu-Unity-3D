/*---------------------------------------------
TIM Techniques d'Intégration Multimédia 2015
German Mahecha 
Groupe 1797
Professeur: Jonathan Martel
Ensemble Jeu - 2015
Partie du code vue en classe
http://unity3d.com/
-----------------------------------------------*/
#pragma strict
@script RequireComponent(CharacterController)
@script RequireComponent(Animator)

public var controller:CharacterController;
public var animateur:Animator;
public var vitesse:float = 3.0;
private var course:float = 2;
private var marche:float = 1.0;
private var dirMouvement : Vector3 = Vector3.zero;
public var vitesseRot:float = 3.0;
private var gravite:float = 10;
private var cameraPremierePersonne:GameObject;
private var cameraTroisiemePersonne:GameObject;
private var Camera3PFace:GameObject;
private var numCamera:int = 1;
private var MAX_CAMERA:int = 3;
private var auSol:boolean = true;
private var forceProjectile:float = 10.0;
public var projectile:GameObject;
public var sonMarche:AudioClip;

function Start () 
{
	Camera3PFace = GameObject.Find('Camera3PFace');
	cameraPremierePersonne = GameObject.Find('CameraPP');
	cameraTroisiemePersonne = GameObject.Find('Camera3P');
	cameraPremierePersonne.transform.parent = this.transform;
	cameraTroisiemePersonne.transform.parent = this.transform;
	Camera3PFace.transform.parent = this.transform;
}

function Update()
{
	var inputX = Input.GetAxis('Horizontal');	
	var inputY = Input.GetAxis('Vertical');
	var toucheCourse:boolean = Input.GetKey('left shift');
	animateur.SetFloat('vitesseDeplacement', inputY);
	transform.Rotate(0, inputX * vitesseRot, 0);
	animateur.SetFloat('vitesseRotation', inputX);	
	
	if(controller.isGrounded)
   	{ 
		dirMouvement = Vector3(0, 0, inputY);
		dirMouvement = transform.TransformDirection(dirMouvement);
		if(toucheCourse)
	    {
	    	dirMouvement *= vitesse * course;
	    	animateur.SetFloat('vitesseDeplacement', inputY * course);	
	    }
		else
		{
	    	dirMouvement *= vitesse * marche;
	    }
	}
	dirMouvement.y -= gravite*Time.deltaTime;
    controller.Move(dirMouvement * Time.deltaTime);
	choixCamera();
	if(Input.GetKeyDown(KeyCode.Tab))
	{
		this.numCamera++;
		if(this.numCamera >this.MAX_CAMERA)
		{
			this.numCamera = 1;
		}
	}
	if (Input.GetKeyDown (KeyCode.W) || Input.GetKeyDown (KeyCode.S))
	{
	    GetComponent.<AudioSource>().clip = sonMarche;
	    GetComponent.<AudioSource>().Play();
	}
	
	if (toucheCourse)
	{
		GetComponent.<AudioSource>().pitch=0.5;
	}
	else
	{
		GetComponent.<AudioSource>().pitch=0.4;
	} 
	
	if (Input.GetKeyUp (KeyCode.W) || Input.GetKeyUp (KeyCode.S) )
	{
	    GetComponent.<AudioSource>().Stop(); 
	}	
}


function choixCamera()
{
	if(Input.GetKeyDown(KeyCode.Alpha1) || this.numCamera == 1)
	{
		cameraPremierePersonne.SetActive(true);
		cameraTroisiemePersonne.SetActive(false);
		Camera3PFace.SetActive(false);
		this.numCamera = 1;
	}
	if(Input.GetKeyDown(KeyCode.Alpha2) || this.numCamera == 2)
	{
		cameraPremierePersonne.SetActive(false);
		cameraTroisiemePersonne.SetActive(true);
		Camera3PFace.SetActive(false);
		this.numCamera = 2;
	}
	if(Input.GetKeyDown(KeyCode.Alpha3) || this.numCamera == 3)
	{
		cameraPremierePersonne.SetActive(false);
		cameraTroisiemePersonne.SetActive(false);
		Camera3PFace.SetActive(true);
		this.numCamera = 3;
	}
}


