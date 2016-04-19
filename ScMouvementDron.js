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
public var vitesse:float = 6.0;
private var marche:float = 1.0;
private var dirMouvement : Vector3 = Vector3.zero;
public var vitesseRot:float = 6.0;

function Update()
{
	var inputX = 1;	
	var inputY = 1;
	
	dirMouvement = Vector3(0, 0, inputY);
	animateur.SetFloat('vitesseDeplacement', inputY);	
	dirMouvement = transform.TransformDirection(dirMouvement);
	dirMouvement *= vitesse * marche;
	    
    controller.Move(dirMouvement * Time.deltaTime);
	
}
