<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cond_pago extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		
		$this->load->database();
	}

	public function calculodias(){

		$resp = array();
		$idpago = $this->input->post('idpago');

		$query = $this->db->query('SELECT * FROM cond_pago WHERE id like "'.$idpago.'"
			');

		$data = array();
		foreach ($query->result() as $row)
		{
			$dias = $row->dias;
		}

		
		
	    $resp['success'] = true;
        $resp['dias'] = $dias;
        
        echo json_encode($resp);   
	
	}

	public function save(){
		
		$resp = array();
		$data = json_decode($this->input->post('data'));
		$id = $data->nombre;
		$data = array(
	        'nombre' => strtoupper($data->nombre),
	      	'codigo' => $data->codigo,
	      	'dias' => $data->dias
	            
		);

		$this->db->insert('cond_pago', $data); 

        $resp['success'] = true;

        $this->Bitacora->logger("I", 'cond_pago', $id);

        echo json_encode($resp);

	}

	public function update(){
		$resp = array();

		$data = json_decode($this->input->post('data'));
		$id = $data->id;
		$data = array(
	        'nombre' => strtoupper($data->nombre),
	      	'codigo' => $data->codigo,
	      	'dias' => $data->dias
	    );
		$this->db->where('id', $id);
		
		$this->db->update('cond_pago', $data); 

        $resp['success'] = true;

        $this->Bitacora->logger("M", 'cond_pago', $id);


        echo json_encode($resp);

	}

	public function getAll(){
		$resp = array();

        $start = $this->input->post('start');
        $limit = $this->input->post('limit');


        //filtro por nombre
        $nombre = $this->input->get('nombre');

		$countAll = $this->db->count_all_results("cond_pago");

		if($nombre){
			$query = $this->db->query('SELECT * FROM cond_pago WHERE nombre like "%'.$nombre.'%"
			limit '.$start.', '.$limit.'');
		}else{
			
			$query = $this->db->query('SELECT * FROM cond_pago limit '.$start.', '.$limit.'');
			
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
