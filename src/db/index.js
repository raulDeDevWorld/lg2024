const services = [
    {
        image: '/truck.png',
        title: 'Transporte Terrestre',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quasi recusandae unde doloremque iusto beatae, explicabo quidem. Necessitatibus itaque corporis dignissimos fuga magni aut illo obcaecati recusandae repudiandae. Illo distinctio aliquid vitae, explicabo autem sit officiis fugiat quasi eos at, ea facilis quam cumque pariatur. Assumenda iure ea ullam!",
        button: 'button'
    },
    {
        image: '/volvo.png',
        title: 'Lorem ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quasi recusandae unde doloremque iusto beatae, explicabo quidem. Necessitatibus itaque corporis dignissimos fuga magni aut illo obcaecati recusandae repudiandae. Illo distinctio aliquid vitae, explicabo autem sit officiis fugiat quasi eos at, ea facilis quam cumque pariatur. Assumenda iure ea ullam!",
        button: 'button'
    },
    {
        image: '/airplane.png',
        title: 'Lorem ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quasi recusandae unde doloremque iusto beatae, explicabo quidem. Necessitatibus itaque corporis dignissimos fuga magni aut illo obcaecati recusandae repudiandae. Illo distinctio aliquid vitae, explicabo autem sit officiis fugiat quasi eos at, ea facilis quam cumque pariatur. Assumenda iure ea ullam!",
        button: 'button'
    },
]










