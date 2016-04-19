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
public var pointsAraignee:float = 30.0;
var Kyle : Transform;
var amortissement = 2;
var vitesseSuivi = 3;
var anim: Animation;
var rotate; 
public var sonExplosion:AudioClip;


function Start() {
	anim = GetComponent.<Animation>();
	
}
 
function Update(){
 
 	if(Kyle!=null){
 		if(Vector3.Distance(Kyle.position,transform.position) >= 25){
			   anim.Play("Idle");  
		  }else if(Vector3.Distance(Kyle.position,transform.position) > 10){
			   anim.Play("Walk");
			   rotate = Quaternion.LookRotation(Kyle.position - transform.position);
			   transform.rotation = Quaternion.Slerp(transform.rotation, rotate,amortissement * Time.deltaTime);
			   transform.Translate(0,0, vitesseSuivi * Time.deltaTime);
		  }else if(Vector3.Distance(Kyle.position,transform.position) < 10){
			   anim.Play("Attack");
			   rotate = Quaternion.LookRotation(Kyle.position - transform.position);
			   transform.rotation = Quaternion.Slerp(transform.rotation, rotate,amortissement * Time.deltaTime);
			   transform.Translate(0,0, vitesseSuivi * Time.deltaTime);
		  }
 	}	
}
function Impact(damage:float)
{
		pointsAraignee-=damage;
		if(pointsAraignee <=0)
		{
			GetComponent.<AudioSource>().clip = sonExplosion;
			GetComponent.<AudioSource>().Play();
			Instantiate(particle,transform.position,transform.rotation);
			Destroy(gameObject);
		}		
}
 