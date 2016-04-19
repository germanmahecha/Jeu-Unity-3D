#pragma strict
public var sonNiveau:AudioClip;

function OnTriggerEnter(other: Collider) {
	GetComponent.<AudioSource>().clip = sonNiveau;
	GetComponent.<AudioSource>().Play();
}
function OnTriggerExit(other: Collider)  {
	GetComponent.<AudioSource>().Stop();
}

