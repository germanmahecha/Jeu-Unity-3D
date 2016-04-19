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

public var monCurseur:Texture2D;
public var damage = 4;
public var maxHitPoint:int = 100;
public var particle: GameObject;
private var peuTirer: boolean = true;
public var cadenceTir: float = 0.2;
public var forceArme:float = 4;

function Update () {
	if(Input.GetButton("Fire1"))
	{
		if(peuTirer==true)
		{
			Feu();
			peuTirer=false;
		}
	}
}

function Feu(){
	
	var direction: Vector3= transform.TransformDirection(Vector3.forward);
	
	var ObjetToucher : RaycastHit;
	
	if(Physics.Raycast(transform.position, direction, ObjetToucher, 100)){
		Debug.Log("touche");
		Debug.DrawLine(transform.position, ObjetToucher.point);
		var rotTemp:Quaternion = Quaternion.FromToRotation(Vector3.up, ObjetToucher.normal);
		Debug.Log(ObjetToucher.collider);
		Instantiate(particle, ObjetToucher.point, rotTemp);
		
		if(ObjetToucher.rigidbody.AddForce){
			ObjetToucher.rigidbody.AddForce(1000*direction);
		}
		ObjetToucher.collider.SendMessageUpwards("Impact", forceArme, SendMessageOptions.DontRequireReceiver);
	}
	yield WaitForSeconds(cadenceTir);
	peuTirer = true;
}