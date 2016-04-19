#pragma strict
public var particle: GameObject;
public var pointsTV:float = 10.0;
function Impact(damage:float){
		pointsTV-=damage;
		if(pointsTV <=0)
		{
			Instantiate(particle,transform.position,transform.rotation);
			Destroy(gameObject);
		}
		
		
}