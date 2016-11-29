<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Notacredito extends CI_Controller {



	public function __construct()
	{
		parent::__construct();
		$this->load->helper('format');
		$this->load->database();
	}

	public function save2(){
		
		$numfactura_asoc = $this->input->post('numfactura_asoc'); //ID OBTENIDO PARA REBAJAR EN CUENTA CORRIENTE

		$idcliente = $this->input->post('idcliente');
		$numfactura = $this->input->post('docurelacionado');
		$numdocuemnto = $this->input->post('numdocumento');
		$idfactura = $this->input->post('idfactura');
		$fechafactura = $this->input->post('fechafactura');
		$fechavenc = $this->input->post('fechavenc');
		$vendedor = $this->input->post('vendedor');
		$datacliente = json_decode($this->input->post('datacliente'));
		$items = json_decode($this->input->post('items'));
		$neto = $this->input->post('netofactura');
		$fiva = $this->input->post('ivafactura');
		$idtipo = $this->input->post('idtipo');
        $relacionado = $this->input->post('docurelacionado');
		$fafecto = $this->input->post('afectofactura');
		$ftotal = $this->input->post('totalfacturas');
		$tipodocumento = $this->input->post('tipodocumento');
		$id_cond_venta = $this->input->post('idcondventa');
		$tiponc = $this->input->post('tiponc');

		$tiponc = $this->input->post('tiponc');
		$observacion = $this->input->post('observacion');
		//$tipodocumento = 11;

		if ($tiponc==3){
			$neto=0;
			$fiva=0;
			$ftotal=0;
			$fafecto=0;
		};


		//$tipodocumento = 11;




		$idpago = 11;
		$corr = 6;
		$idcondventa = 1;
		$detalle="N/C DIRECTA";
		$idCaja = 1;
		$idCajero = 1;
		$estado = "SI";

		$query = $this->db->query('SELECT * FROM cajas WHERE id like "'.$idCaja.'"');

		if($query->num_rows()>0){

			$row = $query->first_row();
			$corrcom = (($row->correlativo)+1); 
	   		$id = ($row->id);

	   		$data3 = array(
	         'correlativo' => $corrcom
		    );

		    $this->db->where('id', $id);	  
		    $this->db->update('cajas', $data3);

		}

		$query = $this->db->query('SELECT * FROM correlativos WHERE id like "'.$corr.'"');

		if($query->num_rows()>0){

			$row = $query->first_row();
			$corr = (($row->correlativo)+1); 
	   		$id = ($row->id);

	   		$data3 = array(
	         'correlativo' => $corr
		    );

		    $preventa = array(
	        'num_ticket' => $corr,
	        'fecha_venta' => $fechafactura,
	        'id_cliente' => $idcliente,
	        'id_vendedor' => $vendedor,
	        'neto' => $neto,
	        'id_tip_docu' => $tipodocumento,
	        'id_pago' => $idcondventa,
	        'total' => $ftotal,
	        'estado' => $estado,
	        'id_documento'=> $numdocuemnto
			);

			$this->db->insert('preventa', $preventa);
			$idpreventa = $this->db->insert_id();

		    $this->db->where('id', $id);		  
		    $this->db->update('correlativos', $data3);
		    $this->Bitacora->logger("M", 'correlativos', $id);
		}

		$recaudacion = array(
	        'num_comp' => $corrcom,
	        'fecha' => date('Y-m-d'),
	        'id_cliente' => $idcliente,
			'num_doc' => $numdocuemnto,
			'id_caja' => $idCaja,
			'id_ticket' => $idpreventa,
		    'id_cajero' => $idCajero
		);

		$this->db->insert('recaudacion', $recaudacion); 
		$recauda = $this->db->insert_id();


		$recaudacion_detalle = array(				
	        'id_recaudacion' => $recauda,
	        'id_forma' => $idpago,
	        'detalle' => $detalle,
	        'valor_pago' => $ftotal,
	        'valor_cancelado' => $ftotal,
	        'fecha_transac' => $fechafactura,
	        'fecha_comp' => date('Y-m-d')
		);
		
		$this->db->insert('recaudacion_detalle', $recaudacion_detalle);    
		
		$recaudacion_general = array(				
	        'id_recaudacion' => $recauda,
	        'id_forma' => $idpago,
	        'credito' => $ftotal,
	        'id_caja' => $idCaja,
	        'id_cajero' => $idCajero,
	        'num_documento' => $numdocuemnto,
	        'fecha' => $fechafactura,
	        
		);
		
		//$this->db->insert('recaudacion_general', $recaudacion_detalle);    	
		$this->db->insert('recaudacion_general', $recaudacion_general);    	
		

		$data3 = array(
	         'correlativo' => $numdocuemnto
	    );
	    $this->db->where('id', $tipodocumento);
	  
	    $this->db->update('correlativos', $data3);
			
		if ($tiponc==3){
			$neto=0;
			$fiva=0;
			$ftotal=0;
			$fafecto=0;
		};

		$factura_cliente = array(
			'tipo_documento' => $tipodocumento,
	        'id_cliente' => $idcliente,
	        'num_factura' => $numdocuemnto,
	        'id_vendedor' => $vendedor,
	        'id_cond_venta' => $id_cond_venta,
	        'sub_total' => $neto,
	        //'id_cond_venta' => $idtipo,
	        'neto' => $neto,
	        'iva' => $fiva,
	        'totalfactura' => $ftotal,
	        'fecha_factura' => $fechafactura,
	        'id_factura' => $numfactura_asoc,
	        'fecha_venc' => $fechavenc,
	        'observacion' => $observacion,
	        'forma' => 1,
	          
		);

		$this->db->insert('factura_clientes', $factura_cliente); 
		$idfactura = $this->db->insert_id();

		foreach($items as $v){
			if ($tiponc==3){
				$v->neto=0;
				$v->iva=0;
				$v->total=0;
			};

			$factura_clientes_item = array(
		        'id_factura' => $idfactura,
		        'glosa' => $v->glosa,
		        'neto' => $v->neto,
		        'iva' => $v->iva,
		        'total' => $v->total
			);

		$this->db->insert('detalle_factura_glosa', $factura_clientes_item);
    	
		}			  
	    
		/******* CUENTAS CORRIENTES ****/

		 $query = $this->db->query("SELECT cc.id as idcuentacontable FROM cuenta_contable cc WHERE cc.nombre = 'FACTURAS POR COBRAR'");
		 $row = $query->result();
		 $row = $row[0];
		 $idcuentacontable = $row->idcuentacontable;	


			// VERIFICAR SI CLIENTE YA TIENE CUENTA CORRIENTE
		 $query = $this->db->query("SELECT co.idcliente, co.id as idcuentacorriente  FROM cuenta_corriente co
		 							WHERE co.idcuentacontable = '$idcuentacontable' and co.idcliente = '" . $idcliente . "' limit 1");
    	 $row = $query->row();
		 



		if($query->num_rows() > 0){ //sólo se realiza el aumento de cuenta corriente, en caso que exista la cuenta corriente

			$idcuentacorriente =  $row->idcuentacorriente;	
			// se rebaja detalle
			$query = $this->db->query("UPDATE detalle_cuenta_corriente SET saldo = saldo - " . $ftotal . " where idctacte = " .  $row->idcuentacorriente . " and numdocumento = " . $numfactura_asoc);			
			//$idcuentacorriente =  $row->idcuentacorriente;
			 $query_factura = $this->db->query("SELECT tipo_documento  FROM factura_clientes 
			 							WHERE num_factura = " . $numfactura_asoc . " and id_cliente = " . $idcliente . " limit 1");
			 $tipodocumento_asoc = $query_factura->row()->tipo_documento;


            $query = $this->db->query("UPDATE cuenta_corriente SET saldo = saldo - " . $ftotal . " where id = " .  $row->idcuentacorriente );
            $idcuentacorriente =  $row->idcuentacorriente;			 

	
			/*$detalle_cuenta_corriente = array(
		        'idctacte' => $idcuentacorriente,
		        'tipodocumento' => $tipodocumento,
		        'numdocumento' => $numdocuemnto,
		        'saldoinicial' => $ftotal,
		        'saldo' => $ftotal,
		        'fechavencimiento' => $fechavenc,
		        'fecha' => date('Y-m-d H:i:s')
			);

			$this->db->insert('detalle_cuenta_corriente', $detalle_cuenta_corriente); 	*/

			$cartola_cuenta_corriente = array(
		        'idctacte' => $idcuentacorriente,
		        'idcuenta' => $idcuentacontable,
		        'tipodocumento' => $tipodocumento,
		        'numdocumento' => $numdocuemnto,
		        'tipodocumento_asoc' => $tipodocumento_asoc,
		        'numdocumento_asoc' => $numfactura_asoc,
		        'glosa' => 'Registro de Nota de Credito en Cuenta Corriente',
		        'fecvencimiento' => $fechavenc,
		        'valor' => $ftotal,
		        'origen' => 'VENTA',
		        'fecha' => date('Y-m-d H:i:s')
			);

			$this->db->insert('cartola_cuenta_corriente', $cartola_cuenta_corriente); 
		}			

   /*****************************************/

     if($tipodocumento == 102){  // SI ES NOTA DE CREDITO ELECTRONICA
            header('Content-type: text/plain; charset=ISO-8859-1');
            $this->load->model('facturaelectronica');
            $config = $this->facturaelectronica->genera_config();
            include $this->facturaelectronica->ruta_libredte();

            $tipo_nota_credito = 2;
            $glosa = 'Correccion factura '. $numfactura_asoc;

            $empresa = $this->facturaelectronica->get_empresa();
            $datos_empresa_factura = $this->facturaelectronica->get_empresa_factura($idfactura);

            //$detalle_factura = $this->facturaelectronica->get_detalle_factura($idfactura);
            $detalle_factura = $this->facturaelectronica->get_detalle_factura_glosa($idfactura);
            $datos_factura = $this->facturaelectronica->get_factura($idfactura);

            $lista_detalle = array();
            $i = 0;
            foreach ($detalle_factura as $detalle) {

				$lista_detalle[$i]['NmbItem'] = $detalle->glosa;
				//$glosa = $tiponc == 3 ? $glosa . " . " . $detalle->glosa : $glosa;
				if($tiponc!=3){
					$lista_detalle[$i]['QtyItem'] = 1;
	                $lista_detalle[$i]['PrcItem'] = floor($detalle->neto);
            	}				
				/*$lista_detalle[$i]['QtyItem'] = 1;
                $lista_detalle[$i]['PrcItem'] = floor($detalle->neto);*/
            
                $i++;
            }


            $TpoDocRef = $numfactura_asoc >= 100000 ? 30 : 33;

            // datos
            $nota_credito = [
                'Encabezado' => [
                    'IdDoc' => [
                        'TipoDTE' => 61,
                        'Folio' => $numdocuemnto,
                        'FchEmis' => substr($fechafactura,0,10)
                    ],
                    'Emisor' => [
                        'RUTEmisor' => $empresa->rut.'-'.$empresa->dv,
                        'RznSoc' => substr($empresa->razon_social,0,100), //LARGO DE RAZON SOCIAL NO PUEDE SER SUPERIOR A 100 CARACTERES
                        'GiroEmis' => substr($empresa->giro,0,80), //LARGO DE GIRO DEL EMISOR NO PUEDE SER SUPERIOR A 80 CARACTERES
                        'Acteco' => $empresa->cod_actividad,
                        'DirOrigen' => substr($empresa->dir_origen,0,70), //LARGO DE DIRECCION DE ORIGEN NO PUEDE SER SUPERIOR A 70 CARACTERES
                        'CmnaOrigen' => substr($empresa->comuna_origen,0,20), //LARGO DE COMUNA DE ORIGEN NO PUEDE SER SUPERIOR A 20 CARACTERES
                    ],
                    'Receptor' => [
                        'RUTRecep' => substr($datos_empresa_factura->rut_cliente,0,strlen($datos_empresa_factura->rut_cliente) - 1)."-".substr($datos_empresa_factura->rut_cliente,-1),
                        'RznSocRecep' => substr($datos_empresa_factura->nombre_cliente,0,100), //LARGO DE RAZON SOCIAL NO PUEDE SER SUPERIOR A 100 CARACTERES
                        'GiroRecep' => substr($datos_empresa_factura->giro,0,40), //LARGO DEL GIRO NO PUEDE SER SUPERIOR A 40 CARACTERES
                        'DirRecep' => substr($datos_empresa_factura->direccion,0,70), //LARGO DE DIRECCION NO PUEDE SER SUPERIOR A 70 CARACTERES
                        'CmnaRecep' => substr($datos_empresa_factura->nombre_comuna,0,20), //LARGO DE COMUNA NO PUEDE SER SUPERIOR A 20 CARACTERES
                    ],
					'Totales' => [
		                // estos valores serán calculados automáticamente
		                'MntNeto' => isset($datos_factura->neto) ? $datos_factura->neto : 0,
		                //'TasaIVA' => \sasco\LibreDTE\Sii::getIVA(),
		                'TasaIVA' => $tiponc == 3 ? 0 : \sasco\LibreDTE\Sii::getIVA(),
		                'IVA' => isset($datos_factura->iva) ? $datos_factura->iva : 0,
		                'MntTotal' => isset($datos_factura->totalfactura) ? $datos_factura->totalfactura : 0,
		            ],                
                ],
                'Detalle' => $lista_detalle,
                'Referencia' => [
                    'TpoDocRef' => $TpoDocRef,
                    'FolioRef' => $numfactura_asoc,
                    'CodRef' => $tipo_nota_credito,
                    'RazonRef' => $glosa,
                ]               
            ];          


		    // var_dump($nota_credito); exit;

            //FchResol y NroResol deben cambiar con los datos reales de producción
            $caratula = [
                //'RutEnvia' => '11222333-4', // se obtiene de la firma
                'RutReceptor' => '60803000-K',
                'FchResol' => $empresa->fec_resolucion,
                'NroResol' => $empresa->nro_resolucion
            ];


            $caratula_cliente = [
                //'RutEnvia' => '11222333-4', // se obtiene de la firma
                'RutReceptor' => substr($datos_empresa_factura->rut_cliente,0,strlen($datos_empresa_factura->rut_cliente) - 1)."-".substr($datos_empresa_factura->rut_cliente,-1),
                'FchResol' => $empresa->fec_resolucion,
                'NroResol' => $empresa->nro_resolucion
            ];            


            $Firma = new sasco\LibreDTE\FirmaElectronica($config['firma']); //lectura de certificado digital        
            $caf = $this->facturaelectronica->get_content_caf_folio($numdocuemnto,61);
            $Folios = new sasco\LibreDTE\Sii\Folios($caf->caf_content);

            $DTE = new \sasco\LibreDTE\Sii\Dte($nota_credito);

            $DTE->timbrar($Folios);
            $DTE->firmar($Firma);       

            // generar sobre con el envío del DTE y enviar al SII
            $EnvioDTE = new \sasco\LibreDTE\Sii\EnvioDte();

            $EnvioDTE->agregar($DTE);
            $EnvioDTE->setFirma($Firma);
            $EnvioDTE->setCaratula($caratula);
            $EnvioDTE->generar();
            if ($EnvioDTE->schemaValidate()) { // REVISAR PORQUÉ SE CAE CON ESTA VALIDACION
                
                $track_id = 0;
                $xml_dte = $EnvioDTE->generar();


			    #GENERACIÓN DTE CLIENTE
				$EnvioDTE_CLI = new \sasco\LibreDTE\Sii\EnvioDte();
				$EnvioDTE_CLI->agregar($DTE);
				$EnvioDTE_CLI->setFirma($Firma);
				$EnvioDTE_CLI->setCaratula($caratula_cliente);
				$xml_dte_cliente = $EnvioDTE_CLI->generar();                   

                $tipo_envio = $this->facturaelectronica->busca_parametro_fe('envio_sii'); //ver si está configurado para envío manual o automático


			    $dte = $this->facturaelectronica->crea_archivo_dte($xml_dte,$idfactura,61,'sii');
			    $dte_cliente = $this->facturaelectronica->crea_archivo_dte($xml_dte_cliente,$idfactura,61,'cliente');


                if($tipo_envio == 'automatico'){
                    $track_id = $EnvioDTE->enviar();
                }               


	            $this->db->where('f.folio', $numdocuemnto);
                $this->db->where('c.tipo_caf', 61);
				$this->db->update('folios_caf f inner join caf c on f.idcaf = c.id',array('dte' => $dte['xml_dte'],
																						  'dte_cliente' => $dte_cliente['xml_dte'],
																						  'estado' => 'O',
																						  'idfactura' => $idfactura,
																						  'path_dte' => $dte['path'],
																						  'archivo_dte' => $dte['nombre_dte'],
																						  'archivo_dte_cliente' => $dte_cliente['nombre_dte'],
																						  'trackid' => $track_id
																						  )); 




				if($track_id != 0 && $datos_empresa_factura->e_mail != ''){ //existe track id, se envía correo
						$this->facturaelectronica->envio_mail_dte($idfactura);
				}

            }                   
            
        }


        $resp['success'] = true;
		$resp['idfactura'] = $idfactura;

		$this->Bitacora->logger("I", 'factura_clientes', $idfactura);	
        

        echo json_encode($resp);
	}

	public function save(){
		
		$resp = array();


		$numfactura_asoc = $this->input->post('numfactura_asoc'); //ID OBTENIDO PARA REBAJAR EN CUENTA CORRIENTE

		$idcliente = $this->input->post('idcliente');
		$numfactura = $this->input->post('numfactura_asoc');
		$numdocuemnto = $this->input->post('numdocumento');
		$idfactura = $this->input->post('idfactura');
		$fechafactura = $this->input->post('fechafactura');
		$fechavenc = $this->input->post('fechavenc');
		$vendedor = $this->input->post('idvendedor');
		$datacliente = json_decode($this->input->post('datacliente'));
		$items = json_decode($this->input->post('items'));
		$neto = $this->input->post('netofactura');
		$fiva = $this->input->post('ivafactura');
		$fafecto = $this->input->post('afectofactura');
		$ftotal = $this->input->post('totalfacturas');
		$tipodocumento = $this->input->post('tipodocumento');
		$id_cond_venta = $this->input->post('idcondventa');
		$observacion = $this->input->post('observacion');
		$idpago = 11;
		$corr = 6;
		$idcondventa = 1;
		$detalle="N/C DIRECTA";
		$idCaja = 1;
		$idCajero = 1;
		$estado = "SI";

		$query = $this->db->query('SELECT * FROM cajas WHERE id like "'.$idCaja.'"');

		if($query->num_rows()>0){

			$row = $query->first_row();
			$corrcom = (($row->correlativo)+1); 
	   		$id = ($row->id);

	   		$data3 = array(
	         'correlativo' => $corrcom
		    );

		    $this->db->where('id', $id);	  
		    $this->db->update('cajas', $data3);

		}	

		$query = $this->db->query('SELECT * FROM correlativos WHERE id like "'.$corr.'"');

		if($query->num_rows()>0){

			$row = $query->first_row();
			$corr = (($row->correlativo)+1); 
	   		$id = ($row->id);

	   		$data3 = array(
	         'correlativo' => $corr
		    );

		    $preventa = array(
	        'num_ticket' => $corr,
	        'fecha_venta' => $fechafactura,
	        'id_cliente' => $idcliente,
	        'id_vendedor' => $vendedor,
	        'neto' => $neto,
	        'id_tip_docu' => $tipodocumento,
	        'id_pago' => $idcondventa,
	        'total' => $ftotal,
	        'estado' => $estado,
	        'id_documento'=> $numdocuemnto
			);

			$this->db->insert('preventa', $preventa);
			$idpreventa = $this->db->insert_id();

		    $this->db->where('id', $id);		  
		    $this->db->update('correlativos', $data3);
		    $this->Bitacora->logger("M", 'correlativos', $id);
		}

		$recaudacion = array(
	        'num_comp' => $corrcom,
	        'fecha' => date('Y-m-d'),
	        'id_cliente' => $idcliente,
			'num_doc' => $numdocuemnto,
			'id_caja' => $idCaja,
			'id_ticket' => $idpreventa,
		    'id_cajero' => $idCajero
		);

		$this->db->insert('recaudacion', $recaudacion); 
		$recauda = $this->db->insert_id();


		$recaudacion_detalle = array(				
	        'id_recaudacion' => $recauda,
	        'id_forma' => $idpago,
	        'detalle' => $detalle,
	        'valor_pago' => $ftotal,
	        'valor_cancelado' => $ftotal,
	        'fecha_transac' => $fechafactura,
	        'fecha_comp' => date('Y-m-d')
		);
		
		$this->db->insert('recaudacion_detalle', $recaudacion_detalle);    
		
		$recaudacion_general = array(				
	        'id_recaudacion' => $recauda,
	        'id_forma' => $idpago,
	        'credito' => $ftotal,
	        'id_caja' => $idCaja,
	        'id_cajero' => $idCajero,
	        'num_documento' => $numdocuemnto,
	        'fecha' => $fechafactura,
	        
		);
		
		//$this->db->insert('recaudacion_general', $recaudacion_detalle);    	
		$this->db->insert('recaudacion_general', $recaudacion_general);    	
		

		$data3 = array(
	         'correlativo' => $numdocuemnto
	    );
	    $this->db->where('id', $tipodocumento);
	  
	    $this->db->update('correlativos', $data3);
			
		$factura_cliente = array(
			'tipo_documento' => $tipodocumento,
	        'id_cliente' => $idcliente,
	        'num_factura' => $numdocuemnto,
	        'id_vendedor' => $vendedor,
	        'id_cond_venta' => $id_cond_venta,
	        'sub_total' => $neto,
	        'descuento' => ($neto - $fafecto),
	        'neto' => $neto,
	        'iva' => $fiva,
	        'totalfactura' => $ftotal,
	        'fecha_factura' => $fechafactura,
	        'id_factura' => $numfactura,
	        'fecha_venc' => $fechavenc,
	        'observacion' => $observacion
	          
		);
		$this->db->insert('factura_clientes', $factura_cliente); 
		$idfactura = $this->db->insert_id();
		$neto_total = 0;
		foreach($items as $v){

			$neto_producto = ($v->totaliva - $v->iva);
			$factura_clientes_item = array(
		        'id_producto' => $v->id_producto,
		        'id_factura' => $idfactura,
		        'num_factura' => $numdocuemnto,
		        'precio' => $v->precio,
		        'cantidad' => $v->cantidad,
		        'neto' => $neto_producto,
		        'descuento' => $v->dcto,
		        'iva' => $v->iva,
		        'totalproducto' => $v->totaliva,
		        'fecha' => $fechafactura
			);

		$neto_total += $neto_producto;
		$producto = $v->id;

		$this->db->insert('detalle_factura_cliente', $factura_clientes_item);
		
		$query = $this->db->query('SELECT * FROM productos WHERE id="'.$producto.'"');
		 if($query->num_rows()>0){

		 	$row = $query->first_row();

		 	$saldo = ($row->stock)+($v->cantidad); 

		 };

		 $query = $this->db->query('SELECT * FROM existencia WHERE id_producto="'.$producto.'"');
    	 $row = $query->result();
		 $row = $row[0];
	 
			if ($query->num_rows()>0){
			
	            if ($producto==($row->id_producto)){
				    $datos3 = array(
					'stock' => $saldo,
			        'fecha_ultimo_movimiento' => $fechafactura
					);

					$this->db->where('id_producto', $producto);

		    	    $this->db->update('existencia', $datos3);
	    	    }else{

	    	    	$datos3 = array(
					'id_producto' => $producto,
			        'stock' =>  $saldo,
			        'fecha_ultimo_movimiento' =>$fechafactura
				
					);
					$this->db->insert('existencia', $datos3);
		    	 	}
				}else{
					if ($producto==($row->id_producto)){
					    $datos3 = array(
						'stock' => $saldo,
				        'fecha_ultimo_movimiento' => $fechafactura
						);

						$this->db->where('id_producto', $producto);

			    	    $this->db->update('existencia', $datos3);
		    	    }else{

		    	    	$datos3 = array(
						'id_producto' => $producto,
				        'stock' =>  $saldo,
				        'fecha_ultimo_movimiento' =>$fechafactura
					
						);
						$this->db->insert('existencia', $datos3);
			    	}
			

		
		}
		$datos2 = array(

				'num_movimiento' => $numdocuemnto,
		        'id_producto' => $v->id,
		        'id_tipo_movimiento' => $tipodocumento,
		        'valor_producto' =>  $v->precio,
		        'cantidad_entrada' => $v->cantidad,
		        'fecha_movimiento' => $fechafactura
			);

			$this->db->insert('existencia_detalle', $datos2);

		$datos = array(
         'stock' => $saldo,
    	);

    	$this->db->where('id', $producto);

    	$this->db->update('productos', $datos);
    	
		}


		$iva_total = $neto_total*(0.19);
		$total_factura = $neto_total + $iva_total;

		$data_factura = array(
						'neto' => $neto_total,
						'iva' => $iva_total,
						'totalfactura' => $total_factura
						);

    	$this->db->where('id', $idfactura);
    	$this->db->update('factura_clientes', $data_factura);   

		/******* CUENTAS CORRIENTES ****/

		 $query = $this->db->query("SELECT cc.id as idcuentacontable FROM cuenta_contable cc WHERE cc.nombre = 'FACTURAS POR COBRAR'");
		 $row = $query->result();
		 $row = $row[0];
		 $idcuentacontable = $row->idcuentacontable;	


			// VERIFICAR SI CLIENTE YA TIENE CUENTA CORRIENTE
		 $query = $this->db->query("SELECT co.idcliente, co.id as idcuentacorriente  FROM cuenta_corriente co
		 							WHERE co.idcuentacontable = '$idcuentacontable' and co.idcliente = '" . $idcliente . "'");
    	 $row = $query->row();
    	 $idcuentacorriente =  $row->idcuentacorriente;

		if($query->num_rows() > 0){ //
			//se rebaja cuenta corriente 
			$query = $this->db->query("UPDATE cuenta_corriente SET saldo = saldo - " . $ftotal . " where id = " .  $row->idcuentacorriente );
			//$idcuentacorriente =  $row->idcuentacorriente;
		
			// se rebaja detalle
			$query = $this->db->query("UPDATE detalle_cuenta_corriente SET saldo = saldo - " . $ftotal . " where idctacte = " .  $row->idcuentacorriente . " and numdocumento = " . $numfactura_asoc);
			//$idcuentacorriente =  $row->idcuentacorriente;
			 $query_factura = $this->db->query("SELECT tipo_documento  FROM factura_clientes 
			 							WHERE num_factura = " . $numfactura_asoc . " and id_cliente = " . $idcliente . " limit 1");
			 $tipodocumento_asoc = $query_factura->row()->tipo_documento;

			$cartola_cuenta_corriente = array(
		        'idctacte' => $idcuentacorriente,
		        'idcuenta' => $idcuentacontable,
		        'tipodocumento' => $tipodocumento,
		        'numdocumento' => $numdocuemnto,
		        'tipodocumento_asoc' => $tipodocumento_asoc,
		        'numdocumento_asoc' => $numfactura_asoc,
		        'glosa' => 'Registro de Nota de Crédito en Cuenta Corriente',
		        'fecvencimiento' => $fechavenc,
		        'valor' => $ftotal,
		        'origen' => 'VENTA',
		        'fecha' => date('Y-m-d H:i:s')
			);

			$this->db->insert('cartola_cuenta_corriente', $cartola_cuenta_corriente); 
		}	    	 
	
	/*****************************************/


		if($tipodocumento == 102){  // SI ES NOTA DE CREDITO ELECTRONICA
			header('Content-type: text/plain; charset=ISO-8859-1');
			$this->load->model('facturaelectronica');
			$config = $this->facturaelectronica->genera_config();
			include $this->facturaelectronica->ruta_libredte();

			$tipo_nota_credito = $this->input->post('tipo_nota_credito');
			$glosa = $tipo_nota_credito == 1 ? 'Anula factura '. $numfactura_asoc : 'Correccion factura '. $numfactura_asoc;

			$empresa = $this->facturaelectronica->get_empresa();
			$datos_empresa_factura = $this->facturaelectronica->get_empresa_factura($idfactura);

			$detalle_factura = $this->facturaelectronica->get_detalle_factura($idfactura);
			$datos_factura = $this->facturaelectronica->get_factura($idfactura);

			$lista_detalle = array();
			$i = 0;
			foreach ($detalle_factura as $detalle) {
				$lista_detalle[$i]['NmbItem'] = $detalle->nombre;
				$lista_detalle[$i]['QtyItem'] = $detalle->cantidad;
				//$lista_detalle[$i]['PrcItem'] = floor($detalle->precio/1.19);
				//$lista_detalle[$i]['PrcItem'] = round($detalle->precio/1.19,0);
				$lista_detalle[$i]['PrcItem'] = round($detalle->neto/$detalle->cantidad,2);
				$lista_detalle[$i]['MontoItem'] = $detalle->neto;

				if($detalle->descuento != 0){
					//$porc_descto = round(($detalle->descuento/($detalle->cantidad*$lista_detalle[$i]['PrcItem'])*100),0);
					//$lista_detalle[$i]['DescuentoPct'] = $porc_descto;		
					//$lista_detalle[$i]['PrcItem'] =- $lista_detalle[$i]['PrcItem']*$porc_descto;
					$total_sin_iva = round($detalle->totalproducto/1.19,0);
					$descuento = abs(($lista_detalle[$i]['PrcItem']*$detalle->cantidad) - $total_sin_iva);
					$lista_detalle[$i]['DescuentoMonto'] = $descuento;
				}				
				//$lista_detalle[$i]['DescuentoMonto'] = $detalle->descuento;
				$i++;
			}


			$TpoDocRef = $numfactura >= 100000 ? 30 : 33;
			// datos
			$nota_credito = [
			    'Encabezado' => [
			        'IdDoc' => [
			            'TipoDTE' => 61,
			            'Folio' => $numdocuemnto,
			            'FchEmis' => substr($fechafactura,0,10)
			        ],
			        'Emisor' => [
			            'RUTEmisor' => $empresa->rut.'-'.$empresa->dv,
			            'RznSoc' => substr($empresa->razon_social,0,100), //LARGO DE RAZON SOCIAL NO PUEDE SER SUPERIOR A 100 CARACTERES
			            'GiroEmis' => substr($empresa->giro,0,80), //LARGO DE GIRO DEL EMISOR NO PUEDE SER SUPERIOR A 80 CARACTERES
			            'Acteco' => $empresa->cod_actividad,
			            'DirOrigen' => substr($empresa->dir_origen,0,70), //LARGO DE DIRECCION DE ORIGEN NO PUEDE SER SUPERIOR A 70 CARACTERES
			            'CmnaOrigen' => substr($empresa->comuna_origen,0,20), //LARGO DE COMUNA DE ORIGEN NO PUEDE SER SUPERIOR A 20 CARACTERES
			        ],
			        'Receptor' => [
			            'RUTRecep' => substr($datos_empresa_factura->rut_cliente,0,strlen($datos_empresa_factura->rut_cliente) - 1)."-".substr($datos_empresa_factura->rut_cliente,-1),
			            'RznSocRecep' => substr($datos_empresa_factura->nombre_cliente,0,100), //LARGO DE RAZON SOCIAL NO PUEDE SER SUPERIOR A 100 CARACTERES
			            'GiroRecep' => substr($datos_empresa_factura->giro,0,40), //LARGO DEL GIRO NO PUEDE SER SUPERIOR A 40 CARACTERES
			            'DirRecep' => substr($datos_empresa_factura->direccion,0,70), //LARGO DE DIRECCION NO PUEDE SER SUPERIOR A 70 CARACTERES
			            'CmnaRecep' => substr($datos_empresa_factura->nombre_comuna,0,20), //LARGO DE COMUNA NO PUEDE SER SUPERIOR A 20 CARACTERES
			        ],
		            'Totales' => [
		                // estos valores serán calculados automáticamente
		                'MntNeto' => isset($datos_factura->neto) ? $datos_factura->neto : 0,
		                'TasaIVA' => \sasco\LibreDTE\Sii::getIVA(),
		                'IVA' => isset($datos_factura->iva) ? $datos_factura->iva : 0,
		                'MntTotal' => isset($datos_factura->totalfactura) ? $datos_factura->totalfactura : 0,
		            ],			        
			    ],
				'Detalle' => $lista_detalle,
		        'Referencia' => [
		            'TpoDocRef' => $TpoDocRef,
		            'FolioRef' => $numfactura,
		            'CodRef' => $tipo_nota_credito,
		            'RazonRef' => $glosa,
		        ]				
			];			

			//FchResol y NroResol deben cambiar con los datos reales de producción
			$caratula = [
			    //'RutEnvia' => '11222333-4', // se obtiene de la firma
			    'RutReceptor' => '60803000-K',
			    'FchResol' => $empresa->fec_resolucion,
			    'NroResol' => $empresa->nro_resolucion
			];



			$caratula_cliente = [
			    //'RutEnvia' => '11222333-4', // se obtiene de la firma
			    'RutReceptor' => substr($datos_empresa_factura->rut_cliente,0,strlen($datos_empresa_factura->rut_cliente) - 1)."-".substr($datos_empresa_factura->rut_cliente,-1),
			    'FchResol' => $empresa->fec_resolucion,
			    'NroResol' => $empresa->nro_resolucion
			];			


			$Firma = new sasco\LibreDTE\FirmaElectronica($config['firma']); //lectura de certificado digital		
			$caf = $this->facturaelectronica->get_content_caf_folio($numdocuemnto,61);
			$Folios = new sasco\LibreDTE\Sii\Folios($caf->caf_content);

			$DTE = new \sasco\LibreDTE\Sii\Dte($nota_credito);

			$DTE->timbrar($Folios);
			$DTE->firmar($Firma);		

			// generar sobre con el envío del DTE y enviar al SII
			$EnvioDTE = new \sasco\LibreDTE\Sii\EnvioDte();

			$EnvioDTE->agregar($DTE);
			$EnvioDTE->setFirma($Firma);
			$EnvioDTE->setCaratula($caratula);
			$EnvioDTE->generar();
			if ($EnvioDTE->schemaValidate()) { // REVISAR PORQUÉ SE CAE CON ESTA VALIDACION
				
				$track_id = 0;
			    $xml_dte = $EnvioDTE->generar();

			    #GENERACIÓN DTE CLIENTE
				$EnvioDTE_CLI = new \sasco\LibreDTE\Sii\EnvioDte();
				$EnvioDTE_CLI->agregar($DTE);
				$EnvioDTE_CLI->setFirma($Firma);
				$EnvioDTE_CLI->setCaratula($caratula_cliente);
				$xml_dte_cliente = $EnvioDTE_CLI->generar();			    


			    $tipo_envio = $this->facturaelectronica->busca_parametro_fe('envio_sii'); //ver si está configurado para envío manual o automático

			    $dte = $this->facturaelectronica->crea_archivo_dte($xml_dte,$idfactura,61,'sii');
			    $dte_cliente = $this->facturaelectronica->crea_archivo_dte($xml_dte_cliente,$idfactura,61,'cliente');


			    if($tipo_envio == 'automatico'){
				    $track_id = $EnvioDTE->enviar();
			    }			    


			    $this->db->where('f.folio', $numdocuemnto);
			    $this->db->where('c.tipo_caf', 61);
				$this->db->update('folios_caf f inner join caf c on f.idcaf = c.id',array('dte' => $dte['xml_dte'],
																						  'dte_cliente' => $dte_cliente['xml_dte'],
																						  'estado' => 'O',
																						  'idfactura' => $idfactura,
																						  'path_dte' => $dte['path'],
																						  'archivo_dte' => $dte['nombre_dte'],
																						  'archivo_dte_cliente' => $dte_cliente['nombre_dte'],
																						  'trackid' => $track_id
																						  )); 				


				if($track_id != 0 && $datos_empresa_factura->e_mail != ''){ //existe track id, se envía correo
						$this->facturaelectronica->envio_mail_dte($idfactura);
				}

			}					
			
		}
      

        $resp['success'] = true;
		$resp['idfactura'] = $idfactura;

		$this->Bitacora->logger("I", 'factura_clientes', $idfactura);

		
        

        echo json_encode($resp);
	}
	
	public function getAllnc(){
		
		$resp = array();
		$start = $this->input->get('start');
        $limit = $this->input->get('limit');
        $opcion = $this->input->get('opcion');
        $nombres = $this->input->get('nombre');
        $tipo = "11";
        $tipo2 = "102";

		//$countAll = $this->db->count_all_results("factura_clientes");
		$data = array();
		$total = 0;

		$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, co.nombre as nombre_docu, v.nombre as nom_vendedor, acc.tipo_documento as id_tip_docu, td.descripcion as tipo_doc	FROM factura_clientes acc
		left join clientes c on (acc.id_cliente = c.id)
		left join vendedores v on (acc.id_vendedor = v.id)
		left join correlativos co on (acc.tipo_documento = co.id)
		left join tipo_documento td on (acc.tipo_documento = td.id)
		WHERE acc.tipo_documento in ( '.$tipo.','.$tipo2.')');

		$total = 0;
		
		foreach ($query->result() as $row)
			{
				$total = $total +1;
			
			};

		$countAll = $total;

		if($opcion == "Rut"){

			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.tipo_documento in ( '.$tipo.','.$tipo2.') and c.rut = "'.$nombres.'"
			order by acc.id desc');
			$total = 0;
		
		    foreach ($query->result() as $row)
			{
				$total = $total +1;
			
			};

		    $countAll = $total;
		
			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.tipo_documento in ( '.$tipo.','.$tipo2.') and c.rut = "'.$nombres.'"
			order by acc.id desc');

	    }else if($opcion == "Nombre"){

	    	
			$sql_nombre = "";
	        $arrayNombre =  explode(" ",$nombres);

	        foreach ($arrayNombre as $nombre) {
	        	$sql_nombre .= "and c.nombres like '%".$nombre."%' ";
	        }


			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc	FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.tipo_documento in ('.$tipo.','.$tipo2.') ' . $sql_nombre . ''		
			);
			$total = 0;
		
		    foreach ($query->result() as $row)
			{
				$total = $total +1;
			
			};

		    $countAll = $total;
	        	    	
			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc	FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.tipo_documento in ('.$tipo.','.$tipo2.') ' . $sql_nombre . '
			order by acc.id desc		
			limit '.$start.', '.$limit.''	
			
			);
	 
		}else if($opcion == "Todos"){
			
			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc	FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.tipo_documento in ('.$tipo.','.$tipo2.')
			order by acc.id desc		
			limit '.$start.', '.$limit.''	
			
			);
	

		}else if($opcion == "Numero"){
		
			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc	FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.num_factura = "'.$nombres.'" AND acc.tipo_documento in ( '.$tipo.','.$tipo2.')');

			$total = 0;

		 	 foreach ($query->result() as $row)
			{
				$total = $total +1;
			
			}

			$countAll = $total;

			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc	FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.num_factura = "'.$nombres.'" AND acc.tipo_documento in ( '.$tipo.','.$tipo2.')
			order by acc.id desc
			limit '.$start.', '.$limit.'');

	    }else{
			
			$query = $this->db->query('SELECT acc.*, c.nombres as nombre_cliente, c.rut as rut_cliente, v.nombre as nom_vendedor, td.descripcion as tipo_doc	FROM factura_clientes acc
				left join clientes c on (acc.id_cliente = c.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			left join tipo_documento td on (acc.tipo_documento = td.id)
			WHERE acc.tipo_documento in ('.$tipo.','.$tipo2.')
			order by acc.id desc		
			limit '.$start.', '.$limit.''
			);

		}
				
		foreach ($query->result() as $row)
		{
			$rutautoriza = $row->rut_cliente;
		   	if (strlen($rutautoriza) == 8){
		      $ruta1 = substr($rutautoriza, -1);
		      $ruta2 = substr($rutautoriza, -4, 3);
		      $ruta3 = substr($rutautoriza, -7, 3);
		      $ruta4 = substr($rutautoriza, -8, 1);
		      $row->rut_cliente = ($ruta4.".".$ruta3.".".$ruta2."-".$ruta1);
		    };
		    if (strlen($rutautoriza) == 9){
		      $ruta1 = substr($rutautoriza, -1);
		      $ruta2 = substr($rutautoriza, -4, 3);
		      $ruta3 = substr($rutautoriza, -7, 3);
		      $ruta4 = substr($rutautoriza, -9, 2);
		      $row->rut_cliente = ($ruta4.".".$ruta3.".".$ruta2."-".$ruta1);
		   
		    };
		    if (strlen($rutautoriza) == 2){
		      $ruta1 = substr($rutautoriza, -1);
		      $ruta2 = substr($rutautoriza, -4, 1);
		      $row->rut_cliente = ($ruta2."-".$ruta1);
		     
		    };		    
			$data[] = $row;
		}

        $resp['success'] = true;
        $resp['total'] = $countAll;
        $resp['data'] = $data;

        echo json_encode($resp);
	}

	public function validaproducto(){
		
		$resp = array();
		$idproducto = $this->input->post('idproducto');
		$idfactura = $this->input->post('idfactura');

		if ($idproducto & $idfactura ){

		$query = $this->db->query('SELECT * FROM detalle_factura_cliente 
		WHERE id_producto like '.$idproducto.' AND id_factura like '.$idfactura.'');
    	$row = $query->first_row();
		
		if($query->num_rows()>0){
			$resp['success'] = true;		 	
		 }else {
		 	$resp['success'] = false;
		};
		}else{

			 $query = $this->db->query('SELECT * FROM productos WHERE id ="'.$idproducto.'"');
            $row = $query->first_row();
	        if($query->num_rows()>0){

	    	 $resp['success'] = true;
	    	 }else {
		 	$resp['success'] = false;
		    };
	    		 	
		 
		};
	   
		$resp['cliente'] = $row;
        
        echo json_encode($resp);
	}

	
	public function exportNotacreditoPDF(){

		$idfactura = $this->input->get('idfactura');
		$numero = $this->input->get('numfactura');

        if ($idfactura){
		$query = $this->db->query('SELECT acc.*, c.direccion as direccion, e.nombre as giro, c.nombres as nombre_cliente, c.rut as rut_cliente, m.nombre as nombre_comuna, s.nombre as nombre_ciudad, v.nombre as nom_vendedor FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join cod_activ_econ e on (c.id_giro = e.id)
			left join comuna m on (c.id_comuna = m.id)
			left join ciudad s on (c.id_ciudad = s.id)
			left join vendedores v on (acc.id_vendedor = v.id)		
			WHERE acc.id = '.$idfactura.'');
		}else{
			$query = $this->db->query('SELECT acc.*, c.direccion as direccion, e.nombre as giro, c.nombres as nombre_cliente, c.rut as rut_cliente, m.nombre as nombre_comuna, s.nombre as nombre_ciudad, v.nombre as nom_vendedor FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join cod_activ_econ e on (c.id_giro = e.id)
			left join comuna m on (c.id_comuna = m.id)
			left join ciudad s on (c.id_ciudad = s.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			WHERE acc.num_factura = '.$numero.'

		');


		}

		//cotizacion header
		$row = $query->result();
		$row = $row[0];
		$fecha = $row->fecha_venc;
		$numfact = $row->id_factura;
		list($anio, $mes, $dia) = explode("-",$fecha);
		$fecha2 = $row->fecha_factura;
		list($anio2, $mes2, $dia2) = explode("-",$fecha2);
		 
		//items
		$items = $this->db->get_where('detalle_factura_cliente', array('id_factura' => $row->id));
		//print_r($items->result());exit;
		//variables generales
		$codigo = $row->num_factura;
		$nombre_contacto = $row->nombre_cliente;
		$rut_cliente = $row->rut_cliente;
		$direccion = $row->direccion;
		$comuna = $row->nombre_comuna;
		$ciudad = $row->nombre_ciudad;
		$fecha = $row->fecha_venc;
		$giro = $row->giro;
		$cabecera = $this->db->get_where('factura_clientes', array('id' => $row->id));		
		$montoNeto = 0;
	    $ivaTotal = 0;
		$totalFactura = 0;
		foreach($cabecera->result() as $reg){
			$montoNeto = $reg->neto;
			$ivaTotal = $reg->iva;
			$totalFactura = $reg->totalfactura;
		}
				
		$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
		$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
		 

		$html = '
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style type="text/css">
<!--
.cajaInput {
	border: 1px dotted #ED1B24;
}
.style5 {color: #FF0000; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; }
.style6 {	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	font-weight: bold;
}
.colorTextoFijo {	color:#008F9F;
	font-weight: bold;
	font:Arial, Helvetica, sans-serif;
}
.lineaDivisoria {
	border-bottom-style:dotted;
	border-bottom-color:#ED1B24;
	border-bottom-width:1px;
	height: 2px;
}
.cajaInputIzq {
	border-top-width: 1px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	border-right-width: 1px;
	border-top-style: dotted;
	border-bottom-style: dotted;
	border-left-style: dotted;
	border-right-style: dotted;
	border-top-color: #ED1B24;
	border-bottom-color: #ED1B24;
	border-left-color: #ED1B24;
	border-right-color: #ED1B24;
}
.style9 {font-size: 8px;
font-family: Arial, Helvetica, sans-serif;
}
.style12 {color: #FFFFFF}
.style13 {font-size: 12px; font-family: Arial, Helvetica, sans-serif;}
.style14 {font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; color: #FFFFFF; }
.style15 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 10px;
	font-weight: bold;
	color: #FFFFFF;
}
-->
</style>
</head>

<body>
   <table width="987px" border="0">
      <tr>
        <td width="987px">
          <table width="987px" border="0">
          <tr>
            <td width="740px" height="80px">&nbsp;</td>
	        <td width="247px" height="80px" style="font-size: 25px;vertical-align:bottom;"> N°'.$codigo.'</td>
          </tr>
          </table>
        </td>
      </tr> 
      <tr>
        <td width="987px">
          <table width="987px" border="0">
          <tr>
            <td width="90px" height="60px">&nbsp;</td>
	        <td width="90px" height="60px" style="vertical-align:bottom;">'.$dia2.'</td>
	        <td width="350px" height="60px" style="vertical-align:bottom;">'.month2string($mes2).'</td>
	        <td width="70px" height="60px" style="vertical-align:bottom;">'.$anio2.'</td>
	        <td width="387px" height="60px" style="vertical-align:bottom;">&nbsp;</td>
          </tr>
          </table>
        </td>
      </tr>       
      <tr>
        <td width="987px">
          <table width="987px" border="0">
          <tr>
            <td width="120px" height="20px">&nbsp;</td>
	        <td width="700px" height="20px" style="vertical-align:bottom;">'.$nombre_contacto.'</td>
	        <td width="100px" height="20px" style="vertical-align:bottom;">'.number_format(substr($rut_cliente,0,strlen($rut_cliente) - 1),0,".",".")."-".substr($rut_cliente,-1).'</td>
	        <td width="67px" height="20px" style="vertical-align:bottom;">&nbsp;</td>
          </tr>
          </table>
        </td>
      </tr>             
      <tr>
        <td width="987px">
          <table width="987px" border="0">
          <tr>
            <td width="120px" height="20px">&nbsp;</td>
	        <td width="700px" height="20px" style="vertical-align:bottom;">'.$direccion.'</td>
	        <td width="100px" height="20px" style="vertical-align:bottom;">'.$ciudad.'</td>
	        <td width="67px" height="20px" style="vertical-align:bottom;">&nbsp;</td>
          </tr>
          </table>
        </td>
      </tr>                   
      <tr>
      <td width="987px">
         <table width="987px" border="0">
          <tr>
	      	<td width="120px" height="20px">&nbsp;</td>
	        <td width="867px">' . $giro . '</td>
          </tr>
          </table>	        
       </td>
      </tr> 
      <tr>
      <td  width="120px" height="50px">&nbsp;</td>
      </tr>                  
      <tr>
            <td width="987px" >
            <table width="987px" border="0">';
     $tamano_maximo = 180;
     $i = 1;
    foreach($items->result() as $v){      
      $this->db->where('id', $v->id_producto);
      $producto = $this->db->get("productos");  
      $producto = $producto->result();
      $producto = $producto[0];   

          $html .= '
              
                <tr>
                  <td width="50px" height="20px">&nbsp;</td>
                  <td width="100px" height="20px">' . $v->cantidad . '</td>
                  <td width="600px" height="20px">' . $producto->nombre . '</td>
                  <td width="150px" height="20px">' . number_format($v->precio, 0, ',', '.') . '</td>                  
                  <td width="87px" height="20px">' . number_format($v->neto, 0, ',', '.') . '</td>
                </tr>
             ';
          $i++;
          $tamano_maximo = $tamano_maximo - 20;
    }

    while($tamano_maximo > 0){
      $html .= '<tr><td colspan="7" height="20px">&nbsp;</td></tr>';
      $tamano_maximo = $tamano_maximo - 20; 
    }


	 $html .= '</table></td></tr>
      <tr>
      <td width="987px">
         <table width="987px" border="0">
          <tr>
	      	<td width="150px" height="20px">&nbsp;</td>
	        <td width="750px" height="20px">' . valorEnLetras($totalFactura) . '</td>
	        <td width="87px"  height="20px">' . number_format($montoNeto, 0, ',', '.') . '</td>
          </tr>
          </table>	        
       </td>
      </tr> 
      <tr>
      <td width="987px">
         <table width="987px" border="0">
          <tr>
	      	<td width="150px" height="20px">&nbsp;</td>
	        <td width="750px" height="20px">&nbsp;</td>
	        <td width="87px"  height="20px">' . number_format($ivaTotal, 0, ',', '.') . '</td>
          </tr>
          </table>	        
       </td>
      </tr> 
      <tr>
      <td width="987px">
         <table width="987px" border="0">
          <tr>
	      	<td width="150px" height="20px">&nbsp;</td>
	        <td width="750px" height="20px">&nbsp;</td>
	        <td width="87px"  height="20px">' . number_format($totalFactura, 0, ',', '.') . '</td>
          </tr>
          </table>	        
       </td>
      </tr> 
	 </table>
</body>
</html>
		';
		//==============================================================
		//==============================================================
		//==============================================================
		$this->load->library("mpdf");
		//include(defined('BASEPATH')."/libraries/MPDF54/mpdf.php");
		//include(dirname(__FILE__)."/../libraries/MPDF54/mpdf.php");

		$this->mpdf->mPDF(
			'',    // mode - default ''
			'letter',    // format - A4, for example, default ''
			0,     // font size - default 0
			'',    // default font family
			15,    // margin_left
			15,    // margin right
			16,    // margin top
			16,    // margin bottom
			9,     // margin header
			9,     // margin footer
			'L'    // L - landscape, P - portrait
			);  

		$this->mpdf->WriteHTML($html);
		$this->mpdf->Output("CF_{$codigo}.pdf", "I");

		/*$mpdf= new mPDF(
			'',    // mode - default ''
			'',    // format - A4, for example, default ''
			0,     // font size - default 0
			'',    // default font family
			15,    // margin_left
			15,    // margin right
			16,    // margin top
			16,    // margin bottom
			9,     // margin header
			9,     // margin footer
			'L'    // L - landscape, P - portrait
			);  

		$mpdf->WriteHTML($html);
		$mpdf->Output("CF_{$codigo}.pdf", "I");
		*/
		exit;
	}


	public function exportBoletaPDF($idfactura,$numero){

		//$idfactura = $this->input->get('idfactura');
		//$numero = $this->input->get('numfactura');

        if ($idfactura){
		$query = $this->db->query('SELECT acc.*, c.direccion as direccion, e.nombre as giro, c.nombres as nombre_cliente, c.rut as rut_cliente, m.nombre as nombre_comuna, s.nombre as nombre_ciudad, v.nombre as nom_vendedor FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join cod_activ_econ e on (c.id_giro = e.id)
			left join comuna m on (c.id_comuna = m.id)
			left join ciudad s on (c.id_ciudad = s.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			WHERE acc.id = '.$idfactura.'
		');
		}else{
			$query = $this->db->query('SELECT acc.*, c.direccion as direccion, e.nombre as giro, c.nombres as nombre_cliente, c.rut as rut_cliente, m.nombre as nombre_comuna, s.nombre as nombre_ciudad, v.nombre as nom_vendedor FROM factura_clientes acc
			left join clientes c on (acc.id_cliente = c.id)
			left join cod_activ_econ e on (c.id_giro = e.id)
			left join comuna m on (c.id_comuna = m.id)
			left join ciudad s on (c.id_ciudad = s.id)
			left join vendedores v on (acc.id_vendedor = v.id)
			WHERE acc.num_factura = '.$numero.'

		');


		}

		//cotizacion header
		$row = $query->result();
		$row = $row[0];
		//items
		$items = $this->db->get_where('detalle_factura_cliente', array('id_factura' => $row->id));
		//print_r($items->result());exit;
		//variables generales
		$codigo = $row->num_factura;
		$nombre_contacto = $row->nombre_cliente;
		$rut_cliente = $row->rut_cliente;
		$direccion = $row->direccion;
		$comuna = $row->nombre_comuna;
		$ciudad = $row->nombre_ciudad;
		$giro = $row->giro;
		$fecha = $row->fecha_venc;
		list($anio, $mes, $dia) = explode("-",$fecha);
		$fecha2 = $row->fecha_factura;
		list($anio2, $mes2, $dia2) = explode("-",$fecha2);

		$cabecera = $this->db->get_where('factura_clientes', array('id' => $row->id));		
		$montoNeto = 0;
		$ivaTotal = 0;
		$totalFactura = 0;
		foreach($cabecera->result() as $reg){
			$montoNeto = $reg->neto;
			$ivaTotal = $reg->iva;
			$totalFactura = $reg->totalfactura;
		}
				
$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
 

		$html = '
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style type="text/css">
<!--
.cajaInput {
	border: 1px dotted #ED1B24;
}
.style5 {color: #FF0000; font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; }
.style6 {	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	font-weight: bold;
}
.colorTextoFijo {	color:#008F9F;
	font-weight: bold;
	font:Arial, Helvetica, sans-serif;
}
.lineaDivisoria {
	border-bottom-style:dotted;
	border-bottom-color:#ED1B24;
	border-bottom-width:1px;
	height: 2px;
}
.cajaInputIzq {
	border-top-width: 1px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	border-right-width: 1px;
	border-top-style: dotted;
	border-bottom-style: dotted;
	border-left-style: dotted;
	border-right-style: dotted;
	border-top-color: #ED1B24;
	border-bottom-color: #ED1B24;
	border-left-color: #ED1B24;
	border-right-color: #ED1B24;
}
.style9 {font-size: 8px;
font-family: Arial, Helvetica, sans-serif;
}
.style12 {color: #FFFFFF}
.style13 {font-size: 12px; font-family: Arial, Helvetica, sans-serif;}
.style14 {font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; color: #FFFFFF; }
.style15 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 10px;
	font-weight: bold;
	color: #FFFFFF;
}
-->
</style>
</head>

<body>
   <table width="650" border="0" cellpadding="0" cellspacing="0">
   	  
      <tr>
        <td width="450"><span class="style6">&nbsp;</span><span class="colorTextoFijo"></span></td>
		<td class="style6"><center>'.$codigo.'</center></td>
      </tr>
    </table>
    <p align="right"><b>'.$dia2.'/'.$mes2.'/'.$anio2.'</b></p>
    <p align="right"><b>'.$dia.'/'.$mes.'/'.$anio.'</b></p>
    <br><br>
  <table>
  <tr>
    <td>&nbsp;</td>
   
    <td>&nbsp;</td>
  </tr>
  </table>

  <table border="0" cellspacing="0" cellpadding="0">
  		<tr>
         <td>&nbsp;</td>        
        </tr>
        <tr>
         <td>&nbsp;</td>        
        </tr>
        <tr>
         <td>&nbsp;</td>        
        </tr>
        <tr>
         <td>&nbsp;</td>        
        </tr>
      ';
      $i = 1;
	foreach($items->result() as $v){      
			$this->db->where('id', $v->id_producto);
			$producto = $this->db->get("productos");	
			$producto = $producto->result();
			$producto = $producto[0];

     $html .= '<tr>
        <td >'.$v->cantidad.'</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td ><b>'.$producto->nombre.'</b></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        
        <td >'.number_format($v->precio, 0, ',', '.').'</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >'.number_format($v->descuento, 0, ',', '.').'</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td ><b>'.number_format($v->totalproducto, 0, ',', '.').'</b></td>
        </tr>';
        $i++;

    }

    if($i < 15){
    	for($j=$i;$j<=15;$j++){
		        $html .= '<tr>
		        <td >&nbsp;</td>
		        <td >&nbsp;</td>
		        <td >&nbsp;</td>
		        <td >&nbsp;</td>
		        <td >&nbsp;</td>
		        
		        </tr>';
    	}
    }

      
      $html .='
      	<tr>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
      	<td >&nbsp;</td>
        <td >&nbsp;</td>
        <td >&nbsp;</td>
        <td ><b>'.number_format($totalFactura, 0, ',', '.').'</b></td>
        </tr>                
</table>
</body>
</html>
		';
		//==============================================================
		//==============================================================
		//==============================================================
		$this->load->library("mpdf");
		//include(defined('BASEPATH')."/libraries/MPDF54/mpdf.php");
		//include(dirname(__FILE__)."/../libraries/MPDF54/mpdf.php");

		$this->mpdf->mPDF(
			'',    // mode - default ''
			'',    // format - A4, for example, default ''
			0,     // font size - default 0
			'',    // default font family
			15,    // margin_left
			15,    // margin right
			16,    // margin top
			16,    // margin bottom
			9,     // margin header
			9,     // margin footer
			'L'    // L - landscape, P - portrait
			);  

		$this->mpdf->WriteHTML($html);
		$this->mpdf->Output("CF_{$codigo}.pdf", "I");

		/*$mpdf= new mPDF(
			'',    // mode - default ''
			'',    // format - A4, for example, default ''
			0,     // font size - default 0
			'',    // default font family
			15,    // margin_left
			15,    // margin right
			16,    // margin top
			16,    // margin bottom
			9,     // margin header
			9,     // margin footer
			'L'    // L - landscape, P - portrait
			);  

		$mpdf->WriteHTML($html);
		$mpdf->Output("CF_{$codigo}.pdf", "I");
		*/
		exit;
	}	
}











