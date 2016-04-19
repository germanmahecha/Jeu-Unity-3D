#pragma strict
public var particle: GameObject;
public var pointsMur:float = 10.0;
public var sonExplosion:AudioClip;
function Start(){
	
}
function Impact(damage:float){
		pointsMur-=damage;
		if(pointsMur <=0)
		{
			GetComponent.<AudioSource>().clip = sonExplosion;
			GetComponent.<AudioSource>().Play();
			Instantiate(particle,transform.position,transform.rotation);
			Destroy(gameObject);
		}
		
}