using UnityEngine;
using System.Collections;

public class OpenDoor : MonoBehaviour {
    
	Animation anim;
	public bool flag = false;

	// Use this for initialization
	void Start () {
		anim = GetComponent<Animation>();
	}

	// Update is called once per frame
	void Update () {

	}

	void OnCollisionEnter (Collision other){

		flag = true;
		Debug.Log("atatta");
		//anim.Play("Front_Door_a");
		GetComponent<Animation>()["Open_Anim"].speed = 1.0f;
		anim.Play("Open_Anim");
		Invoke("WaitAndGo", 2.0f);
	}
	
	void WaitAndGo() { 
		GetComponent<Animation>()["Open_Anim"].speed = -1.0f; // 再生速度
		GetComponent<Animation>()["Open_Anim"].time = GetComponent<Animation>()["Open_Anim"].length;
		anim.Play("Open_Anim");
		Debug.Log("wei");
		flag = false;
	}

}
