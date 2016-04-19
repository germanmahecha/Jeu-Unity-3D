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
public var particle: GameObject;
public var pointsAlien:float = 40.0;
var Kyle : Transform;
var amortissement = 2;
var vitesseSuivi = 3;
var anim: Animation;
var rotate; 


function Start() {
	anim = GetComponent.<Animation>();
}
 
function Update(){
 
 	if(Kyle!=null){
 		if(Vector3.Distance(Kyle.position,transform.position) >= 25){
			   anim.Play("Idle_01");  
		  }else if(Vector3.Distance(Kyle.position,transform.position) > 5){
			   anim.Play("Walk");
			   rotate = Quaternion.LookRotation(Kyle.position - transform.position);
			   transform.rotation = Quaternion.Slerp(transform.rotation, rotate,amortissement * Time.deltaTime);
			   transform.Translate(0,0, vitesseSuivi * Time.deltaTime);
		  }else if(Vector3.Distance(Kyle.position,transform.position) < 5){
			   anim.Play("Attack_02");
			   rotate = Quaternion.LookRotation(Kyle.position - transform.position);
			   transform.rotation = Quaternion.Slerp(transform.rotation, rotate,amortissement * Time.deltaTime);
			   transform.Translate(0,0, vitesseSuivi * Time.deltaTime);
		  }
 	}	
 	
}
function Impact(damage:float)
{
		pointsAlien-=damage;
		if(pointsAlien <=0)
		{
			Instantiate(particle,transform.position,transform.rotation);
			Destroy(gameObject);
		}		
}
 