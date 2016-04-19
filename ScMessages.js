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
import UnityEngine.UI;

public var messagePorte1:GameObject;
public var messagePorte2:GameObject;
public var messagePorte3:GameObject;
public var messagePorte4:GameObject;
public var MessageOuvrirPorte1:GameObject;

function Start () {
	messagePorte1.SetActive(false);
	messagePorte2.SetActive(false);
	messagePorte3.SetActive(false);
	messagePorte4.SetActive(false);
	MessageOuvrirPorte1.SetActive(false);
}

function OnTriggerEnter(other: Collider){
 	if(other.gameObject.name == 'triggerPorte1')
 	{
 		messagePorte1.SetActive(true);
 	}	
 	if(other.gameObject.name == 'triggerPorte2')
 	{
 		messagePorte2.SetActive(true);
 	}
 	if(other.gameObject.name == 'triggerPorte3')
 	{
 		messagePorte3.SetActive(true);
 	}
 	if(other.gameObject.name == 'triggerPorte4')
 	{
 		messagePorte4.SetActive(true);
 	}
 	if(other.gameObject.name == 'triggerOuvrirPorte1')
 	{
 		MessageOuvrirPorte1.SetActive(true);
 	}
 	
}

function OnTriggerExit(other: Collider){
 	if(other.gameObject.name == 'triggerPorte1')
 	{
 		messagePorte1.SetActive(false);
 	}	
 	if(other.gameObject.name == 'triggerPorte2')
 	{
 		messagePorte2.SetActive(false);
 	}
 	if(other.gameObject.name == 'triggerPorte3')
 	{
 		messagePorte3.SetActive(false);
 	}
 	if(other.gameObject.name == 'triggerPorte4')
 	{
 		messagePorte4.SetActive(false);
 	}
 	if(other.gameObject.name == 'triggerOuvrirPorte1')
 	{
 		MessageOuvrirPorte1.SetActive(false);
 	}
 	
}

