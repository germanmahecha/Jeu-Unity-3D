#pragma strict
public var particle: GameObject;
public var pointsOeuf:float = 5.0;
function Impact(damage:float){
		pointsOeuf-=damage;
		if(pointsOeuf <=0)
		{
			
			Instantiate(particle,transform.position,transform.rotation);
			Destroy(gameObject);
		}
		
		
}