const glosario = {
    ALICUOTA: 'Es el valor fijo o porcentual establecido por Ley, que debe aplicarse a la base imponible para determinar el tributo a pagar.',
    ALMACEN: 'Un almacén es un espacio estratégico dentro del cual su principal objetivo es resguardar, proteger y preservar las mercancías o materias primas.',
    ARANCEL: 'Un arancel es un impuesto o gravamen que se aplica solo a los bienes que son importados o exportados',
    ARMADOR: 'Persona física o jurídica que posee el dominio del buque y se encarga de ponerlo en condiciones de navegar',
    ASTILLERO: 'Un astillero es un establecimiento dedicado a la construcción y la reparación de embarcaciones.',
    ATRINCADO: 'Este termino hace referencia a la sujeción de la carga a cualquier medio de transporte e incluso a contenedores, e incluye todos los recursos y actividades necesarias al efecto y que según los Estándares Internacionales de la Industria deberían ser proporcionados por el CONCESIONARIO para la prestación de tal servicio.',
    AWB: 'El Air Waybill (AWB, por sus siglas en inglés) es el documento que acredita un contrato de transporte aéreo de una mercancía.',
    BAF: 'El Bunker Adjustment Factor (Factor de Ajuste de Combustible) esun cargo adicional añadido al precio base del flete que refleja el costedel combustible empleado para la travesía.',
    ['BASE IMPONIBLE']: 'Es la unidad de medida, valor o magnitud, obtenidos de acuerdo a las normas legales respectivas, sobre la cual se aplica la alícuota para determinar el tributo a pagar.',
    ['BILL OF LADING']: 'El Bill of Lading o conocimiento de embarque es un contrato legal detransporte de la carga. Acredita la recepción o carga a bordo de aquellas mercancías que se van a transportar y las condiciones establecidas para ello',
    BOOKING: 'Permite a las empresas transitarias y a los cargadores solicitar a las navieras una reserva de espacio para los contenedores que van a embarcar y recibir las correspondientes confirmaciones. ',
    ['BREAK EVEN WEIGHT']: 'El peso de equilibrio es el peso en el que es más económico cobrar la tarifa más baja por el siguiente peso de equilibrio más alto multiplicado por el peso mínimo indicado, que cobrar la tarifa más alta por el peso real del envío. ',
    ['BULK CARGO']: 'La carga a granel es la mercancía que se transporta sin embalar en grandes cantidades. Se refiere a material en forma líquida o granular, en forma de partículas, como una masa de sólidos relativamente pequeños, tales como petróleo, grano, carbón o grava.',
    ['BUNKER SURCHARGE']: 'Este termino hace referencia a recargos relacionados con el combustible, que aplican las navieras para cubrir gastos extra relacionados con este concepto.',
    ['C.A.F.: (Currency Adjustment Factor)']: 'Factor de ajuste de moneda en español, es un recargo que cubre las posibles oscilaciones del cambio de divisa. Es un porcentaje del sobre el total del flete. ',
    ['C.F.S.']: 'Este termino hace referencia a el lugar establecido por el transportista para consolidar o desconsolidar carga a los contenedores. ',
    ['CFS a CFS de muelle a muelle']: 'Básicamente, este término suele aparecer en los documentos oficiales de envío. Se refiere a las mercancías cargadas y agrupadas por un expedidor en contenedores. Además, se relaciona con las mercancías descargadas por el remitente cuando llega al CFS o la estación de carga de contenedores.',
    CALADO: 'Es la Profundidad que alcanza el agua en la parte sumergida de una embarcación . ',
    ['CARGA A GRANEL']: 'Las mercancías a granel son mercancías que están presentes en forma vertible. Los productos a granel están presentes en cantidades grumosas, granulares o en polvo.Los sólidos a granel se diferencian principalmente de acuerdo con lo fluidos que son. ',
    ['CARGA PROYECTO']: 'Es una actividad que involucra la logística para transportar la carga pesada o que sobrepasa las dimensiones comunes, por lo que se necesita cumplir con características especiales para su transporte, así como de una mayor especialización por parte de las partes involucradas.',
    ['CARGA UNITARIZADA']: 'En su forma más elemental cabe entender por unitarización de una carga a la reunión agrupación de ciertos números de artículos o bultos en un solo conjunto con el propósito de facilitar su manipulación, estiba, almacenamiento, transporte o utilización posterior de su contenido.',
    CHARTER: 'Este termino hace referencia a el arrendamiento de Un avión, Barco u parte de un barco para el transporte exclusivo de un consignatario.Un chárter aéreo se refiere a la contratación de un servicio exclusivo, es decir, todo el avión, para el traslado de mercancía.Por lo tanto, se trata de un servicio particular y muy diferente a los vuelos tradicionales.Ya que suelen ser utilizados por grandes empresas y medios de comercialización de escala continental.El chárter marítimo, por su parte, se refiere específicamente al flete marítimo.Lo cual hace referencia a la actividad económica del transporte a través del mar, en donde se contrata un buque para garantizar el traslado de determinada mercancía de la empresa.',
    COC: 'COC Carrier Owned Container “contenedor de la naviera”',
    COLLECT: 'Este termino hace referencia a los gastos de transporte serán pagados por el destinatario.',
    CONSIGNEE: 'El consignee o consignatario es el dueño de la mercancía en destino ',
    CONSOLIDADO: 'Es la operación en la cual se unitarizan en un contenedor LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN o unidad de transporte las mercancías de varios consignatarios para su transporte.',
    CRT: 'El CRT en comercio exterior(Conocimiento Rodoviario de Transporte o Carta de Porte Terrestre Carretero), es un documento que emite el transportista o cargador como comprobante de la entrega de la carga.',
    ['CUT OFF']: 'Cut off es la fecha o plazo limite que nos da la naviera o aerolinea para la entrega de la carga o documentación de la misma existe fisico, documental y de VGM dependiendo la aerolinea o naviera.',
    DAM: 'La Declaración de Adquisición de Mercancías(DAM) es una declaración previa sin pago de tributos que contiene información de la factura comercial, la transacción y el detalle de las mercancías que son embarcadas en territorio extranjero con destino a territorio nacional.',
    DEMURRAGE: 'El término demora o Demurrage, como es mundialmente conocido, es el resultado de un incumplimiento de las reglas acordadas en un contrato de arriendo o fletamento en el caso de las naves y en el caso de los contenedores, es cuando las navieras otorgan días libres para el uso de la unidad y éstos son sobrepasados y generan extra costos.',
    ['DEPOSITO ADUANERO']: 'Los depósitos de Aduana son los espacios cubiertos o descubiertos perfectamente delimitados, habilitados por la aduana Nacional como Zonas Primarias, que tienen por objeto el debido almacenamiento y custodia de las mercancías, hasta que se aplique un Régimen Aduanero dentro de los plazos establecidos por Ley”',
    ['DESPACHO ADUANERO']: 'El despacho aduanero es el procedimiento mediante el cual las mercancías extranjeras son nacionalizadas .',
    DIM: 'La Declaración de Mercancías de Importación(DIM), es un documento digital que deberá ser elaborada, firmada digitalmente y transmitida por el Declarante a la Administración Aduanera a través del sistema informático de la Aduana Nacional, en adelante “sistema LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN informático”',
    ['DRAFT BL/ AWB']: 'se refieren al Borrador del BL (Manifiesto marítimo) o AWB(Guia Aerea).',
    EMBALAJE: 'El embalaje es todo aquello necesario en el proceso de acondicionar los productos para protegerlos, y / o agruparlos de manera temporal pensando en su manipulación, transporte y almacenamiento.',
    ESLORA: 'Este termino hace referencia a Longitud de una embarcación desde la proa hasta la proa.',
    ESTIBA: 'La estiba es el proceso a través del cual se efectúa una correcta colocación y distribución de mercancía en las diferentes unidades de carga.',
    ETA: 'Dicho termino hace referencia al Tiempo Estimado de Llegada(Estimated Time of Arrival).En el ámbito del transporte y la logística, este tiempo es la hora prevista de llegada de un determinado medio de transporte en las condiciones actuales.',
    ETD: 'El presente termino indica una fecha estimada de Salida(Estimated Time of Departure).',
    FCL: 'Este termino hace referencia a un “Full Container Load” es decir, en un contenedor completo se transporta la mercancía dentro de un contenedor de un único expedidor sin compartir espacio con otras cargas.',
    ['Free In']: 'El termino indica que el proveedor es responsable del coste de carga de las mercancías en buque.',
    ['Free in and out(F.I.O)']: 'Es un termino de contrato de transporte marítimo que indica que El transportista NO es responsable del costo de carga ni del costo de descarga de mercancías en / desde el buque.',
    ['Free in Out and Stowed(F.I.O.S)']: 'Es un termino de contrato de transporte marítimo, donde indica que la tarifa de flete cubre únicamente el transporte propiamente dicho.Ni la carga, descarga o estiba de las LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN mercancías a bordo del buque están incluidas en el precio del flete.',
    ['Free in, Out, Stowed and Trimmed']: 'Este término indica que el remitente es responsable de la carga, estiba y recorte de la carga, el propietario del buque del transporte y el consignatario de la descarga.',
    ['Free in / liner Out (F.I.L.O)']: 'Dicho termino, se refiere a la tarifa de flete excluyendo la tarifa de carga.Esto significa que el costo de cargar mercancías a bordo de un buque no se incluirá en el costo de envío.',
    ['Free Out']: 'El termino indica que el consignatario(destinatario) es responsable del costo de descargar la carga del buque en el destino. ',
    ['FREIGHT ALL KIND(FAK)']: 'El termino FAK es un acrónimo utilizado en la industria del transporte marítimo para Freight All Kinds.Es decir son tarifas aplicables a todo tipo de mercancía y no restringidas a ninguna mercancía en particular.Investigaremos exactamente qué es un FAK, cómo se determina y cómo puede ayudar con las tarifas de envío.',
    FTL: 'El termino FTL se refiere a la carga de un camión completo o como lo dice su abreviación en ingles “Full Truckload”.',
    GRILLETE: 'Un grillete es un Arco de hierro semicircular, con sus extremos unidos por un perno, para asegurar una cadena al pie de un presidiario, a un punto de una embarcación, etc.',
    HAZMAT: 'El termino HAZMAT(Hazardous Material, por sus siglas en inglés) hace referencia a toda sustancia sólida, líquida o gaseosa que por sus características físicas, químicas o biológicas puede ocasionar daños a los humanos, al medio ambiente y a los bienes.',
    ['HOOK TO HOOK(Gancho a Gancho)']: 'Es un término de contrato de flete marítimo que Incluye cargue y descargue solo desde y hasta costado del barco o hasta donde llega los ganchos del barco para cargar y descargar.',
    ['House Bill of Lading']: 'Esta figura sucede cuando el transitario o agente a quien se le consignó el Master BL, emite un segundo BL, en este caso LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN el House Bill of Lading.',
    ['HS CODE']: 'El Código HS es una nomenclatura internacional para la clasificación de productos de importación y exportación, con un método numérico estandarizado, que permite a los países clasificar las mercancías comercializadas sobre una base común a efectos aduaneros.',
    IATA: 'La Asociación de Transporte Aéreo Internacional(IATA, por sus siglas en inglés) es la asociación profesional de las aerolíneas del mundo, que representa a alrededor de 260 compañías aéreas o el 83% del total del tráfico aéreo ',
    IGLOO: 'Un Igloo es un contenedor de medida variable y adaptable al fuselaje de los aviones.',
    IMO: 'Las siglas IMO hacen referencia a la Organización Marítima Internacional(International Maritime Organization) y comprenden todos aquellos productos o mercancías que, debido a sus características particulares, necesitan un traslado especial para evitar poner en riesgo la salud y/ o seguridad de las personas.',
    IMPORTACION: 'La importación es el transporte legal de bienes y servicios nacionales exportados por un país, para el uso o consumo interno de otro país.',
    INCOTERM: 'Son términos de comercio internacional que representan el acuerdo entre empresas para la compraventa internacional y modo de entrega de mercancías.',
    ISPS: 'El termino ISPS hace referencia a el código de seguridad de las instalaciones portuarias y buques internacionales.',
    IV: 'La factura comercial o tambien llamada “Invoice” Es un documento legal emitido por el vendedor(exportador) al comprador(importador) durante la transacción internacional y funciona como una prueba de la venta entre comprador y vendedor.',
    ['LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN KG VOLUMEN']: 'Este término hace referencia a el peso efectivo que ocupa una carga es decir se basa en un factor de conversión para identificar si realmente la carga en su transporte en distintas modalidades será cobrada por el peso que tiene o por el espacio en volumen que llegara a ocupar.',
    LCL: '“ Less than Container Load”, también conocida como ‘contenedor compartido’, es un tipo de envío en el que la carga se transporta dentro de un contenedor en conjunto con las cargas de otros expedidores',
    ['Liner in / free Out (L.I.F.O)']: 'El presente es un término de envío internacional en flete marítimo que indica que el consignatario (destinatario) es responsable del costo de descarga de la carga del buque en el destino. ',
    ['Liner term']: 'Mejor descrito como “En términos de línea” o “de muelle” esto quiere decir que las operaciones de carga, estiba, desestiba, descarga están cotizadas dentro del flete. ',
    ['LOADED ON BOARD']: 'Este termino indica que la mercancía ha sido cargada a bordo.',
    LTL: 'Este termino se refiere a algún tipo de carga que no llena un camion completo “Less than Truckload”',
    MANGA: 'Este termino hace referencia a la anchura del barco.',
    ['Master Bill of Lading']: 'El MBL, conocido también como Ocean o Carrier Bill of Lading, es un documento que emite la naviera hacia el NVOCC(Non Vessel Operating Common Carrier) o encargado de la consolidación de las mercancías y de la gestión de la documentación.',
    ['MIC / DTA']: 'Es el Manifiesto Internacional de Carga',
    MSDS: 'Una hoja de seguridad describe los peligros de una sustancia o producto químico y suministra información sobre su identificación, uso, manipulación, transporte, almacenamiento, disposición final, protección personal y manejo de emergencias por derrames, explosión e incendios.',
    ['LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN MUELLAJE']: 'Son las tasas pagadas por usar un muelle o servicios de muelle(Derechos de muelle).',
    ['O / F']: 'Este termino hace referencia al Ocean Freight / Flete Maritimo.',
    OVERSIZE: 'Las cargas oversize o sobredimensionadas son aquellas fuera de los padrones normales de tamaño y peso que necesitan un transporte especial con una planificación estratégica y específica.',
    OVERWEIGHT: 'El termino Overweight se refiere a la carga que con sobrepeso.',
    ['PESO BRUTO']: 'Este termino hace referencia a el peso del producto(neto) incluyendo el peso del contenedor o empaque(tara).',
    ['PESO CARGABLE']: 'Este termino hace referencia a el peso que se utilizara para el cobro del flete de transporte ya sea aéreo como marítimo.Este peso tiene una relación directa entre el peso de la mercancía en su totalidad y el volumen que ocupa en el medio de transporte, ya sea marítimo, aéreo o terrestre.',
    ['PESO NETO']: 'El peso neto, es el peso del Producto sin incluir el peso del contenedor o empaque.',
    ['PESO TARA']: 'El peso Tara, es el peso del contenedor ó empaque sin incluir el peso del producto(neto).',
    PIS: 'Este termino hace referencia a un Puerto Inteligente Seguro.',
    PL: 'El Packing List o Lista de Empaque permite identificar la mercancia y todos sus elementos(forma de embalaje, cantidades, pesos, marcas, medidas, series, partes, etc.)',
    ['PLATAFORMA MODULAR']: 'Son semirremolques y remolques que se utilizan en el caso de cargas muy pesadas y / o voluminosas, que cuentan con ejes direccionales y suspensión neumática.',
    POD: 'Puerto de destino',
    ['LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN POL']: 'Puerto de Carga',
    PRESINTO: 'Se está haciendo referencia a un dispositivo que habitualmente se suele colocar en la zona posterior del contenedor.Este dispositivo indica que la mercancía no se puede manipular y que el contenido debe llegar intacto al destino.',
    PUNTAL: 'Es la altura del buque o distancia vertical en metros medido desde la cara inferior del casco, en su intersección con la quilla, y la línea de cubierta principal o la cara superior del trancanil.',
    ['ROLL ON ROLL OF']: 'Es así como se denomina a los buques de carga y descarga, un tipo de barcos que se utilizan para transportar carga mediante un sistema de ruedas que ayudan a subirla a bordo y descargarla, una vez en puerto',
    SHIPPER: 'El shipper, también llamado expedidor o cargador en español, es la figura que realiza el envío de la mercancía.',
    SLAC: 'Significa que el envío está dividido, se debe registrar la carga y el conteo del remitente(SLAC, siglas en inglés)',
    ["SLI(SHIPPER'S LETTER OF INSTRUCTIONS)"]: 'Es una carta de instruccion del remitente que el exportador ',
    SOC: 'La abreviatura SOC consta de las iniciales de Contenedores de propiedad del remitente, que significa contenedor que pertenece al cargador. ',
    SWIFT: 'El código SWIFT es una serie alfanumérica de 8 u 11 dígitos que sirve para identificar al banco receptor cuando se realiza una transferencia internaciona ',
    ['T/ T']: 'representa el periodo de tiempo que transcurre entre la carga en origen y descarga en destino de los productos vinculados a una operación de transporte ',
    ['TELEX RELEASE']: 'Se trata de un documento que recibe el destinatario final por parte del transportista que se encargó de la logística y entrega del LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN producto. Puede ser un simple mensaje adjunto a un e-mail.',
    TEUS: 'Estas siglas representan la unidad de medida de capacidad del transporte marítimo referida en contenedores de carga. Dicho de otra manera, una TEU es la capacidad de carga que tiene un contenedor. ',
    THC: 'Terminal Handling Charges (Gastos por manipulación en la terminal) es un recargo aplicado por las compañías de transporte marítimo que aplican condiciones de línea regular, según las que el armador es responsable de la carga y de la descarga del buque.',
    ['TRANSPORTE MULTIMODAL']: 'Transporte Multimodal el traslado de mercancías desde su procedencia hasta su destino utilizando para ello más de un medio de transporte (terrestre, marítimo, fluvial, aéreo) a nivel internacional con contratos de transportes distintos según cada caso.',
    ['USO DE MUELLE']: 'Es un Documento que indica que la mercancía ha llegado a la terminal de la línea marítima –o a otro lugar en un puerto– en una fecha determinada. ',
    VGM: 'El termino VGM es la masa de la carga bruta certificada (que incluye el peso de todo el material de embalaje) más de la masa tarada del contenedor ',
    VOLUMEN: 'El volumen representa la amplitud de la materia en tres dimensiones: alto, ancho y largo. Toda materia ocupa un espacio que puede variar dependiendo de su tamaño, la medida de dicho espacio es el volumen. ',
    ['W / M Peso / medida']: 'Es un Término logístico utilizado para poder cotizar la transportación internacional de las mercancías, también conocida como tonelada métrica. ',
    ZARPE: 'Alejamiento y desamarre de cabos o cables de una embarcación, del muelle donde estaba anclado. ',
    ['ZONA PRIMARIA']: 'La Zona Primaria comprende todos los recintos LOGISTICA INTEGRAL LOGISTIC TEGRAL LOGI IC IN aduaneros en espacios acuáticos o terrestres destinados a las operaciones de desembarque, embarque, movilización o depósito de las mercancías, las oficinas, locales o dependencias destinadas al servicio directo de la Aduana Nacional, puertos, aeropuertos, caminos y predios autorizados para que se realicen operaciones aduaneras.',
    ZUNCHOS: 'Fleje metálico o plástico utilizado para el aseguramiento de carga, especialmente en pallets.',
}












export { services, glosario }