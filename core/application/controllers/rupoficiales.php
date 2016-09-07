<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Rupoficiales extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		
		$this->load->database();
	}

	public function validaRup(){

		
		$resp = array();
		$rup = $this->input->get('valida');
		$rup2 = substr($rup, 0, 3);

		if ($rup == "09.1.01.1503"){
			
			$rup2 = "07.";
		};

		if ($rup == "10.3.01.0006"){
			
			$rup2 = "07.";
		};

		if ($rup == "10.3.01.0453"){
			
			$rup2 = "07.";
		};

		if ($rup == "10.3.01.0912"){
			
			$rup2 = "07.";
		};

		if ($rup == "10.5.01.1031"){
			
			$rup2 = "07.";
		};

		if ($rup2 == 10. or $rup2== 09. or $rup == 11. or $rup == 12.){

	   		$resp['escepcion'] = true;
	   		echo json_encode($resp);
	   		return false;

	   	}else{

	   		$resp['escepcion'] = false;


       		
		$query = $this->db->query('SELECT * FROM rup_oficiales WHERE rup like "%'.$rup.'%"');

		if($query->num_rows()>0){
			
	   			$row = $query->first_row();
	   			
	   			
	   			$resp['cliente'] = $row;
	   

	        $resp['success'] = true;
	        
	        echo json_encode($resp);

	   }else{
	   	    $resp['success'] = false;
	   	    echo json_encode($resp);
	        return false;
	   }
	}

	
	 }

	public function validaRupguias(){

		
		$resp = array();
		$guia = $this->input->get('valida');

		$query = $this->db->query('SELECT * FROM ingreso_guia WHERE num_guia='.$guia.'');
		$items = $query->result();

		$data = array();
        $cantidadnov = 0;
        $cantidadvac = 0;
        $cantidadvaq = 0;
        $cantidadbue = 0;
        $cantidadter = 0;
        $cantidadtor = 0;
        $cantidadcab = 0;
        $cantidadpor = 0;
        $cantidadcap = 0;
        $cantidadovi = 0;

        
		if($query->num_rows()>0){
			
		    foreach($items as $v){
		      $animal = $v->animal;
		      $cantid = $v->cantidad;
		      if ($animal==10001) {
		          $cantidadnov=$cantidadnov+$cantid;
		      };

		      if ($animal==10002) {
		          $cantidadnov=$cantidadnov+$cantid;
		      };
		      if ($animal==10010) {
		          $cantidadnov=$cantidadnov+$cantid;
		      };
		      if ($animal==10029) {
		          $cantidadnov=$cantidadnov+$cantid;
		      };
		      if ($animal==10003) {
		          $cantidadvac=$cantidadvac+$cantid;
		      };
		      if ($animal==10012) {
		          $cantidadvac=$cantidadvac+$cantid;
		      };
		      if ($animal==10015) {
		          $cantidadvac=$cantidadvac+$cantid;
		      };
		      
		      if ($animal==10019) {
		         $cantidadnov=$cantidadnov+$cantid;
		      };
		      if ($animal==10017) {
		          $cantidadnov=$cantidadnov+$cantid;
		      };
		      if ($animal==10004) {
		          $cantidadvac=$cantidadvac+$cantid;
		      };
		      if ($animal==10021) {
		          $cantidadvac=$cantidadvac+$cantid;
		      };
		       if ($animal==10027) {
		          $cantidadvac=$cantidadvac+$cantid;
		      };
		       if ($animal==10028) {
		          $cantidadvac=$cantidadvac+$cantid;
		      };
		       if ($animal==10005) {
		          $cantidadvaq=$cantidadvaq+$cantid;
		      };
		       if ($animal==10022) {
		          $cantidadvaq=$cantidadvaq+$cantid;
		      };
		      if ($animal==10116) {
		          $cantidadvaq=$cantidadvaq+$cantid;
		      };
		       if ($animal==10030) {
		          $cantidadvaq=$cantidadvaq+$cantid;
		      };
		      if ($animal==10031) {
		          $cantidadvaq=$cantidadvaq+$cantid;
		      };
		       if ($animal==10016) {
		          $cantidadvaq=$cantidadvaq+$cantid;
		      };
		       if ($animal==10014) {
		          $cantidadbue=$cantidadbue+$cantid;
		      }; 
		      if ($animal==10006) {
		          $cantidadbue=$cantidadbue+$cantid;
		      }; 
		       if ($animal==11004) {
		          $cantidadvac=$cantidadvac+$cantid;
		          $cantidadter=$cantidadter+$cantid;
		       };
		       if ($animal==11005) {
		          $cantidadvac=$cantidadvac+$cantid;
		          $cantidadter=$cantidadter+$cantid;
		       };
		        if ($animal==12004) {
		          $cantidadvac=$cantidadvac+$cantid;
		          $cantidadter=$cantidadter+($cantid*2);
		       };
		       if ($animal==13004) {
		          $cantidadvac=$cantidadvac+$cantid;
		          $cantidadter=$cantidadter+($cantid*3);
		       };
		        if ($animal==10007) {
		          $cantidadter=$cantidadter+$cantid;
		      };
		      if ($animal==10013) {
		          $cantidadter=$cantidadter+$cantid;
		      };
		       if ($animal==10025) {
		          $cantidadter=$cantidadter+$cantid;
		      };
		      if ($animal==10026) {
		          $cantidadter=$cantidadter+$cantid;
		      };
		      if ($animal==10009) {
		          $cantidadter=$cantidadter+$cantid;
		      };
		       if ($animal==10024) {
		          $cantidadter=$cantidadter+$cantid;
		      };
		       if ($animal==10008) {
		          $cantidadtor=$cantidadtor+$cantid;
		      }; 
		      if ($animal==10018) {
		          $cantidadtor=$cantidadtor+$cantid;
		      };
		      if ($animal==10020) {
		          $cantidadtor=$cantidadtor+$cantid;
		      };
		       if ($animal==10023) {
		          $cantidadtor=$cantidadtor+$cantid;
		      };
		      if ($animal==10032) {
		          $cantidadtor=$cantidadtor+$cantid;
		      };
		       if ($animal==10033) {
		          $cantidadtor=$cantidadtor+$cantid;
		      };
		      if ($animal==10011) {
		          $cantidadtor=$cantidadtor+$cantid;
		      };
		      if (substr($animal, -5, 2)==40){
		        $cantidadcab=$cantidadcab+$cantid;
		      };
		      if ($animal==41045) {
		          $cantidadcab=$cantidadcab+($cantid*2);
		      };
		      if ($animal==42045) {
		          $cantidadcab=$cantidadcab+($cantid*3);
		      };
		      if (substr($animal, -5, 2)==30){
		        $cantidadpor=$cantidadpor+$cantid;
		      };
		      if ($animal==31035) {
		          $cantidadpor=$cantidadpor+($cantid*2);
		      };
		      if ($animal==32035) {
		          $cantidadpor=$cantidadpor+($cantid*3);
		      };
		      if ($animal==33035) {
		          $cantidadpor=$cantidadpor+($cantid*4);
		      };
		       if ($animal==34035) {
		          $cantidadpor=$cantidadpor+($cantid*5);
		      };
		       if ($animal==35035) {
		          $cantidadpor=$cantidadpor+($cantid*6);
		      };
		       if ($animal==36035) {
		          $cantidadpor=$cantidadpor+($cantid*7);
		      };
		       if ($animal==37035) {
		          $cantidadpor=$cantidadpor+($cantid*8);
		      };
		       if ($animal==38035) {
		          $cantidadpor=$cantidadpor+($cantid*9);
		      };
		       if ($animal==39035) {
		          $cantidadpor=$cantidadpor+($cantid*10);
		      };
		      
		      if (substr($animal, -5, 2)==50){
		        $cantidadcap=$cantidadcap+$cantid;
		      };
		       if ($animal==51064) {
		          $cantidadcap=$cantidadcap+($cantid*2);
		      };
		       if ($animal==52064) {
		          $cantidadcap=$cantidadcap+($cantid*3);
		      };
		       if ($animal==53064) {
		          $cantidadcap=$cantidadcap+($cantid*4);
		      };
		      if (substr($animal, -5, 2)==20){
		        $cantidadovi=$cantidadovi+$cantid;
		      };
		       if ($animal==21025) {
		          $cantidadovi=$cantidadovi+($cantid*2);
		      };
		      if ($animal==22025) {
		          $cantidadcap=$cantidadcap+($cantid*3);
		      };
		      if ($animal==23025) {
		          $cantidadcap=$cantidadcap+($cantid*4);
		      };
		      if ($animal==24025) {
		          $cantidadcap=$cantidadcap+($cantid*5);
		      };


		    
		    

		    $data = array(
			'cantidadnov' => $cantidadnov,
			'cantidadvac' => $cantidadvac,
			'cantidadvaq' => $cantidadvaq,
			'cantidadbue' => $cantidadbue,
			'cantidadter' => $cantidadter,
			'cantidadtor' => $cantidadtor,
			'cantidadcab' => $cantidadcab,
			'cantidadpor' => $cantidadpor,
			'cantidadcap' => $cantidadcap,
			'cantidadovi' => $cantidadovi,
			);
		}



	   			$row = $query->first_row();
	   			$resp['guias'] = $row;
	   			$resp['cantidad'] = $data;
	   			$resp['success'] = true;
	        echo json_encode($resp);

	   }else{
	   	    $resp['success'] = false;
	   	    echo json_encode($resp);
	        return false;
	    }
	}
       		
		
	public function validaFma(){

		
		$resp = array();
		$fma = $this->input->get('valida');
       		
		$query = $this->db->query('SELECT * FROM ingresofma WHERE num_fma like "'.$fma.'"');

		if($query->num_rows()>0){
	   		$resp['success'] = true;
	        echo json_encode($resp);

	   }else{
	   	    $resp['success'] = false;
	   	    echo json_encode($resp);
	        return false;
	   }

	
	 }


	public function save(){
		$resp = array();

		$data = json_decode($this->input->post('data'));

		$data = array(
			'region' => $data->region,
			'comuna' => strtoupper($data->comuna),
	       	'ciudad' => strtoupper($data->ciudad),
	        'rup' => $data->rup,
	        'nombre_productor' => strtoupper($data->nombre_productor),
			'direccion_predio' => strtoupper($data->direccion_predio),
			'nom_titular' => strtoupper($data->nom_titular),			
	        'rut_titular' => $data->rut_titular,
           
		);

        $resp['success'] = true;
        $this->db->insert('rup_oficiales', $data); 
        echo json_encode($resp);

	}

	public function saverup(){
		
		$resp = array();

		$region = $this->input->post('region');
		$comuna = $this->input->post('comuna');
		$ciudad = $this->input->post('ciudad');
		$rup = $this->input->post('rup');
		$nombre_productor = $this->input->post('nombre_productor');
		$direccion_predio = $this->input->post('direccion_predio');
		$nom_titular = $this->input->post('nom_titular');
		$rut_titular = $this->input->post('rut_titular');

		$data = array(
			'region' => $region,
			'comuna' => strtoupper($comuna),
	       	'ciudad' => strtoupper($ciudad),
	        'rup' => $rup,
	        'nombre_productor' => strtoupper($nombre_productor),
			'direccion_predio' => strtoupper($direccion_predio),
			'nom_titular' => strtoupper($nom_titular),			
	        'rut_titular' => $rut_titular,
           
		);

        $resp['success'] = true;
        $this->db->insert('rup_oficiales', $data); 
        echo json_encode($resp);

	}
	
	public function update(){
		$resp = array();

		$data = json_decode($this->input->post('data'));
		$id = $data->id;
		$data = array(
			'region' => $data->region,
			'comuna' => strtoupper($data->comuna),
	       	'ciudad' => strtoupper($data->ciudad),
	        'rup' => $data->rup,
	        'nombre_productor' => strtoupper($data->nombre_productor),
			'direccion_predio' => strtoupper($data->direccion_predio),
			'nom_titular' => strtoupper($data->nom_titular),			
	        'rut_titular' => $data->rut_titular,
	    );
		$this->db->where('id', $id);
		
		$this->db->update('clientes', $data); 

        $resp['success'] = true;

        echo json_encode($resp);

	}

	public function getAll(){
		$resp = array();

        $start = $this->input->get('start');
        $limit = $this->input->get('limit');
        $nombre = $this->input->get('nombre');
		$tipo = $this->input->get('fTipo');

		$countAll = $this->db->count_all_results("rup_oficiales");

		if($nombre){
			$query = $this->db->query('SELECT * FROM rup_oficiales WHERE  rup like "%'.$nombre.'%"');

			$total = 0;

		  foreach ($query->result() as $row)
			{
				$total = $total +1;
			
			}

			$countAll = $total;

		}else if($tipo) {
			$query = $this->db->query('SELECT * FROM rup_oficiales WHERE nombre_productor like "%'.$tipo.'%"');

			$total = 0;

		  foreach ($query->result() as $row)
			{
				$total = $total +1;
			
			}

			$countAll = $total;
				
		} 
		else
		{
			$query = $this->db->query('SELECT * FROM rup_oficiales limit '.$start.', '.$limit.'');

		}

		$data = array();
		foreach ($query->result() as $row)
		{
			$data[] = $row;
		}
        $resp['success'] = true;
        $resp['total'] = $countAll;
        $resp['data'] = $data;

        echo json_encode($resp);
	}
}
