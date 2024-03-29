var MA3D = {
	
	VERSION:"0.0.5",
	
	//used to create different Ids for different instances of singleObjectViewer and sceneViewer
	instanceCounter:0,
	
	accordionItemCounter:0,
	
	idCounter:0	
};
/**
 * Translates Attribute Table Field names into english or spanisch 
 */

MA3D.IdaifieldTranslator = {
	map : {"Kommentar":{"english":"Transcription, Transliteration Translation done by ","spanish":"Transcripción, transliteración traducido por"},"Foto_Areal::Teilprojekt":{"english":null,"spanish":null},"Glas::Erhaltung_Zustand":{"english":"Preservation - Lithics / Obsidian","spanish":null},"KurzbeschreibungBefund":{"english":"Brief Description","spanish":"Breve Descripción"},"funktionale Verwendung":{"english":"Function","spanish":null},"Groesze_Dm_Henkel":{"english":"Dia. Handle","spanish":null},"Boden_Moertelzuschlag":{"english":"Mortar Additives","spanish":null},"Foto_Relief::Teilprojekt":{"english":null,"spanish":null},"XSteindenkmalBauwerkRaumX::Zugehoerigkeit":{"english":"Association of associated structure","spanish":"Asociación de la estructura asociada"},"Mollusken::Klassifizierung_Allgemein":{"english":"Animal Type - Shells","spanish":null},"Foto_Ausgrabung::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"FS_MünzeID":{"english":"Foreign Key Coin","spanish":"Clave externa para monedas"},"Keramik::Anzahl_Henkel":{"english":"No. of Handle Sherds","spanish":null},"Verputz: Feinputz Stärke":{"english":"Thickness Fine Stucco","spanish":null},"FS_ToposID":{"english":"Foreign key for Site Table","spanish":"Clave externa para tabla de sitio"},"Oberfläche_Merkmale_außen":{"english":"Surface Characteristics - Outside","spanish":null},"Metall::Klassifizierung_ObjektartSpeziell":{"english":"Classification - Metal","spanish":null},"Datum Abtragung":{"english":null,"spanish":null},"Bauwerk::Auto_Doku_3DModell_vorhanden":{"english":"Existing 3D Models?","spanish":null},"Survey_Keramik::PS_SurveyID":{"english":null,"spanish":null},"Lage_Fundhoehe_Bezug":{"english":"Elevation reference point","spanish":"Punto de referencia de altitud"},"Zeichnung_Topos::Projekt":{"english":"Project","spanish":"Proyecto"},"Erhaltung_GlyphBlockNr":{"english":"GlyphBlockNr.","spanish":"Número de bloque glifo "},"Reliefszene::FS_ReliefszeneID":{"english":"Foreign key of iconography","spanish":"Clave externa para iconografía"},"Fundkollektion::Anzahl_GrobeWare_Profil":{"english":"No. of Coarse Ware Profile","spanish":null},"Zeichnung_Steinobjekt::KurzbeschreibungZeichnung":{"english":"Brief description of drawing","spanish":"Descripción breve del dibujo"},"HistorischesFoto":{"english":"Historic Image","spanish":"Imagen Histórico"},"FS_SurveyID":{"english":"Foreign key for Group Table","spanish":"Clave externa para tabla de grupo"},"Projekt 2::PS_ProjektID":{"english":null,"spanish":null},"Grab_Klassifizierung":{"english":"Classification - Grave","spanish":null},"Fundkollektion::temp_sonstige_wand":{"english":null,"spanish":null},"Foto_Ausgrabung::Projekt":{"english":"Project","spanish":"Proyecto"},"Dekoration::Technik_Allgemein":{"english":"Decoration Style","spanish":null},"Fundkollektion::temp_grob_wand":{"english":null,"spanish":null},"Maya_Treppe_Ort":{"english":"Location","spanish":"Ubicación"},"TonBestandteile_Keramik::Haerte":{"english":"Hardness - Temper Components","spanish":null},"Topos::Ort_KreisRegion":{"english":null,"spanish":null},"Boden Erhaltung":{"english":"Preservation - Floor","spanish":null},"Befund 2::KurzbeschreibungBefund":{"english":"Brief Description - Assoc. Feature","spanish":null},"Art":{"english":"Type of Iconography (Theme or Motif)","spanish":"Tipo de Iconografía (Temas o motivos)"},"NumberOnly":{"english":null,"spanish":null},"Tagebuch_Ausgrabung::Auto_Kennung":{"english":null,"spanish":null},"Datierung_Inschrift::AnfDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Modell3D::Modell_Beschreibung":{"english":"3D model description","spanish":"Descripción del modelo 3D"},"Provenienz":{"english":"Provenience","spanish":null},"Zeichnung_Ausgrabung::Zeichner":{"english":"Illustrator","spanish":"Ilustrador"},"Bauglied::Motive_Figürlich":{"english":"Figure motif","spanish":"Motivos figurativos"},"Foto::Projekt_Nr":{"english":null,"spanish":null},"[Doku_Mauern_Anzahl]":{"english":"Number of Features","spanish":null},"Wand::Mauer Konstruktionsdetails Beschreibung":{"english":"Description of Details","spanish":null},"Bauwerk_Topos::Bautyp":{"english":"Type","spanish":"Tipo"},"Maya_Decke_Bemerkung":{"english":"Comment","spanish":"Comentarios"},"Fundkollektion::Anzahl_Keramik_Gesamtprofil":{"english":"No. of Entire Profile Sherds","spanish":null},"DAI_KF11_Beschreibung":{"english":"KF 11: Description","spanish":"KF 11: Descripción"},"OberFlaeche":{"english":"Total surface area (m²)","spanish":"Superficie total (m²)"},"Zeichnung_Areal::Zeichungsdatum":{"english":"Year","spanish":"Año"},"Einzelmotiv::Verzierungstechnik":{"english":"Individual Subject Technique","spanish":null},"Lage_Areal":{"english":"Area (m2)","spanish":null},"Fundkisten":{"english":"Boxes of Finds","spanish":null},"Befund::Befundart":{"english":"Type of Feature","spanish":null},"Foto_Ausgrabung::Projekt_Nr":{"english":null,"spanish":null},"Maya_Versteck":{"english":"Content","spanish":"Contenido"},"Masze_DurchmesserGesamt":{"english":"Maximum diameter (cm)","spanish":"Diámetro máximo (cm)"},"SurfaceAreaPercentIconography":{"english":"Iconography area (%)","spanish":"Superficie de la iconografía (%)"},"Topos::Ort_Ortsteil":{"english":null,"spanish":null},"Bauwerk::Auto_Doku_Foto_vorhanden":{"english":"Existing Photos?","spanish":"Hay Fotos?"},"KeramikScherbe::InvNr.":{"english":"Inv. No. - Individual Sherds","spanish":null},"Ton_Struktur":{"english":"Fracture Appear.","spanish":null},"SonstigerFund::Klassifizierung_Fundgattung":{"english":"Category - Other Finds","spanish":null},"Ziegel::KurzbeschreibungZiegel":{"english":"Brief Description - Adobe","spanish":null},"Ausgrabung::Auto_AusgrabungKennung":{"english":null,"spanish":null},"Aufbewahrung_Fotoabzuege_Zusatz":{"english":"Location (e.g. Box No.)","spanish":"Ubicación (p. ej. Número de Caja)"},"Projekt 2::Akteur_Director":{"english":"Project Director","spanish":"Dirección"},"Bauwerk 2::StoryLevel":{"english":"Story/Level","spanish":"Planta / Nivel"},"TonBestandteile_Keramik::Bruch":{"english":"Fractue - Temper Components","spanish":null},"Befund_Grab::KurzbeschreibungBefund":{"english":"Burial Elements - Brief Description","spanish":null},"XReliefszene_SteinObjektX 2::FS_ReliefszeneID":{"english":"Foreign key of iconography","spanish":"Clave externa para iconografía"},"[Straszen_Anzahl]":{"english":"Number of Plazas","spanish":null},"ModerneEingriffe":{"english":"Modern Disturbances","spanish":null},"Datierung::AnfDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Bodega":{"english":"Bodega","spanish":"Bodega"},"Wand::Hoehe":{"english":"Height","spanish":null},"Koordinate_Keramik::X_Wert":{"english":"Northing / X","spanish":"Norte / X"},"Bauwerk_Topos::PS_BauwerkID":{"english":"Serial Number","spanish":"Número de Serie"},"Reliefszene_ThemeMotif::MotivTypeSpez":{"english":"Related Motifs - Specific Motif","spanish":"Motivos relacionados - Motivo específico"},"Boden_Moertelzuschlaganteil":{"english":"Mortar Additives Proportion ","spanish":null},"Flaeche":{"english":"Area","spanish":null},"AnfCopanRuler":{"english":"Copan Ruler (Begin)","spanish":"Gobernante de Cópan (Inicio)"},"Datei_Original_Datum":{"english":"Date Scanned","spanish":"Fecha de escanear"},"Fundmaterial_gefunden_topos":{"english":"Finds","spanish":"Hallazgos"},"Koordinate::GeoDatum_Northing":{"english":"Latitude / N","spanish":"Latitud / N"},"SubSupMain":{"english":"Designation","spanish":"Denominación"},"Masze_Laenge_Plattform":{"english":"Length Platform","spanish":"Longitud de la Plataforma"},"Erhaltung_restauriert":{"english":"Restaurated - Conservation Vessel ","spanish":null},"FS_LampenID":{"english":"Foreign Key Lamps","spanish":"Clave externa para lámparas "},"KurzbeschreibungGrab":{"english":"Brief Description","spanish":"Breve Descripción"},"Bauwerk 2::PS_BauwerkID":{"english":"Structure ID","spanish":"Estructura ID"},"Bildgegenstand":{"english":"Type of Object","spanish":"Tipo de objeto"},"[Ueberschrift]":{"english":null,"spanish":null},"Stoerung":{"english":"Situtation","spanish":null},"ReliefszeneSelfRef::MotivTypeGeneral":{"english":"General Motif","spanish":"Motivo general"},"Aufbewahrung_Ort":{"english":"Place - Storage Location","spanish":null},"DS_Eigentuemer":{"english":"Record created by","spanish":"Registro creado de"},"ReliefszeneSelfRef::PS_ReliefszeneID":{"english":"Serial ID","spanish":"Serie ID"},"Befund_Bauwerk::Befundart":{"english":"Type of Feature","spanish":"Tipo de Pared"},"Datei_Original_Ersteller":{"english":"Scanned By","spanish":"Escaneada por"},"Sonstiges_natuerlich_kuenstlich":{"english":"Formation - Other","spanish":null},"Mauer Bautechnik_Bezeichnung_deu":{"english":"Masonry Type","spanish":null},"Temp_PhotoArtist":{"english":"Photographer (temporary field)","spanish":"Fotógrafo"},"Grab_AlterBeschreibung":{"english":"Skeleton Age based on","spanish":null},"Koordinate_Keramik::Koordinatensystem_Zone":{"english":"UTM Zone","spanish":"Zona UTM"},"Mauer Krone":{"english":"Wall Crowning","spanish":null},"Einzelmotiv::Beschreibung":{"english":"Individual Subject Description","spanish":null},"Baumaterialien_Bemerkungen":{"english":"Comments - Material","spanish":"Comentarios - Material"},"DesktopPath":{"english":"Desktop Path","spanish":"Red escritorio"},"Geschichte":{"english":"Structure History","spanish":"Historia de la estructura"},"Bestattungsritus":{"english":"Burial Rites","spanish":null},"Literaturzitat::PS_LiteraturzitatID":{"english":"ID Text Reference","spanish":null},"Fundmenge":{"english":"Total Quantity of Finds","spanish":null},"Keramik::Grobdatierung":{"english":"Approx. Dating","spanish":null},"Foto_Topos::Projekt":{"english":"Project","spanish":"Proyecto"},"Befund::KurzbeschreibungBefund":{"english":"Brief Description Feature","spanish":null},"FS_ZiegelID":{"english":"Foreign Key Adobe","spanish":"Clave externa para adobe"},"Dekoration::Position_Bauwerk":{"english":"Decoration Position","spanish":"Posición de decoración"},"DAI_KF10_Kategorie":{"english":"KF10: Category","spanish":"KF10: Categoría"},"FormalBeschreibung":{"english":"Formal Description","spanish":"Descripción formal"},"AnfPraezise_Schwankung":{"english":"Starting Year (+/-) ","spanish":"Año de inicio (+/-) "},"Koordinate::Genauigkeit":{"english":"Accuracy of Coordinate","spanish":"Precisión de Coordenadas"},"Bestattungsart":{"english":"Type of Burial","spanish":null},"Bauwerk_Inschrift::KurzbeschreibungInschrift":{"english":"Brief Description - Inscription","spanish":"Descripción breve - Inscripción"},"Dekoration_Inschrift::KurzbeschreibungDekoration":{"english":"Brief Description Decoration","spanish":"Descripción breve de decoración"},"Befund_Steinobjekt::Befundart":{"english":"Lot/ feature type","spanish":"Tipo de Rasgos/Paredes "},"Index_FotoKennung":{"english":null,"spanish":null},"FS_TerrakottaID":{"english":"Foreign Key Terracotta","spanish":"Clave externa para terracota"},"Datum Freilegung":{"english":null,"spanish":null},"[Befunde_Anzahl]":{"english":"Number of Lots / Features","spanish":"Número de Rasgos / Paredes"},"Modell3D::Modell3D_Datum":{"english":"3D model date","spanish":"Fecha del modelo 3D"},"Bauwerk_Reliefszene::PS_BauwerkID":{"english":null,"spanish":null},"Literaturzitat::Primär_Sekundär_Literatur":{"english":null,"spanish":null},"Auto_BefundKennung":{"english":null,"spanish":null},"[Doku_3DModel_Anzahl]":{"english":"Number of 3D Models","spanish":"Número de Modelos 3D"},"Knochen::Erhaltung":{"english":"Preservation - Bones","spanish":null},"Anzahl_Scherben_insgesamt":{"english":"Total Number of Sherds","spanish":null},"Wand::Mauer Konstruktionsdetails":{"english":"Details of Construction","spanish":null},"Bauglied::Beschreibung_Vorderseite":{"english":"Front","spanish":"Parte delantera"},"Datierung_Keramik::EndEpoche":{"english":"Period End","spanish":"Época Fin"},"Text_Uebersetzung":{"english":"Translation","spanish":"Traducción"},"Planquadrat_hoch":{"english":"Map Quadrant","spanish":null},"XSteindenkmalBauwerkRaumX::Verwendung":{"english":"Associated structure function","spanish":"Función de la estructura asociada"},"[Projekt_Anzahl]":{"english":"Number of Projects","spanish":"Número de Proyectos"},"XReliefszene_SteinObjektX::[SteinObjektCPN]":{"english":"CPN Related Stone Object","spanish":"CPN de Objeto de Piedra relacionado"},"Grab_TotenhaltungI":{"english":"Skeleton Position I","spanish":null},"Befund::Niveau Untergrenze":{"english":"Lower Level","spanish":"Nivel Bajo"},"Zeichnung_Keramik::Projekt":{"english":"Project - Drawing","spanish":null},"Bauglied::BautechnischeDetails":{"english":"Construction details","spanish":"Detalles de construcción"},"Datierung_Keramik::AnfCopanRuler":{"english":"Copan Ruler (Begin)","spanish":"Gobernante Copán Inicio"},"Verputz: 2. Unterputz Stärke":{"english":"Thickness 2nd Underlayer of Stucco","spanish":null},"Datierung::EndDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"KeramikScherbe::Anzahl":{"english":"Number - Individual Sherds","spanish":null},"Steinobjekt_Zuweisung::KurzbeschreibungSteinobjekt":{"english":"Brief Description - Stone Object (All.)","spanish":null},"Hoehe_tiefsterPunkt":{"english":"Lowest point above Sea Level","spanish":"Punto más bajo sobre nivel del mar"},"aufgenommen_von":{"english":"Site Registered by","spanish":null},"Mauer Baumaterial_Charakteristika":{"english":"Characteristics","spanish":null},"Koordinate::Koordinatensystem_Zone":{"english":"UTM Zone","spanish":"Zona UTM"},"Boden_innenaußen":{"english":"Inside or Outside?","spanish":null},"FS_WerkzeichenID":{"english":"Foreign Key Workshop mark","spanish":"Clave externa para marca de taller"},"Lage_West":{"english":"West","spanish":"Oeste"},"Datierung_Inschrift::EndPhase":{"english":"Ceramic Phase End","spanish":"Fase Cerámica Fin"},"DAI_KF06_Verantwortlichkeit":{"english":"KF06: Responsibility","spanish":"KF06: Responsabilidad"},"Siegel::Material":{"english":"Material - Seals","spanish":null},"Bestandteile_Schicht::Material":{"english":"Material","spanish":null},"DAI_KF01_Titel":{"english":"KF01: Titel","spanish":"KF01: Título"},"Herkunft_Altfunde_GrabungZusatz":{"english":null,"spanish":null},"Fundkollektion::Gewicht_Keramik_Gesamtprofil":{"english":"Weight of Entire Profile Sherds","spanish":null},"Lage_Fundhoehe_absolut":{"english":"Absolute elevation of find (MAS)","spanish":"Altitud absoluta del hallazgo (MSNM)"},"Datierung_Inschrift::AnfMayaLongCountDat_1":{"english":"Longcount Date Start - Baktuns","spanish":"Cuenta Larga Inicio - Baktuns"},"Datierung_Inschrift::AnfMayaLongCountDat_5":{"english":"Longcount Date Start - Kins","spanish":"Cuenta Larga Inicio - Kins"},"Datierung_Inschrift::AnfMayaLongCountDat_4":{"english":"Longcount Date Start - Winals","spanish":"Cuenta Larga Inicio - Winals"},"SurfaceAreaText":{"english":"Text area (m²)","spanish":"Superficie de texto (m²)"},"Datierung_Inschrift::AnfMayaLongCountDat_3":{"english":"Longcount Date Start - Tuns","spanish":"Cuenta Larga Inicio - Tuns"},"Datierung_Inschrift::AnfMayaLongCountDat_2":{"english":"Longcount Date Start - Katuns","spanish":"Cuenta Larga Inicio - Katuns"},"Bestandteile_Sonstige::Groesze_Max":{"english":"max. size (cm)","spanish":null},"Seriennummer::Security_Access":{"english":"Geobrowser Access Level","spanish":"Nivel de acceso de Geobrowser"},"Datierung_Grab::EndEpoche":{"english":"Period End","spanish":null},"Foto_Steinobjekt::Teilprojekt":{"english":"Photo subproject","spanish":"Foto de Subproyecto"},"Datierung_Inschrift::AnfPhase":{"english":"Ceramic Phase Start","spanish":"Fase Cerámica Inicio"},"Verputz: 1. Unterputz Farbe":{"english":"Color 1st Underlayer of Stucco","spanish":null},"Fundkollektion::Aufbewahrungsort":{"english":"Curation Site","spanish":null},"Fundkollektion::Anzahl_Keramik_Boden":{"english":"No. of Base Sherds","spanish":null},"Arbeitsnotiz":{"english":"Work notes","spanish":"Notas de trabajo"},"Bauwerk 2::SubSupMain":{"english":"Type of Associated Structure","spanish":"Tipo de estructura asociada"},"Foto::Teilprojekt":{"english":null,"spanish":null},"Dekoration_Art":{"english":"Decoration Type - Surface Coat","spanish":null},"KeramikScherbe::Nummer":{"english":"Individual Sherd No.","spanish":null},"Schicht besondere Beobachtungen":{"english":"Other Observations","spanish":null},"Probe::Grund_fuer_Probe":{"english":"Reason for Sample","spanish":null},"Oberfläche_Überzug":{"english":"Coat","spanish":null},"Dekoration_Beschreibung":{"english":"Decoration Description - Surface Coat","spanish":null},"Zeichnung_Relief::KurzbeschreibungZeichnung":{"english":"Brief Description Drawing","spanish":"Descripción breve de dibujo"},"BohrlochSchicht_Keramik::Nummer_Schicht":{"english":"Layer No. - Drill Hole","spanish":null},"Areal 2::KurzbeschreibungAreal":{"english":"SubOp Name","spanish":"SubOp Denominación"},"Glas::PS_GlasID":{"english":"ID Lithics / Obsidian","spanish":null},"Typus_Nr":{"english":"Type No.","spanish":null},"KommentarDat":{"english":"Comments","spanish":"Comentarios"},"Schicht Erhaltung":{"english":"Preservation - Level","spanish":null},"Datierung_Relief::EndDatZeitraum":{"english":null,"spanish":null},"[Doku_Zeichnungen_Anzahl]":{"english":"Number of Drawings and Maps","spanish":"Número de Dibujos y Mapas"},"Survey_Steinobjekt::FundstelleNr":{"english":"Group /Sub-site number","spanish":"Número de Grupo"},"Auto_Doku_Fotos_vorhanden":{"english":"Existing Photos?","spanish":"Hay Fotos?"},"Wand::Verputz 1. Unterputz Zuschlag":{"english":"Additives 1st Underlayer of Stucco","spanish":null},"Zeichnung_Lampen::Zeichner":{"english":"Illustrator - Drawing","spanish":"Ilustrador"},"Literaturzitat_Relief::[Literaturzitat]":{"english":"Literature","spanish":"Literatura"},"Steinobjekt_Fundort::KurzbeschreibungSteinobjekt":{"english":"Brief Description - Stone Object","spanish":null},"[Survey_Anzahl]":{"english":"Number of Groups","spanish":"Número de Grupos"},"Bestandteile_Baubefund::Material":{"english":"Material","spanish":null},"Ziegel::PS_ZiegelID":{"english":"ID Adobe","spanish":null},"Foto::Fotodatum":{"english":"Year","spanish":"Año"},"Wand::Beschreibung Wandgestaltung":{"english":"Description","spanish":"Descripción"},"Koordinate_Steinobjekt::Z_Wert":{"english":"Meters above sea level/Z","spanish":"Metros sobre el nivel del mar/Z"},"Archive::Name":{"english":null,"spanish":null},"Dekoration::Position_MauerFußboden":{"english":"Position - Decoration","spanish":null},"Zeichnung_Ausgrabung::Zeichnung_Art":{"english":"Type","spanish":"Tipo"},"Areal::PS_ArealID":{"english":"Serial Number","spanish":"Número de Serie"},"PS_KeramikID":{"english":"ID Ceramic","spanish":null},"Ausdehnung":{"english":"Dimensions","spanish":"Extensión"},"Grab_Wert_Unterkante":{"english":"Niv. UK","spanish":null},"Boden Klassifizierung Sonstiges":{"english":"Other Classifications - Floor","spanish":null},"Literaturzitat_Inschrift::[Literaturzitat]":{"english":"Literature References","spanish":"Referencias bibliográficas"},"SonstigerFund::Anzahl_insgesamt":{"english":"Total Number of Other Finds ","spanish":null},"Knochen::PS_KnochenID":{"english":"ID Bones","spanish":null},"Koordinate_Keramik::GeoDatum_Easting":{"english":"Longitude / E","spanish":"Longitud / E"},"Zeichnung_Steinobjekt::Projekt":{"english":"Project of drawing ","spanish":"Proyecto de dibujo"},"Mauer Baumaterial_Bemerkung":{"english":"Comments on cumulative construction materials","spanish":null},"Steinobjekt::KurzbeschreibungSteinobjekt":{"english":"Brief Description Stone Artifact","spanish":"Breve descripción del artefacto de piedra "},"Masze_Durchmesser_Plattform":{"english":"Diameter Platform","spanish":"Diámetro de la Plataforma"},"Bauwerk_Inschrift::PS_InschriftID":{"english":"ID Inscription","spanish":"Inscripción ID"},"Koordinate_Steinobjekt::X_Wert":{"english":"Northing/X","spanish":"Norte/X"},"Putz::PutzTypus":{"english":"Stucco Type","spanish":null},"Fragestellung":{"english":"Research Question or Problem","spanish":"Pregunta de investigación o problema"},"Lampen::Anzahl_aufgehoben":{"english":"Total Number of Manos / Metates collected","spanish":null},"Topos_Ausgrabung::Ort_Provinz":{"english":"Department","spanish":"Departamento"},"Lampen::Nummer_Fund":{"english":"Find No. - Manos / Metates","spanish":null},"Lage_Abhub":{"english":"Level","spanish":"Nivel"},"Temp_Lot":{"english":"Lot","spanish":"Rasgo"},"Survey_Keramik::[Ort]":{"english":"Place Name - Survey","spanish":null},"Datierung_Relief::EndMayaLongCountDat_5":{"english":"Longcount Date End - Kins","spanish":"Cuenta Larga Fin - Kins"},"Schicht Konsistenz":{"english":"Consistency","spanish":null},"Geländebeschaffenheit":{"english":"Terrain","spanish":null},"Datierung_Relief::EndMayaLongCountDat_2":{"english":"Longcount Date End - Katuns","spanish":"Cuenta Larga Fin - Katuns"},"Datierung_Relief::EndMayaLongCountDat_1":{"english":"Longcount Date End - Baktuns","spanish":"Cuenta Larga Fin - Baktuns"},"Datierung_Relief::EndMayaLongCountDat_4":{"english":"Longcount Date End - Winals","spanish":"Cuenta Larga Fin - Winals"},"Datierung_Relief::EndMayaLongCountDat_3":{"english":"Longcount Date End - Tuns","spanish":"Cuenta Larga Fin - Tuns"},"EndDatJh":{"english":null,"spanish":null},"Grab_Bestattungsform":{"english":"Form of Burial","spanish":null},"Tagebuch_Areal::Auto_Kennung":{"english":"Journal Entries","spanish":"Entradas del diario"},"Zeichnung::Zeichner":{"english":"Illustrator","spanish":"Ilustrador"},"Strasze::KurzbeschreibungStrasze":{"english":"Brief Description - Street","spanish":"Breve descripción - Calle"},"Bestandteile_Fußboden::Material":{"english":"Material","spanish":null},"Datierung_Keramik::AnfPhase":{"english":"Ceramic Phase Start","spanish":"Fase Cerámica Inicio"},"Material":{"english":"Material","spanish":"Material"},"[Doku_Model3D_Anzahl]":{"english":"Number of 3D models","spanish":"Número de Modelos 3D"},"Magerung_Merkmal":{"english":"Characteristic - Temper","spanish":null},"Metall::Anzahl_insgesamt":{"english":"Total Number of Metal ","spanish":null},"SurfaceAreaUndecorated":{"english":"Undecorated area (m²)","spanish":"Superficie sin decor (m²)"},"Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"Schicht_natuerlich_kuenstlich":{"english":"Formation - Level","spanish":null},"Baubefund Klassifizierung":{"english":"Classification - Constr. Feature","spanish":null},"Metall::Nummer_Fund":{"english":"Find No. - Metal","spanish":null},"Groesze_Dm_Deckel":{"english":"Dia. Cap","spanish":null},"XReliefszene_SteinObjektX 2::[IconographyBeschreibung]":{"english":"Description of iconography","spanish":"Descripción de la iconografía"},"Bestandteile_Mauer::Anteil_Prozent":{"english":"Proportion (in %)","spanish":null},"Datierung_Relief::AnfCopanRuler":{"english":"Copan Ruler (Begin)","spanish":"Gobernante Copán (Inicio)"},"Bestandteile::Groesze_Max":{"english":"max. Size (cm)","spanish":"max. Tamaño (cm)"},"Foto_Inschrift::PS_FotoID":{"english":null,"spanish":null},"Foto_Areal::Auto_FotoKennung":{"english":null,"spanish":null},"SurveyNr":{"english":"Arealeration","spanish":null},"Datierung_Steinobjekt::EndEpoche":{"english":"Period (end date)","spanish":"Periodo (fecha final)"},"Oberfläche_Staerke_auszen":{"english":"Coat thickn. - Outside","spanish":null},"Fundkollektion::Anzahl_SonstigeWare_Profil":{"english":"No. of Other Ware Profile","spanish":null},"Datierung::AnfDatZeitraum":{"english":null,"spanish":null},"Erhaltung_GraphemeNr":{"english":"Grapheme No.","spanish":"Número de Grafema"},"Text_Edition":{"english":"Transliteration","spanish":"Transliteración"},"Foto_Steinobjekt::Aufbewahrung_Negative_InvNr":{"english":"Negative number","spanish":"Número de Negativo "},"Copan_SubCommunity":{"english":"Sub Community","spanish":null},"Mauer Mörtelzuschlag":{"english":"Mortar Additives","spanish":null},"Topos::PS_ToposID":{"english":"Primary key of archaeological sites","spanish":"Clave primaria de los sitios arqueológicos"},"Bauglied::BemerkungenDekor":{"english":"Decoration comments","spanish":"Comentarios acerca la decoración"},"Copan_PhysZone":{"english":"Physio. Zone","spanish":"Fotógrafo"},"Aufbewahrung_InvNr":{"english":"Inv. No. - Storage Location","spanish":null},"Groesze_Dm_Fusz":{"english":"Dia. Base","spanish":null},"FS_ReliefszeneID":{"english":"Foreign Key Iconography","spanish":"Clave externa para iconografía"},"DS_Bearbeitungsdatum":{"english":"DS Edited on","spanish":"Registro editado en"},"Koordinate_Areal::Genauigkeit":{"english":"Accuracy of Coordinate","spanish":"Precisión de Coordenadas"},"Grab_ArchaeologGeschlechtBeschreibung":{"english":"Skeleton Sex based on","spanish":null},"AnfEpoche":{"english":"Period","spanish":"Período"},"XSteindenkmalBauwerkRaumX::[Raum]":{"english":"Associated room","spanish":"Pieza asociada"},"Restaurierung":{"english":"Restoration","spanish":"Restauración"},"Foto_Keramik::Auto_FotoKennung":{"english":null,"spanish":null},"Maya_Treppe_Anzahl":{"english":"No. of Stairways","spanish":"Número de escaleras"},"Zeichnung_Areal::Nummer_Zeichnung":{"english":null,"spanish":null},"Material_Herkunft":{"english":"Origin of material","spanish":"Origen de material"},"Wand::AuszenInnenWand":{"english":"Interior or Exterior Wall?","spanish":null},"Aufbewahrung_Fotoabzuege":{"english":"Print","spanish":"Imprenta"},"PS_FotoID":{"english":null,"spanish":null},"Bauwerk_Grab::BauwerkNr":{"english":"Structure No.","spanish":"Número de Estructura"},"SonstigerFund::Klassifizierung_ObjektartSpeziell":{"english":"Object Specification - Other Finds","spanish":null},"Zeichnung_Ausgrabung::KurzbeschreibungZeichnung":{"english":"Brief Description - Drawings and Maps","spanish":null},"XSiteProjectX 2::FS_ProjektID":{"english":"Serial Number","spanish":"Número de Serie"},"Masze_TiefeGesamt":{"english":"Maximum depth (cm)","spanish":"Profundidad máxima (cm)"},"SurfaceAreaPercentUndecorated":{"english":"Undecorated area (%)","spanish":"Superficie sin decor (%)"},"Putz::Anzahl_insgesamt":{"english":"Total Number of Stucco ","spanish":null},"Datierung_Relief::AnfMayaLongCountDat_4":{"english":"Longcount Date Start - Winals","spanish":"Cuenta Larga Inicio - Winals"},"FS_GrabID":{"english":"Foreign Key Tomb","spanish":"Clave externa para tumbas "},"Datierung_Relief::AnfMayaLongCountDat_3":{"english":"Longcount Date Start - Tuns","spanish":"Cuenta Larga Inicio - Tuns"},"Bauglied::Gebaelk":{"english":"Entablature and roof","spanish":"Entablamento y techo"},"Datierung_Relief::AnfMayaLongCountDat_5":{"english":"Longcount Date Start - Kins","spanish":"Cuenta Larga Inicio - Kins"},"Datierung_Relief::AnfMayaLongCountDat_2":{"english":"Longcount Date Start - Katuns","spanish":"Cuenta Larga Inicio - Katuns"},"Datierung_Relief::AnfMayaLongCountDat_1":{"english":"Longcount Date Start - Baktuns","spanish":"Cuenta Larga Inicio - Baktuns"},"Zeichnung_Topos::Zeichungsdatum":{"english":"Year","spanish":"Año"},"DAI_KF09_Ortsbezeichnung2":{"english":"KF09: Location 2","spanish":"KF08: Ubicación 2"},"Maya_Stockwerk_Anzahl":{"english":"No. of Stories","spanish":"Número de pisos"},"XVergleichToposX::Kommentar":{"english":"Comment","spanish":"Comentario"},"DAI_KF13_AnalogDigital":{"english":"KF 13; Analog/Digital","spanish":"KF 13: Analógica / Digital"},"Mollusken::KurzbeschreibungMollusken":{"english":"Brief Description - Shells","spanish":null},"Bauglied::Motive_Pflanzlich":{"english":"Plant motif","spanish":"Motivo vegetal"},"MotivTypeSpez":{"english":"Motif Type Specific","spanish":"Tipo de motivo específico"},"Glas::Anzahl_aufgehoben":{"english":"Total Number of Lithics / Obsidian collected","spanish":null},"Boden Entstehung":{"english":"Formation - Floor","spanish":null},"Wand::Verputz 1. Unterputz Farbe":{"english":"Color 1st Underlayer of Stucco","spanish":null},"Koordinate::Uhrzeit":{"english":null,"spanish":null},"Karte":{"english":"Map","spanish":null},"Lage_Fundhoehe_relativ":{"english":"Relative Altitude","spanish":null},"EndPraezise":{"english":"Ending Year Praefix","spanish":"Año de finalización Praefix"},"Fundkollektion::Planquadrat_1":{"english":"Plan Quadrant(s)","spanish":null},"Fundkollektion::Planquadrat_2":{"english":"Plan Quadrant(s)","spanish":null},"Ausgrabung::Grabungsumfang":{"english":"Excavation Type","spanish":"Tipo de Excavación"},"AnfPhase":{"english":"Ceramic Phase","spanish":"Fase cerámica"},"Kontext":{"english":"Context","spanish":"Contexto"},"Datierung_Relief::AnfPhase":{"english":"Ceramic Phase Start","spanish":"Fase Cerámica Inicio"},"Projekt::PS_ProjektID":{"english":"Project primary key","spanish":"Clave primaria de la pieza"},"DAI_KF07_Veraenderbarkeit":{"english":"KF07: Editable","spanish":"KF07: Editable"},"Foto_Inschrift::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"FS_SonstigerFundID":{"english":"Foreign Key Other Finds","spanish":"Clave externa para otros hallazgos"},"Grab_Wert_Oberkante":{"english":"Niv. OK","spanish":null},"Reliefszene 2::Auto_Reliefnummer":{"english":"ID Iconography - Comparison","spanish":"Iconografía ID - Comparación"},"Arealgrenzen":{"english":"Boundaries of Area","spanish":"Delimitación de la zona"},"Datierung_Inschrift::AnfCopanRuler":{"english":"Copan Ruler (Begin)","spanish":"Gobernante Copán (Inicio)"},"Steinobjekt_Herkunft::Nummer_Katalog":{"english":"CPN Number","spanish":"Número CPN "},"Auto_Deko_vorhanden":{"english":"Decorations present?","spanish":null},"Zeichnung_Topos::Zeichner":{"english":"Illustrator","spanish":"Ilustrador"},"Zeichnung_Areal::Teilprojekt":{"english":null,"spanish":null},"DAI_KF02_Bildnummer":{"english":"KF02: Image Number","spanish":"KF02: Número de imagen"},"Zeichnung::Zeichungsdatum":{"english":"Year","spanish":"Año"},"Boden Spolienverwendung":{"english":"Spoils / re-used Material","spanish":null},"Baubefund Dekoration":{"english":"Decoration","spanish":null},"Steinobjekt 2::KurzbeschreibungSteinobjekt":{"english":"Brief description of related sculpture","spanish":"Descripción breve de la escultura relacionada"},"Foto::Vorlagenart":{"english":null,"spanish":null},"Herkunft_Altfunde_Grabung":{"english":null,"spanish":null},"Raum_Wand::Auto_RaumKennung":{"english":"Room","spanish":null},"Zeichnung_Keramik::Zeichnung_Art":{"english":"Type - Drawing","spanish":null},"Tagebuch":{"english":"Field journal","spanish":"Diario de campaña"},"Teilprojekt":{"english":null,"spanish":null},"Werkzeichen_Keramik::Nummer_Werkzeichen":{"english":null,"spanish":null},"Datum_FreilegungEnde":{"english":"to","spanish":null},"Grab_Bestattungsrites":{"english":"Burial Rites","spanish":null},"StoryLevel":{"english":"Story/Level","spanish":null},"FS_MetallID":{"english":"Foreign Key Metal","spanish":"Clave externa para metal"},"Keramik::Anzahl_Scherben_aufgehoben":{"english":"Total Number of Sherds Collected","spanish":null},"SonstigerFund::Anzahl_aufgehoben":{"english":"Total Number of Other Finds collected","spanish":null},"Foto_Relief::Auto_FotoKennung":{"english":null,"spanish":null},"Masze_Breite":{"english":"Width/ Thickness","spanish":null},"Datierung::Grundlage":{"english":"Based upon","spanish":"Basado en"},"FS_ProjektID":{"english":"Project","spanish":"Proyecto"},"Knochen::KurzbeschreibungKnochen":{"english":"Brief Description - Bones","spanish":null},"Befund_Steinobjekt::KurzbeschreibungBefund":{"english":"Lot/ feature description","spanish":"Descripción de Rasgos/Paredes "},"Antike_Quellen":{"english":"Ancient Sources","spanish":"Fuente Antigua"},"Befund_Grab::Auto_BefundKennung":{"english":"Burial Elements - Identifier","spanish":null},"aufgenommen_am":{"english":"Site Registered","spanish":null},"Bemerkung":{"english":"Comments","spanish":"Comentarios"},"Bestandteile::Material":{"english":"Material","spanish":"Material"},"Koordinate_Topos::X_Wert":{"english":"Northing / X","spanish":"Norte / X"},"ArealNr":{"english":null,"spanish":null},"Zeichnung_Topos::KurzbeschreibungZeichnung":{"english":"Brief Description","spanish":"Breve Descripción"},"Datierung_Relief::EndPraezise":{"english":"Precise Date End","spanish":"Fecha Precisa Fin"},"Ton_Farbe_Innen":{"english":"Inside Color","spanish":null},"Auto_Reliefnummer":{"english":null,"spanish":null},"KurzbeschreibungInschrift":{"english":"Brief Description","spanish":"Breve Descripción"},"Keramik::Anzahl_Gesamtprofil":{"english":"No. of Entire Profile Sherds","spanish":null},"Foto_Inschrift::Fotodatum":{"english":"Year","spanish":"Año"},"Bauwerk_Steinobjekt::PS_BauwerkID":{"english":"Structure ID","spanish":"Estructura ID"},"Koordinate::Z_Wert":{"english":"Z (masl)","spanish":"Z (msnm)"},"Auto_Doku_3DModell_vorhanden":{"english":"Existing 3D Models?","spanish":null},"Strasze::Straszentyp":{"english":"Type of Street","spanish":"Tipo de calle"},"Foto_Inschrift::Nummer_DigitalBild":{"english":null,"spanish":null},"Beschriftung Fotopappe":{"english":"Labeling  Photopaperboard","spanish":"Etiquetado de cartón de foto"},"SurfaceAreaPercentText":{"english":"Text area (%)","spanish":"Superficie de texto (%)"},"XSteindenkmalBauwerkRaumX::Bauphase":{"english":"Associated structure construction phase","spanish":"Fase de construcción de la estructura asociada"},"Projekt_Kurzbeschreibung":{"english":"Project Name","spanish":"Denominación"},"XReliefszene_SteinObjektX 2::[ReliefszeneTheme_Composition_Field]":{"english":"Iconography composition","spanish":"Composición de iconografía"},"Zugehoerigkeit":{"english":"Context","spanish":"Contexto"},"Datierung_Keramik::AnfDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Reliefszene_Reliefszene::KurzbeschreibungReliefszene":{"english":"Brief Description Related Theme","spanish":"Describción breve de Temas relacionados"},"Masze_Flaeche":{"english":"Dimensions (m2)","spanish":"Dimensiones (m2)"},"Probe::Klassifizierung":{"english":"Classification - Samples","spanish":null},"XSiteProjectX::FS_ToposID":{"english":"Serial ID","spanish":"Número de Serie"},"Auto_Ausgrabungen_vorhanden":{"english":"Previous Excavations?","spanish":"Excavaciones anteriores?"},"Verputz: Feinputz Anteil":{"english":"Proportion Fine Stucco","spanish":null},"Knochen::Klassifizierung_Allgemein":{"english":"Animal Type - Bones","spanish":null},"Klassifizierung_Allgemein":{"english":"Category","spanish":"Categoría"},"PS_BauwerkID":{"english":null,"spanish":null},"FS_ProfilSchichtID":{"english":"Foreign Key Profile Layer","spanish":"Clave externa para capas de perfil "},"Survey_Areal::FundstelleNr":{"english":"Group No. ","spanish":"Número de grupo"},"Siegel::Klassifizierung_Form":{"english":"Form - Seals","spanish":null},"Survey_Steinobjekt::Copan_SubCommunity":{"english":"Copan sub community","spanish":"Copán Subcomunidad"},"Survey::FundstelleNr":{"english":"Group No. ","spanish":null},"Datum_ArealEnde":{"english":"End","spanish":"Fin"},"Anzahl_Scherben_aufgehoben":{"english":"No. of Sherds Kept","spanish":null},"Foto_Steinobjekt::Projekt_Nr":{"english":"Project number","spanish":"Número de Proyecto"},"Institution":{"english":"Institution","spanish":"Institución"},"Ort_antik":{"english":"Place (ancient)","spanish":null},"PS_ToposID":{"english":"ID","spanish":"ID"},"FS_ArchivID":{"english":null,"spanish":null},"Descriptive_Summary":{"english":"Descriptive Summary","spanish":"Resumen descriptivo"},"Datei_Original_Format":{"english":"File Format","spanish":"Formato de Archivo"},"Klassifizierung_Topos":{"english":"Located in or contains","spanish":"Está ubicado en o contiene"},"PS_SurveyID":{"english":"ID Group / SubSite","spanish":null},"Zeichnung_Keramik::Zeichungsdatum":{"english":"Year","spanish":"Año"},"Planquadrat_Groß_2":{"english":"Grid","spanish":null},"Grabfund_Grabnr":{"english":"Burial No.","spanish":null},"Zeichnung::Teilprojekt":{"english":null,"spanish":null},"[Doku_Fotos_Anzahl]":{"english":"Number of Photos","spanish":"Número de Fotos"},"Planquadrat_Groß_1":{"english":"Grid","spanish":null},"Kulturkreis":{"english":"Cultural Affiliations","spanish":"Afiliación Cultural"},"Foto_Topos::Fotodatum":{"english":"Year","spanish":"Año"},"Masze_Gewicht":{"english":"Volume (m²)","spanish":"Volumen (m²)"},"Literaturzitat_Ausgrabung::[Literaturzitat]":{"english":"Text References","spanish":"Referencias de Texto"},"Einzelmotiv::Seite_Auszen_Innen":{"english":"Individual Subject Position","spanish":null},"Fundkollektion::Gewicht_Keramik_Sonstiges":{"english":"Weight of Other Sherds","spanish":null},"Interpretations":{"english":"Interpretations","spanish":null},"Probe::Auto_Untersuchung_durchgefuehrt":{"english":"Lab Analysis of Samples?","spanish":null},"Anzahl_Fu?":{"english":"No. of Base Sherds","spanish":null},"Anzahl_Scherben_anpassend":{"english":"No. of Sherds Fitting","spanish":null},"Mauer Mörtelfarbe":{"english":"Mortar Color","spanish":null},"Ort_Zusatz":{"english":"Areal.","spanish":null},"Nummer_Fund_Alternativ":{"english":"Alternative No. ","spanish":null},"Funktion_unsicher":{"english":"Function determinate?","spanish":"Función determinada?"},"Auto_FotoKennung":{"english":null,"spanish":null},"Sonstiges Entstehung":{"english":"Formation - Other","spanish":null},"Bestandteile_Sonstige::Groesze_Klasse":{"english":"Size Class","spanish":null},"Zeichnung_Inschrift::Zeichungsdatum":{"english":"Year","spanish":"Año"},"relevanteSeiteZwei":{"english":"Position on the Medium 2","spanish":"Posición en el objeto 2"},"Keramik::PS_KeramikID":{"english":"ID Ceramics","spanish":null},"Koordinate::GeoDatum_Easting":{"english":"Longitude / E","spanish":"Longitud / E"},"FS_GeophysikID":{"english":"Foreign Key Geophysics","spanish":"Clave externa geofísica"},"Technik":{"english":"Technique","spanish":"Técnica"},"DS_Aenderungsdatum":{"english":"Record last changed","spanish":"Última modificación"},"Groesze_Dm_Rand_innen":{"english":"int. Diameter","spanish":null},"XReliefszene_SteinObjektX::[SteinObjektKurzbeschreibung]":{"english":"Description Related Stone Object","spanish":"Descripción de Objeto de Piedra relacionado"},"TonBestandteile_Keramik::Farbe":{"english":"Color - Temper Components","spanish":null},"Datei_Original_Groesse":{"english":"Size","spanish":"Tamaño"},"Bauwerk::Auto_Doku_Mauern_vorhanden":{"english":"Existing Features \u0026 Walls?","spanish":null},"Fundmaterial_Menge":{"english":"Find amount","spanish":null},"Befund 2::PS_BefundID":{"english":"ID Assoc. Feature","spanish":null},"TerassenNr":{"english":"No. of Plazas","spanish":null},"Mauer Verfugung":{"english":"Joints","spanish":null},"TonBestandteile_Keramik::Menge":{"english":"Quantity - Temper Components","spanish":null},"Fundkollektion::temp_fein_profil":{"english":null,"spanish":null},"Planquadrat_rechts":{"english":"Map Quadrant","spanish":null},"Datierung_Steinobjekt::EndMayaLongCountDat_5":{"english":"Longcount Date End - Kins","spanish":"Cuenta Larga Fin - Kins"},"Datierung_Steinobjekt::EndMayaLongCountDat_4":{"english":"Longcount Date End - Winal","spanish":"Cuenta Larga Fin - Winals"},"KurzbeschreibungFoto":{"english":"Brief Description","spanish":"Breve descripción"},"Ton_Farbe_Kern":{"english":"Kernel Color","spanish":null},"Foto_Relief::Fotodatum":{"english":"Year","spanish":"Año"},"Ueberschrift":{"english":null,"spanish":null},"Koordinate_Areal::Z_Wert":{"english":"Z (masl)","spanish":"Z (msnm)"},"Survey_Ausgrabung::Copan_SubCommunity":{"english":"Sub Community","spanish":null},"Geschichte_Forschung_neu":{"english":"Current Research","spanish":"Investigación Actual"},"Foto_Keramik::KurzbeschreibungFoto":{"english":"Brief Description - Photo","spanish":null},"Knochen::Klassifizierung_Knochenart":{"english":"Bone Type - Bones","spanish":null},"Foto_Steinobjekt::Aufbewahrung_Negative_Zusatz":{"english":"Negative - additional","spanish":"Negativo -  adicional"},"Foto::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"Datierung_Steinobjekt::EndMayaLongCountDat_3":{"english":"Longcount Date End - Tun","spanish":"Cuenta Larga Fin - Tuns"},"Datierung_Steinobjekt::EndMayaLongCountDat_2":{"english":"Longcount Date End - Katuns","spanish":"Cuenta Larga Fin - Katuns"},"KeramikScherbe::Durchmesser":{"english":"Diameter - Individual Sherds","spanish":null},"Datierung_Steinobjekt::EndMayaLongCountDat_1":{"english":"Longcount Date End - Baktuns","spanish":"Cuenta Larga Fin - Baktuns"},"Fundkollektion::Anzahl_Keramik_Wand":{"english":"No. of Wall Sherds","spanish":null},"Datierung_Grab::AnfMayaLongCountDat_1":{"english":"Longcount Date Start - Baktuns","spanish":"Cuenta Larga Inicio - Baktuns"},"Datierung_Inschrift::Grundlage":{"english":"Based upon","spanish":"Basado en"},"Reliefszene 2::KurzbeschreibungReliefszene":{"english":"Brief Description Iconography - Comparison","spanish":"Describción breve de iconografía - Comparación"},"Schicht Entstehung":{"english":"Formation - Level","spanish":null},"Mollusken::Nummer_Fund":{"english":"Find No. - Shells","spanish":null},"Groesze_Hoehe":{"english":"Height","spanish":null},"Datierung_Grab::AnfMayaLongCountDat_5":{"english":"Longcount Date Start - Kins","spanish":"Cuenta Larga Inicio - Kins"},"Datierung_Grab::AnfMayaLongCountDat_4":{"english":"Longcount Date Start - Winals","spanish":"Cuenta Larga Inicio - Winals"},"Oberfläche_Überzug_innen":{"english":"Munsell No. Coat Color - Inside","spanish":null},"Datierung_Grab::AnfMayaLongCountDat_3":{"english":"Longcount Date Start - Tuns","spanish":"Cuenta Larga Inicio - Tuns"},"Datierung_Grab::AnfMayaLongCountDat_2":{"english":"Longcount Date Start - Katuns","spanish":"Cuenta Larga Inicio - Katuns"},"Einzelmotiv::MotivElement_Code":{"english":"Subject Code","spanish":null},"XSiteProjectX 2::[Projekt_Info]":{"english":"Project Name","spanish":"Nombre del Proyecto"},"Oberfläche_Zustand_innen":{"english":"Surface Condition - Inside","spanish":null},"Reliefszene_ThemeMotif::relevanteSeiteEins":{"english":"Related Motifs - Side","spanish":"Motivos relacionados - Lado"},"Provenienz_unsicher":{"english":"Provenience uncertain?","spanish":null},"Erschließung":{"english":null,"spanish":null},"Mollusken::Klassifizierung_Speziell":{"english":"Species - Shells","spanish":null},"Maya_Stadtviertel":{"english":"Urban Sector","spanish":"Sector Urbano"},"Keramik::Anzahl_Wand":{"english":"No. of Wall Sherds","spanish":null},"SonstigerFund::Nummer_Fund":{"english":"Find No. - Other Finds","spanish":null},"Survey_Ausgrabung::PS_SurveyID":{"english":null,"spanish":null},"Lage_Einmessung_Bezugspunkt1":{"english":"Refer. Point 1","spanish":null},"Lage_Einmessung_Bezugspunkt2":{"english":"Refer. Point 2","spanish":null},"Zeichnung::Auto_ZeichnungKennung":{"english":null,"spanish":null},"Bauwerk_Areal::BauwerkNr":{"english":"Structure No.","spanish":"Número de Estructura"},"Projekt::Projekt_Kennung":{"english":"Project Acronym","spanish":"Acrónimo de Proyecto"},"Magerung_Art":{"english":"Type - Temper","spanish":null},"Wand::Mauer Erhaltung Fugen":{"english":"Preservation of Joints","spanish":null},"Fundmaterial":{"english":"Classification - Material Type","spanish":null},"Fundmaterial_Objekte_m2":{"english":"Finds / m2","spanish":null},"Masze_Sonstiges":{"english":"Depth of relief","spanish":"Profundidad de relieve"},"Maya_Decke":{"english":"Roof Form","spanish":"Forma del techo"},"Grab_AnthropologGeschlecht":{"english":"Skeleton - Sex","spanish":null},"Raum_Befund::KurzbeschreibungRaum":{"english":"Room","spanish":null},"Literaturzitat_Keramik::[Literaturzitat]":{"english":"Text References","spanish":"Referencias de Texto"},"Wand::Steinblock_Quaderspiegel":{"english":"Ashlar Masonry Style","spanish":null},"Raum_Steinobjekt::PS_RaumID":{"english":"Room primary key","spanish":"Clave primaria para pieza"},"Mauer Bautechnik_Materialarten":{"english":"Construction Material","spanish":null},"Bestandteile_Baubefund::Groesze_Max":{"english":"max. size (cm)","spanish":null},"Niveau_Unterkante":{"english":"Closing Elevation","spanish":null},"Bauwerk 2::BauwerkNr":{"english":"Structure No. - Associated Structure","spanish":"Número de Estructura - Estructura Asociada"},"FS_KnochenID":{"english":"Foreign Key Bones","spanish":"Clave externa para huesos"},"Datierung_Grab::AnfPhase":{"english":"Ceramic Phase Start","spanish":"Fase Cerámica Inicio"},"Modell3D_Topos::Modell3D_Autor":{"english":"Author","spanish":"Autor"},"Form_Hals":{"english":"Vessel Form - Neck","spanish":null},"Lampen::Erhaltung":{"english":"Preservation - Manos / Metates","spanish":null},"Modell3D_Topos::Modell3D_Datum":{"english":"Date","spanish":"Fecha"},"PS_InschriftID":{"english":"ID Inscription","spanish":"Inscripción ID "},"Topos_Ausgrabung::PS_ToposID":{"english":null,"spanish":null},"Masze_Hoehe":{"english":"Height","spanish":null},"Allgemein_Eigentuemer":{"english":"Owner","spanish":null},"Bauglied::Beschreibung_Oberseite":{"english":"Top","spanish":"Lado superior"},"Boden_Moertelfarbe":{"english":"Mortar Color","spanish":null},"Auto_Herkunft":{"english":"Provenience","spanish":null},"Bauwerk_Areal::KurzbeschreibungBauwerk":{"english":"Brief Description - Structure","spanish":"Descripción breve - Estructura"},"Zeichnung_Relief::Zeichungsdatum":{"english":"Year","spanish":"Año"},"Auto_Fotobezug":{"english":"Photo Links yes/no","spanish":"Vínculos de la foto sí / no"},"Verputz: 2. Unterputz Zuschlag":{"english":"Additives 2nd Underlayer of Stucco","spanish":null},"BodenGesteinsarten":{"english":"Soil \u0026 Stone Type","spanish":null},"Datierung_Grab::EndCopanRuler":{"english":"Copan Ruler (End)","spanish":"Gobernante Copán (Fin)"},"Topos_Grab::Auto_ToposKennung":{"english":null,"spanish":null},"Material_Farbe":{"english":"Material color","spanish":"color del Material"},"Modell3D_Topos::Modell_Name":{"english":"Name","spanish":"Nombre"},"Grab_GrabNr":{"english":"Burial No. ","spanish":null},"Ausrichtung":{"english":"Orientation","spanish":null},"Ton_Porosität":{"english":"Porosity","spanish":null},"Allgemein_Zugaenglichkeit":{"english":"Current Access","spanish":"Acceso Actual"},"Wasserversorgung_ja/nein":{"english":null,"spanish":null},"DS_Eigentümer":{"english":"DS Created by","spanish":"Registro creado por"},"Groesze_Wandstaerke":{"english":"Thickness","spanish":null},"XReliefszene_SteinObjektX 2::[IconographyRelevanteSeiteEins]":{"english":"Relevant side of iconography 1","spanish":"Lado relevante de la iconografía 1"},"Wert_Oberkante":{"english":"Niv. OK","spanish":null},"Datierung::AnfDatJh":{"english":null,"spanish":null},"Siegel::PS_SiegelID":{"english":"ID Seals","spanish":null},"Aufbewahrung_Zusatz":{"english":"Place Suppl. - Storage Location","spanish":null},"Areal::KurzbeschreibungAreal":{"english":"Description","spanish":"Descripción"},"Mauer Lagenhoehe":{"english":"Location/ Situation Elev.","spanish":null},"Herstellungsspuren":{"english":"Traces of Manufacturing - Surface Coat","spanish":null},"Datierung_Steinobjekt::EndPhase":{"english":"Ceramic phase (end date)","spanish":"Fase Cerámica (fecha final)"},"Fundkollektion::temp_fein_wand":{"english":null,"spanish":null},"VermessungStatus":{"english":"Survey","spanish":null},"Bauwerk_Steinobjekt::BauwerkNr":{"english":"Structure number","spanish":"Número de estructura"},"Wand::Verputz 2. Unterputz Staerke":{"english":"Thickness 2nd Underlayer of Stucco","spanish":null},"Foto_Inschrift::KurzbeschreibungFoto":{"english":"Brief Description Photo","spanish":"Descripción breve de foto"},"Text_Transkription":{"english":"Transcription","spanish":"Transcripción"},"Wand::Laenge":{"english":"Length","spanish":null},"XReliefszene_SteinObjektX 2::[IconographyRelevanteSeiteDrei]":{"english":"Relevant side of iconography 3","spanish":"Lado relevante de la iconografía 3"},"Zeichnung_Ausgrabung::Projekt_Nr":{"english":null,"spanish":null},"Baubefund Mörtelfarbe":{"english":"Mortar Color","spanish":null},"Anzahl_Lippe":{"english":"No. of Rim Sherds","spanish":null},"Anzahl_Sonstiges":{"english":"No. of Other Sherds","spanish":null},"Probe::PS_ProbeID":{"english":"ID Samples","spanish":null},"XReliefszene_SteinObjektX::FS_SteinobjektID":{"english":"ID Related Stone Object","spanish":"Objeto de Piedra relacionado ID"},"TonBestandteile_Keramik::Spaltbarkeit":{"english":"Fissility - Temper Components","spanish":null},"Siegel::Klassifizierung_ObjektartAllegemein":{"english":"Obect Type - Seals","spanish":null},"Knochen::Nummer_Fund":{"english":"Find No. - Bones","spanish":null},"PS_GrabID":{"english":"ID Burial","spanish":null},"KlassifizierungGeneral_Topos":{"english":"Classification","spanish":"Clasificación"},"Foto::Projekt":{"english":"Project","spanish":"Proyecto"},"Auto_Doku_Ausgrabung_vorhanden":{"english":"Excavation carried out?","spanish":null},"Bestandteile_Schicht::Format":{"english":"Formats","spanish":null},"Bauwerk_Inschrift::PS_BauwerkID":{"english":"ID Structure","spanish":"Estructura ID"},"Kampagne":{"english":"Campaign","spanish":"Campaña"},"FS_GlasID":{"english":"Foreign Key Glass","spanish":"Clave externa para vidrio"},"Archiv_Dokument":{"english":"Archival Document","spanish":"Documento de archivo"},"TonBestandteile_Keramik::Form":{"english":"Form - Temper Components","spanish":null},"Nummer_Szene":{"english":"Object No.","spanish":"Número de Objeto "},"Befund::Datum Freilegung":{"english":"Unearthed","spanish":"Desenterrado"},"FS_InschriftID":{"english":"Foreign Key Inscription","spanish":"Clave externa para inscripción"},"PS_DatierungID":{"english":"PS Dating ","spanish":"Datación "},"Mollusken::Erhaltung":{"english":"Preservation - Shells","spanish":null},"Ware":{"english":"Ware","spanish":null},"Koordinate_Areal::GeoDatum_Easting":{"english":"Longitude / E","spanish":"Longitud / E"},"Metall::Klassifizierung_ObjektartAllgemein":{"english":"Object Type - Metal","spanish":null},"Zeichnung_Areal::Projekt_Nr":{"english":null,"spanish":null},"Datierung_Grab::EndPraezise":{"english":"Precise Date End","spanish":"Fecha Precisa Fin"},"AngabenOrtsansässiger":{"english":"Local Information","spanish":null},"Putz::Fläche_gesamt":{"english":"Total Surface - Stucco","spanish":null},"KeramikScherbe::Erhaltung":{"english":"Preservation - Individual Sherd","spanish":null},"Datierung::AnfMayaLongCountDat_5":{"english":"Longcount Date Begin - Kins","spanish":"Cuenta Larga Inicio - Kins"},"Geschichte_Forschung_alt":{"english":"Previous Research","spanish":"Investigación Previa"},"relevanteSeiteEins":{"english":"Position on the Medium 1","spanish":"Posición en el objeto 1"},"Klassifizierung_Speziell":{"english":"Specific classification","spanish":"Clasificación específica"},"Knochen::Anzahl_aufgehoben":{"english":"Total Number of Bones collected","spanish":null},"Bestandteile_Sonstige::Material":{"english":"Material","spanish":null},"Datierung_Grab::AnfEpoche":{"english":"Period Start","spanish":"Época Inicio"},"AnfPraezise":{"english":"Starting Year Preafix","spanish":"Año de inicio Praefix"},"PS_BefundID":{"english":"ID Lots (Feature)","spanish":null},"[Bauwerk_Anzahl]":{"english":"Number of Structures","spanish":"Número de Estructuras"},"Mauer Bautechnik_Bezeichnung_lat":{"english":"Latin Name","spanish":null},"Boden Unterscheidungskriterien":{"english":"Distinguishing Criteria - Floor","spanish":null},"Oberfläche_Überzug_außen":{"english":"Coat Type - Outside","spanish":null},"[Anzahl_Befunde]":{"english":"Number of Features","spanish":null},"Auto_Objektnummer":{"english":null,"spanish":null},"Foto_Ausgrabung::Vorlagenart":{"english":null,"spanish":null},"AnfTerminus":{"english":null,"spanish":null},"Zeichnung::Projekt_Nr":{"english":null,"spanish":null},"Besonderheiten":{"english":"Specifics","spanish":"Particularidades "},"Auto_RaumKennung":{"english":null,"spanish":null},"Groesze_Dm_Hals":{"english":"Dia. Neck","spanish":null},"Forschungsgeschichte":{"english":"Research History","spanish":"Historia de investigación"},"Bauwerk_Areal::Bautyp":{"english":"Structure Type","spanish":"Tipo de construcción"},"Groesze_Laenge":{"english":"Length","spanish":null},"Einzelmotiv::MotivElement":{"english":"Individual Subject - Subject/Element","spanish":null},"Bauglied::Beschreibung_rechte Seite":{"english":"Right side","spanish":"Lado derecho"},"Erhaltung_Zustand":{"english":"State -  Conservation Vessel","spanish":null},"Mauer besondere Beobachtungen":{"english":"Other Observations","spanish":null},"TonBestandteile_Keramik::Koernung":{"english":"Size (mm) - Temper Components","spanish":null},"[Composition]":{"english":null,"spanish":null},"Datum_ArealBeginn":{"english":"Start","spanish":"Inicio"},"Einzelmotiv::Verzierungstechnik_Code":{"english":"Technique Code","spanish":null},"Besonderheiten_Beschreibung":{"english":"Description of specifics","spanish":"Descripción de particularidades"},"Fundkollektion::Aufbewahrungsort_zusatz":{"english":"Curation Site - Addition","spanish":null},"Bauwerk_Reliefszene::BauwerkNr":{"english":"ID Structure","spanish":"Estructura ID"},"Planum::PS_PlanumID":{"english":null,"spanish":null},"Reliefszene::PS_ReliefszeneID":{"english":"ID Iconography","spanish":null},"Zeichnung_Inschrift::Projekt":{"english":"Project","spanish":"Proyecto"},"Einzelmotiv::Verzierungszone_Code":{"english":"Individual Subject Position Code","spanish":null},"Foto_Relief::KurzbeschreibungFoto":{"english":"Brief Description Photo","spanish":"Descripción breve de foto"},"[Zaehler_Bildimport]":{"english":null,"spanish":null},"Bestandteile_Sonstige::Anteil":{"english":"Proportion (in %)","spanish":null},"Fundkollektion::Kollektion_Objektart":{"english":"Object Type(s)","spanish":null},"Inschrift::Nummer_Inschrift":{"english":null,"spanish":null},"Nummer_Fund":{"english":"Find number","spanish":"Número de hallazgo"},"Nummer_AnalogBild":{"english":"Analog Img No.","spanish":"Número de Imagen analógica"},"Datierung_Inschrift::EndDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Ort_Ortsteil":{"english":"District","spanish":"Distrito"},"Ausgrabung::PS_AusgrabungID":{"english":"Serial Number Unit","spanish":"Número de Serie de Unidad"},"Koordinate_Areal::GeoDatum_Northing":{"english":"Latitude / N","spanish":"Latitud / N"},"Erhaltung_Gefaesz":{"english":"Conservation of Vessel","spanish":null},"Datierung::EndPraezise":{"english":"Precise Date End","spanish":"Fecha Precisa Fin"},"AnfDatvn":{"english":"BC/AD","spanish":"a.C./d.C. "},"Masze_Laenge":{"english":"Length","spanish":null},"Datei_Original_Name":{"english":"Name","spanish":"Nombre"},"Nummer_DigitalBild":{"english":"Digital Img No.","spanish":"Número de Imagen digital"},"Interpretation":{"english":"Interpretation","spanish":null},"Foto_Steinobjekt::Fotodatum":{"english":"Photo year","spanish":"Año de foto"},"Schicht_Beschreibung":{"english":"Description - Level","spanish":null},"Auto_Doku_3DModell_Anzahl":{"english":"No. of 3D Models","spanish":null},"Reliefszene_ThemeMotif::FS_SteinobjektID":{"english":"Foreign Key Stone Object","spanish":"Clave externa para objetos de piedra"},"Fundkollektion::Kollektion_FundgattungAllgemein":{"english":"Classification","spanish":"Clasificación"},"Zeichnung_Areal::Zeichner":{"english":"Illustrator","spanish":"Ilustrador"},"Bauwerk::Auto_Doku_Zeichnungen_vorhanden":{"english":"Existing Drawings?","spanish":null},"Bauwerk 2::KurzbeschreibungBauwerk":{"english":"Brief Description - Associated Structure","spanish":"Descripción breve - Estructura asociada"},"Auto_Doku_Raum_vorhanden":{"english":"Existing Rooms?","spanish":"Existen piezas"},"Bestandteile_Schicht::Anteil_Prozent":{"english":"Proportion (in %)","spanish":null},"Mauer Erhaltung_Beschreibung":{"english":"Description of Preservation","spanish":null},"Grab_Datum_FreilegungBeginn":{"english":"Unearthing from","spanish":null},"Bauglied::Beschreibung_linke Seite":{"english":"Left side","spanish":"Lado izquierdo"},"Foto_Ausgrabung::Auto_FotoKennung":{"english":null,"spanish":null},"Abhub::PS_AbhubID":{"english":"Lot No. ","spanish":null},"Magerung_Koernung":{"english":"Grain - Temper","spanish":null},"Magerung_Farbe":{"english":"Color - Temper","spanish":null},"Laenge":{"english":"Length","spanish":null},"Typus_Variante":{"english":"Type Variant","spanish":null},"Auto_Doku_Zeichnungen_vorhanden":{"english":"Existing Drawings?","spanish":null},"Foto_Steinobjekt::Nummer_DigitalBild":{"english":"Digital photo number","spanish":"Número de foto digital"},"Datierung_Keramik::AnfEpoche":{"english":"Period Start","spanish":"Época Inicio"},"Datierung_Relief::EndEpoche":{"english":"Period End","spanish":"Época Fin"},"Datierung::EndMayaLongCountDat_2":{"english":"Longcount Date End - Katuns","spanish":"Cuenta Larga Fin - Katuns"},"Datierung::EndMayaLongCountDat_1":{"english":"Longcount Date End - Baktuns","spanish":"Cuenta Larga Fin - Baktuns"},"Koordinate_Topos::GeoDatum_Northing":{"english":"Latitude / N","spanish":"Latitud / N"},"Sonstiges Erhaltung":{"english":"Preservation - Other","spanish":null},"Form_Boden":{"english":"Vessel Form - Bottom","spanish":null},"Keramik::Nummer_Fund":{"english":"Find No. - Ceramics","spanish":null},"Aufbewahrung_Fotoabzuege_InvNr":{"english":"Details (e.g. Inventary No.)","spanish":"Detalles (p. ej. Número de Inventario)"},"[Doku_Foto_Anzahl]":{"english":"Number of photos","spanish":"Número de fotos"},"Modell3D::Modell_Name":{"english":"Name of 3D model","spanish":"Nombre del modelo 3D"},"Wand::Verputz 2. Unterputz Farbe":{"english":"Color 2nd Underlayer of Stucco","spanish":null},"Putz::Fläche_grösstesFragment":{"english":"Largest Fragment - Stucco","spanish":null},"Bestandteile_Schicht::Groesze_Max":{"english":"max. size (cm)","spanish":null},"Datierung_Keramik::AnfMayaLongCountDat_5":{"english":"Longcount Date Start - Kins","spanish":"Cuenta Larga Inicio - Kins"},"Boden_Konsistenz":{"english":"Consistency - Floor","spanish":null},"Datierung_Keramik::AnfMayaLongCountDat_4":{"english":"Longcount Date Start - Winals","spanish":"Cuenta Larga Inicio - Winals"},"Typus_Name":{"english":"Type Name","spanish":null},"Anzahl_Gefaesze":{"english":"No. of Vessels","spanish":null},"Metall::Material":{"english":"Material - Metal","spanish":null},"Datierung_Keramik::AnfMayaLongCountDat_1":{"english":"Longcount Date Start - Baktuns","spanish":"Cuenta Larga Inicio - Baktuns"},"Text_vollständig":{"english":"Text Complete?","spanish":"Texto completo?"},"Datierung_Keramik::AnfMayaLongCountDat_3":{"english":"Longcount Date Start - Tuns","spanish":"Cuenta Larga Inicio - Tuns"},"Fundkollektion::Anzahl_Keramik_Henkel":{"english":"No. of Handle Sherds","spanish":null},"Datierung_Keramik::AnfMayaLongCountDat_2":{"english":"Longcount Date Start - Katuns","spanish":"Cuenta Larga Inicio - Katuns"},"KeramikScherbe::Prozent":{"english":"Percent - Individual Sherds","spanish":null},"Ton_Haerte":{"english":"Clay Hardness","spanish":null},"[Referenzkoordinate_vorhanden]":{"english":null,"spanish":null},"Aufbewahrung_Negative_InvNr":{"english":"Neg. No.","spanish":"Número de negativo"},"Planquadrat2":{"english":"Map quadrant y","spanish":"Cuadrante de Mapa y"},"Planquadrat1":{"english":"Map quadrant x","spanish":"Cuadrante de Mapa x"},"AlteRaumNr":{"english":"Old Room No.","spanish":null},"Foto_Topos::Nummer_DigitalBild":{"english":"Number","spanish":"Número"},"Datierung::AnfMayaLongCountDat_4":{"english":"Longcount Date Begin - Winals","spanish":"Cuenta Larga Inicio - Winals"},"Mauer Lagenanzahl":{"english":"Preserved Layers","spanish":null},"Datierung::AnfMayaLongCountDat_3":{"english":"Longcount Date Begin - Tuns","spanish":"Cuenta Larga Inicio - Tuns"},"Auto_Doku_Zeichnungen_Anzahl":{"english":"No. of Drawings","spanish":null},"Datierung::AnfMayaLongCountDat_2":{"english":"Longcount Date Begin - Katuns","spanish":"Cuenta Larga Inicio - Katuns"},"Datierung::AnfMayaLongCountDat_1":{"english":"Longcount Date Begin - Baktuns","spanish":"Cuenta Larga Inicio - Baktuns"},"[LongCount]":{"english":"Long count","spanish":"Cuenta Larga"},"Dekoration::Auto_Dekorationnummer":{"english":"ID Decoration","spanish":null},"DAI_KF04_Bildautor":{"english":"KF04: Photographer","spanish":"KF04: Fotógrafo"},"Foto_Keramik::Projekt":{"english":"Project - Photo","spanish":null},"Foto_Steinobjekt::Projekt":{"english":"Project","spanish":"Proyecto"},"Maya_Dekoration":{"english":"Decoration","spanish":"Decoración"},"Nummer_Alternative":{"english":null,"spanish":null},"Akteur_Director":{"english":"Project Director","spanish":"Dirección"},"Lampen::KurzbeschreibungLampen":{"english":"Brief Description - Manos / Metates","spanish":null},"Foto_Keramik::Fotodatum":{"english":"Year","spanish":"Año"},"Foto_Editiert":{"english":"Edited by","spanish":"Editado por"},"Datierung_Steinobjekt::Grundlage":{"english":"Date based upon","spanish":"Fecha basado en"},"Oberfläche_Überzug_Farbe_innen":{"english":"Coat Type - Inside","spanish":null},"Datierung::EndPhase":{"english":"Ceramic Phase End","spanish":"Fase Cerámica Fin"},"Ausgrabung_Topos::PS_AusgrabungID":{"english":"Serial Number","spanish":"Número de Serie"},"Datierung_Steinobjekt::AnfEpoche":{"english":"Period (initial date)","spanish":"Periodo (fecha inicial)"},"Ton_Farbe_Kern_Munsell":{"english":"Munsell No. - Kernel Color","spanish":null},"Koordinate_Topos::GeoDatum_Easting":{"english":"Longitude / E","spanish":"Longitud / E"},"Bauglied::Beschreibung_Unterseite":{"english":"Bottom","spanish":"Parte inferior"},"Bauglied::Saeule":{"english":"Columns and Supports","spanish":"Columnas y soporte"},"Mauer Zustand":{"english":"Visibility \u0026 Condition","spanish":null},"Erhaltung_Beschreibung":{"english":"Dates mentioned in text","spanish":"Fechas mencionadas en el texto"},"Befund::PS_BefundID":{"english":"ID Feature","spanish":null},"Datierung::EndMayaLongCountDat_4":{"english":"Longcount Date End - Winal","spanish":"Cuenta Larga Fin - Winals"},"Datierung::EndMayaLongCountDat_3":{"english":"Longcount Date End - Tun","spanish":"Cuenta Larga Fin - Tuns"},"Putz::KurzbeschreibungPutz":{"english":"Brief Description - Stucco","spanish":null},"Datierung::EndMayaLongCountDat_5":{"english":"Longcount Date End - Kins","spanish":"Cuenta Larga Fin - Kins"},"[Kurzinfo]":{"english":"Brief Description","spanish":"Breve Descripción"},"[Doku_3DModell_Anzahl]":{"english":"Number of 3D Models","spanish":"Número de Modelos 3D"},"Wand::Verputz 2. Unterputz Anteil":{"english":"Proportion 2nd Underlayer of Stucco","spanish":null},"Grundriss_vollstaendig":{"english":null,"spanish":null},"Lampen::Klassifizierung":{"english":"Type - Manos / Metates","spanish":null},"Aufbewahrungsort_zusatz":{"english":"Shelf number","spanish":"Número de depósito "},"Gattung":{"english":"Class","spanish":null},"Ort":{"english":"Place","spanish":null},"Maya_Funktion":{"english":"Suggested Function","spanish":"Función sugerido"},"Verputz: 2. Unterputz Farbe":{"english":"Color 2nd Underlayer of Stucco","spanish":null},"Grab_ungestört":{"english":"Situation - Burial","spanish":null},"RaumNr":{"english":"Room No. ","spanish":null},"Mauer Beschreibung":{"english":"Description - Wall","spanish":null},"Fundkollektion::Anzahl_FeinWare_Wand":{"english":"No. of Fine Ware Wall","spanish":null},"Foto_Inschrift::Projekt_Nr":{"english":null,"spanish":null},"TonBestandteile_Keramik::Glanz":{"english":"Brilliance - Temper Components","spanish":null},"Bauwerk_Topos::BauwerkNr":{"english":"Structure Number","spanish":"Número de Estructura"},"Zeichnung_Ausgrabung::Nummer_Zeichnung":{"english":null,"spanish":null},"ToposNr":{"english":"Site-No.","spanish":"Número de Sitio"},"Provinz_modern":{"english":"Department / State","spanish":"Departamento / Estado"},"Bestandteile::Anteil_Prozent":{"english":"Portion (in %)","spanish":"Porción (en %)"},"Inschrift 2::Auto_Inschriftnummer":{"english":"ID Inscription (Comparison)","spanish":"Inscripción ID (Comparación)"},"Wand::Verputz 1. Unterputz Stärke":{"english":"Thickness 1st Underlayer of Stucco","spanish":null},"Mauer Bautechnik_Lagenart":{"english":"Horizontal Layers","spanish":null},"Magerung_Menge":{"english":"Quantity - Temper","spanish":null},"[Bauwerke_Anzahl]":{"english":"Number of Structures","spanish":"Número de Estructuras"},"Gefälle":{"english":"Slope and Aspect","spanish":null},"Erhaltungszustand":{"english":"Restored with","spanish":"Restaurada con"},"SonstigerFund::Klassifizierung_ObjektartAllgemein":{"english":"Object Type - Other Finds","spanish":null},"Topos::KurzbeschreibungTopos":{"english":"Brief description of archaeological site","spanish":"Descripción breve del sitio arqueológico"},"Wand::Auto_WandKennung":{"english":"Wall Identifier","spanish":null},"Koordinate_Areal::X_Wert":{"english":"Northing / X","spanish":"Norte / X"},"Datierung_Grab::AnfDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Bauglied::MaszeBauglied":{"english":"Measurements","spanish":"Medidas"},"Putz::Farben_Grund":{"english":"Base Color - Stucco","spanish":null},"Fundkollektion::Gewicht_Keramik_Wand":{"english":"Weight of Wall Sherds","spanish":null},"Befundart":{"english":"Feature Type","spanish":null},"Anzahl_Boden":{"english":"No. of Bottom Sherds","spanish":null},"Parties_Projekt::[PartyTitle]":{"english":"Project Director","spanish":"Dirección"},"SurfaceAreaVisible":{"english":"Visible surface area (m²)","spanish":"Superficie visible (m²)"},"Kulturkreis_Zuweisung":{"english":"Cultural Affiliations Certainty","spanish":"Afiliación Cultural Certeza"},"[Anzahl_MauernBefunde]":{"english":"Number of Features / Lots","spanish":null},"Mauer Klassifizierung Sonstiges":{"english":"Other Classifications - Wall","spanish":null},"XSiteProjectX::[Topos_Info]":{"english":"Site Name","spanish":"Denominación"},"Grabfund_janein":{"english":"Excavation find?","spanish":"Hallazgo de excavación?"},"Knochen::Klassifizierung_Tiertart":{"english":"Species - Bones","spanish":null},"Metall::Anzahl_aufgehoben":{"english":"Total Number of Metal collected","spanish":null},"Planum::KurzbeschreibungPlanum":{"english":null,"spanish":null},"Siegel::KurzbeschreibungSiegel":{"english":"Brief Description - Seals","spanish":null},"DS_Bearbeiterdatum":{"english":"Record last changed","spanish":"Última modificación"},"Strasze_Topos::KurzbeschreibungStrasze":{"english":"Description","spanish":"Descripción"},"KeramikScherbe::aufgehoben":{"english":"Kept? - Individual Sherds","spanish":null},"Altgrabung_Kürzel":{"english":"Code","spanish":null},"Baubefund Beschreibung":{"english":"Description - Constr. Feature","spanish":null},"Datierung::EndDatZeitraum":{"english":null,"spanish":null},"Siegel::Nummer_Fund":{"english":"Find No. - Seals","spanish":null},"Zeichnung_Relief::Zeichner":{"english":"Illustrator","spanish":"Ilustrador"},"SurfaceAreaTop":{"english":"Top area (m²)","spanish":"Superficie de la parte superior"},"Herkunft_Streufund_Ort":{"english":"Place - Provenience","spanish":null},"Masze_BreiteGesamt":{"english":"Maximum width (cm)","spanish":"Ancho máximo (cm)"},"TonBestandteile_Keramik::Transparenz":{"english":"Transparence - Temper Components","spanish":null},"Schicht Klassifizierung":{"english":"Classification - Level","spanish":null},"FS_DekorationID":{"english":"Foreign Key Decoration","spanish":"Clave externa para decoración"},"Koordinate_Keramik::Y_Wert":{"english":"Easting / Y","spanish":"Este / Y"},"Foto_Areal::Vorlagenart":{"english":null,"spanish":null},"[Befund_Mauer]":{"english":null,"spanish":null},"Fundkollektion::Kollektion_FundgattungSpeziell":{"english":"Specification","spanish":null},"[Ausgrabung_Anzahl]":{"english":"Number of Units","spanish":"Número de Unidades"},"Glas::Klassifizierung_ObjektartSpeziell":{"english":"Classification - Lithics / Obsidian","spanish":null},"Druckvariable":{"english":null,"spanish":null},"Grab_Altgrabung_Kürzel":{"english":"Code","spanish":null},"Baubefund Erhaltung":{"english":"Preservation - Constr. Feature","spanish":null},"[UeberschriftNew]":{"english":null,"spanish":null},"Bestandteile_Baubefund::Format":{"english":"Formats","spanish":null},"Masze_Schicht_AusdehnungA":{"english":"Max. dimensions of find","spanish":null},"[Anzahl_Steinobjekt]":{"english":"Number of Construction Components","spanish":null},"Masze_Schicht_AusdehnungB":{"english":"Max. dimensions of find","spanish":null},"Ausgrabungen_Geschichte":{"english":null,"spanish":null},"FS_BohrkernSchichtID":{"english":"Foreign key for Layers (Drill core) Table","spanish":"Clave externa para tabla de estratos (núcleo de perforación)"},"[Datei eingelesen]":{"english":null,"spanish":null},"Auto_Doku_Foto_vorhanden":{"english":"Existing photos?","spanish":"Existen fotos?"},"Bauwerk_Reliefszene::KurzbeschreibungReliefszene":{"english":"Brief Description - Iconography","spanish":"Descripción breve - Iconografía"},"Bestandteile::Format":{"english":"Form","spanish":"Formato"},"Zeichnung::Projekt":{"english":"Project","spanish":"Proyecto"},"Oberfläche_Struktur_innen":{"english":"Surface Structure - Inside","spanish":null},"Zeichnung_Steinobjekt::Zeichungsdatum":{"english":"Drawing date","spanish":"Fecha de dibujo"},"Temp_Group":{"english":"Group (temporary field)","spanish":"Grupo "},"Sonstiges Unterscheidungskriterien":{"english":"Distinguishing Criteria - Other","spanish":null},"Datierung_Grab::AnfCopanRuler":{"english":"Copan Ruler (Begin)","spanish":"Gobernante Copán (Inicio)"},"Putz::Dekor_Art":{"english":"Decoration - Stucco","spanish":null},"Fundkollektion::Beschreibung":{"english":"Comment","spanish":"Comentarios"},"Datierung_Inschrift::EndPraezise":{"english":"Precise Date End","spanish":"Fecha Precisa Fin"},"HuegelNr":{"english":"No. of Mounds","spanish":null},"BauordnungBemerkung":{"english":null,"spanish":null},"Datierung_Grab::EndMayaLongCountDat_5":{"english":"Longcount Date End - Kins","spanish":"Cuenta Larga Fin - Kins"},"Datierung_Grab::EndMayaLongCountDat_4":{"english":"Longcount Date End - Winals","spanish":"Cuenta Larga Fin - Winals"},"Fundmaterial_Bemerkung":{"english":"Comment - Material Type","spanish":null},"Datierung_Grab::EndMayaLongCountDat_1":{"english":"Longcount Date End - Baktuns","spanish":"Cuenta Larga Fin - Baktuns"},"IntermediateAreaDating":{"english":"Intermediate Area Dating","spanish":"Datación de la Área Intermedia"},"Grab_SkelettErhaltung":{"english":"Skeleton Preservation","spanish":null},"Befund::[Klassifizierung]":{"english":null,"spanish":null},"Datierung_Grab::EndMayaLongCountDat_3":{"english":"Longcount Date End - Tuns","spanish":"Cuenta Larga Fin - Tuns"},"Datierung_Grab::EndMayaLongCountDat_2":{"english":"Longcount Date End - Katuns","spanish":"Cuenta Larga Fin - Katuns"},"Ton_Farbe_Innen_Munsell":{"english":"Munsell No. - Inside Color","spanish":null},"Grab_Schnittleiter":{"english":"Direction","spanish":null},"Datierung_Relief::AnfDatZeitraum":{"english":null,"spanish":null},"TonBestandteile_Keramik::Farbe_Munsell":{"english":"Munsell No. - Temper Components","spanish":null},"Metall::PS_MetallID":{"english":"ID Metal","spanish":null},"Grab_BiologischesAlter":{"english":"Skeleton Age","spanish":null},"EndPraezise_Schwankung":{"english":"Ending Year (+/-)","spanish":"Año de finalización (+/-)"},"Befund_Bauwerk::KurzbeschreibungBefund":{"english":"Brief Description","spanish":"Breve Descripción"},"Foto_Inschrift::Projekt":{"english":"Project","spanish":"Proyecto"},"Zeichnung_Areal::Zeichnung_Art":{"english":"Type","spanish":"Tipo"},"Grab_Grabform":{"english":"Form of Deposit","spanish":null},"Raum::KurzbeschreibungRaum":{"english":"Brief Description Room","spanish":"Breve descripción de pieza"},"Planum::Auto_PlanumKennung":{"english":"Plan View ID","spanish":null},"Zeichnung_Ausgrabung::Zeichungsdatum":{"english":"Year","spanish":"Año"},"Eigentuemer":{"english":"Rights","spanish":"Derechos"},"Zeichnung_Inschrift::Zeichner":{"english":"Illustrator","spanish":"Ilustrador"},"Fundkollektion::Gewicht_Objekte_gesamt":{"english":"Weight - Total","spanish":null},"Staat":{"english":"Country","spanish":"País"},"KurzbeschreibungSteinobjekt":{"english":"Brief description","spanish":"Breve descripción"},"Abhub::Teilprojekt":{"english":"Classification - Lot","spanish":"Clasificación - Rasgo"},"Schicht_Menge_Sand":{"english":"Sand","spanish":null},"Koordinate_Areal::Datum":{"english":null,"spanish":null},"Masze_Schicht_Stärke":{"english":"Max. thickness of find","spanish":null},"Koordinate_Areal::Koordinatensystem_Zone":{"english":"UTM-Zone","spanish":"Zona UTM"},"Hoehe_hoechsterPunkt":{"english":"Highest point above Sea Level ","spanish":"Punto más alto sobre nivel del mar"},"XSteindenkmalBauwerkRaumX::[BauwerkKennung]":{"english":"Associated structure acronym","spanish":"Acrónimo de estructura asociada"},"Boden Material Bemerkung":{"english":"Observations about construction materials","spanish":null},"Dekoration_Reliefszene::Nummer_Dekoration":{"english":"ID Decoration","spanish":"Decoración ID"},"Ton_Farbe_Auszen_Munsell":{"english":"Munsell No. - Outside Color","spanish":null},"Lage_Sued":{"english":"South","spanish":"Sur"},"EndPhase":{"english":"Ceramic Phase","spanish":"Fase cerámica"},"Titel":{"english":"Title","spanish":"Título"},"TonBestandteile_Keramik::Merkmal":{"english":"Characteristics - Temper Components","spanish":null},"Metall::Erhaltung":{"english":"Preservation - Metal","spanish":null},"Planum::Klassifizierung":{"english":"Classification - Plan View","spanish":null},"Foto_Relief::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"Maya_Hoehe":{"english":"Elevation (masl)","spanish":"Altitud (msnm)"},"Datierung_Grab::Grundlage":{"english":"Based upon","spanish":"Basado en"},"XVergleichX::Kommentar":{"english":"Comment - Associated Structure","spanish":"Comentario - Estructura Asociado"},"XReliefszene_SteinObjektX 2::[IconographyMotifTypeSpez]":{"english":"Iconography specific motif type","spanish":"Iconografía tipo específico de los motivos"},"DAI_KF12_Inventarnummer":{"english":"KF 12; Inv.-/Find-Number","spanish":"KF 12: Inventario -/ Número de Hallazgo"},"Erhaltung_Prozent":{"english":"Percent - Conservation Vessel","spanish":null},"Strasze::StraszeNr":{"english":"Street No. ","spanish":"Número de la calle"},"Zeichnung::KurzbeschreibungZeichnung":{"english":"Brief Description - Drawings and Maps","spanish":null},"Datierung_Keramik::EndMayaLongCountDat_2":{"english":"Longcount Date End - Katuns","spanish":"Cuenta Larga Fin - Katuns"},"Datierung_Keramik::EndMayaLongCountDat_3":{"english":"Longcount Date End - Tuns","spanish":"Cuenta Larga Fin - Tuns"},"Datierung_Keramik::EndMayaLongCountDat_4":{"english":"Longcount Date End - Winals","spanish":"Cuenta Larga Fin - Winals"},"Datierung_Keramik::EndMayaLongCountDat_5":{"english":"Longcount Date End - Kins","spanish":"Cuenta Larga Fin - Kins"},"Ziegel::Auto_Objektnummer":{"english":null,"spanish":null},"Koordinate::Y_Wert":{"english":"Easting / Y","spanish":"Este / Y"},"Lage_Nord":{"english":"North","spanish":"Norte"},"Koordinate_Topos::Genauigkeit":{"english":"Accuracy of Coordinate","spanish":"Precisión de Coordenadas"},"Datierung_Keramik::EndMayaLongCountDat_1":{"english":"Longcount Date End - Baktuns","spanish":"Cuenta Larga Fin - Baktuns"},"Datierung_Keramik::Grundlage":{"english":"Based upon","spanish":"Basado en"},"Datierung_Inschrift::AnfDatZeitraum":{"english":null,"spanish":null},"[Ort]":{"english":null,"spanish":null},"Groesze_Dm_Boden":{"english":"Dia. Bottom","spanish":null},"Befund_Grab::Fundbearbeitung_abgeschlossen":{"english":"Finds worked on?","spanish":null},"Auto_Nummern_Funde":{"english":"List of all Finds","spanish":null},"Schnittleiter":{"english":"Direction","spanish":null},"Bauglied::Profil_ornamentiert":{"english":"Ornamented or unornamented","spanish":"Ornamentado o sin ornamentos"},"Temp_PhotoRoll":{"english":"Photo roll (temporary field)","spanish":"Carrete de foto"},"Nutzung":{"english":"Usage","spanish":"Uso"},"Foto_Areal::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"Inschrift::KurzbeschreibungInschrift":{"english":"Brief description of inscriptions","spanish":"Descripción breve de los inscripciones"},"Boden_Farbe2":{"english":"to","spanish":null},"Boden_Farbe1":{"english":"Color from","spanish":null},"Maya_Erhaltung":{"english":"Preservation","spanish":"Preservación"},"Mauer Bautechnik_Beschreibung":{"english":"Description Construction  Technique","spanish":null},"Zeichnung_Inschrift::Zeichnung_Art":{"english":"Type","spanish":"Tipo"},"Schicht_Farbe1":{"english":"Color from","spanish":null},"Bestandteile_Baubefund::Anteil_Prozent":{"english":"Proportion (in %)","spanish":null},"Schicht_Farbe2":{"english":"to","spanish":null},"Survey_Keramik::Auto_SurveyKennung":{"english":"Survey No.","spanish":null},"Koordinate_Keramik::GeoDatum_Northing":{"english":"Latitude / N","spanish":"Latitud / N"},"Fundkollektion::Gewicht_Keramik_Henkel":{"english":"Weight of Handle Sherds","spanish":null},"Erhaltung":{"english":"Condition","spanish":"Conservación"},"Keramik::Anzahl_Sonstiges":{"english":"No. of Other Sherds","spanish":null},"Lage_Detail":{"english":"Details of context","spanish":"Detalles del contexto"},"Raum_Befund::RaumNr":{"english":"Room No.","spanish":null},"Strasze::PS_StraszeID":{"english":null,"spanish":null},"Anzahl_Deckel":{"english":"No. of Cap Sherds","spanish":null},"Begrenzung":{"english":"Boundary","spanish":"Limitación"},"[Anzahl_Strukturen]":{"english":"Number of Structures","spanish":"Número de Estructuras"},"Keramik::Typus_Nr":{"english":"Type No. - Ceramics","spanish":null},"Strasze_Areal::KurzbeschreibungStrasze":{"english":"Brief Description - Plaza","spanish":"Descripción breve - Plaza"},"Foto_Relief::Vorlagenart":{"english":null,"spanish":null},"Datum_AusgrabungEnde":{"english":"End Date","spanish":"Fecha Final"},"Material_Beschreibung":{"english":"Specific material","spanish":"Material específico"},"FS_BefundID":{"english":"Foreign key for Feature (Lots) Table","spanish":"Clave externa para tabla de paredes (rasgos)"},"Projekt_Nr":{"english":"Project No.","spanish":"Número de Proyecto"},"Theme_Composition_Mode":{"english":"Composition","spanish":"Composición"},"Survey_Steinobjekt::PS_SurveyID":{"english":"Group/Sub-site primary key","spanish":"Clave primaria para grupo"},"Beschreibung":{"english":"Comments","spanish":"Comentarios"},"Scanquelle":{"english":"Source (e.g. Publication)","spanish":"Fuente (p. ej. Publicación)"},"Befund::Fundbearbeitung_abgeschlossen":{"english":"Published in Report?","spanish":"Publicado en el Informe?"},"FS_ArealID":{"english":"Foreign Key Sub-Op","spanish":"Clave externa suboperación"},"Bestandteile_Fußboden::Groesze_Max":{"english":"max. size (cm)","spanish":null},"Ausgrabung_Topos::KurzbeschreibungAusgrabung":{"english":"Description","spanish":"Descripción"},"Magerung_Textur":{"english":"Texture - Temper","spanish":null},"Topos_Ausgrabung::Ort_Land":{"english":"Country","spanish":"País"},"Bestandteile_Schicht::Groesze_Klasse":{"english":"Size Class","spanish":null},"Masze_Breite_Plattform":{"english":"Width Platform","spanish":"Ancho de la Plataforma"},"Datierung_Inschrift::EndMayaLongCountDat_3":{"english":"Longcount Date End - Tuns","spanish":"Cuenta Larga Fin - Tuns"},"Datierung_Inschrift::EndMayaLongCountDat_2":{"english":"Longcount Date End - Katuns","spanish":"Cuenta Larga Fin - Katuns"},"Datierung_Inschrift::EndMayaLongCountDat_1":{"english":"Longcount Date End - Baktuns","spanish":"Cuenta Larga Fin - Baktuns"},"Ausdehnung_gesamte_Fläche":{"english":"Find identifiable across entire surface?","spanish":null},"Reliefszene::KurzbeschreibungReliefszene":{"english":"Brief Description - Iconography","spanish":null},"Mauer Werkzeichen":{"english":"Mark / Seal - Wall","spanish":null},"Datierung_Inschrift::EndMayaLongCountDat_5":{"english":"Longcount Date End - Kins","spanish":"Cuenta Larga Fin - Kins"},"Datierung_Inschrift::EndMayaLongCountDat_4":{"english":"Longcount Date End - Winals","spanish":"Cuenta Larga Fin - Winals"},"EndMayaLongCountDat_4":{"english":"Longcount Date End - Winal","spanish":"Cuenta Larga Fin - Winals"},"Baubefund Baumaterial Bemerkungen":{"english":"Comments","spanish":null},"MotivTypeGeneral":{"english":"Motif Type General","spanish":"Tipo de motivo general"},"EndMayaLongCountDat_5":{"english":"Longcount Date End - Kins","spanish":"Cuenta Larga Fin - Kins"},"Datierung_Grab::EndDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Lampen::Form":{"english":"Form - Manos / Metates","spanish":null},"Datierung_Keramik::EndPraezise":{"english":"Precise Date End","spanish":"Fecha Precisa Fin"},"Koordinate_Topos::Koordinatensystem_Zone":{"english":"UTM Zone","spanish":"Zona UTM"},"FunktionaleVerwendung":{"english":"Used as","spanish":"Utilizado como"},"Datierung_Relief::EndDatJh":{"english":null,"spanish":null},"Form":{"english":"Form","spanish":null},"Siegel::Anzahl_aufgehoben":{"english":"Total Number of Seals collected","spanish":null},"Maya_Tuer_Anzahl":{"english":"No. of Doors","spanish":"Número de puertas"},"Datierung_Inschrift::EndDatJh":{"english":null,"spanish":null},"Steinobjekt_Herkunft::PS_SteinobjektID":{"english":"Construction Component ID","spanish":"Componentes de la construcción ID"},"EndMayaLongCountDat_3":{"english":"Longcount Date End - Tun","spanish":"Cuenta Larga Fin - Tuns"},"EndMayaLongCountDat_2":{"english":"Longcount Date End - Katuns","spanish":"Cuenta Larga Fin - Katuns"},"Bauwerk_Grab::[Ort]":{"english":"Location - Structure","spanish":null},"Lage_Einmessung_Richtung2":{"english":"Direction two","spanish":"Dirección dos"},"EndMayaLongCountDat_1":{"english":"Longcount Date End - Baktuns","spanish":"Cuenta Larga Fin - Baktuns"},"Lage_Einmessung_Richtung1":{"english":"Direction one","spanish":"Dirección uno"},"Wasserversorgung":{"english":null,"spanish":null},"Wand::Mauer Erhaltung Oberfläche":{"english":"Wall Surface Preservation","spanish":null},"Herkunft_Streufund_Lokalisierung":{"english":"Location - Provenience","spanish":null},"Foto_Relief::Nummer_DigitalBild":{"english":null,"spanish":null},"Bauglied::Motive_Gegenstaendlich":{"english":"Representational motif","spanish":"Motivos conceptuales"},"Bauwerk::PS_BauwerkID":{"english":"ID Structure","spanish":null},"Datierung_Keramik::EndCopanRuler":{"english":"Copan Ruler (End)","spanish":"Gobernante Copán (Fin)"},"Formgebungstechnik":{"english":"Vessel - Forming Technique","spanish":null},"relevanteSeiteDrei":{"english":"Position on the Medium 3","spanish":"Posición en el objeto 3"},"Bauwerk::BauwerkNr":{"english":"Structure No.","spanish":"Número de Estructura"},"Survey::Copan_SubCommunity":{"english":"Group","spanish":null},"Datei_Original_Aufloesung":{"english":"Resolution","spanish":"Resolución"},"Bauwerk_Reliefszene::PS_ReliefszeneID":{"english":"ID Iconography","spanish":"Iconografía ID"},"Grab_TotenhaltungII":{"english":"Skeleton Position II","spanish":null},"EndApogee":{"english":"End of Apogee","spanish":"Fin de Apogeo"},"Foto_Keramik::Nummer_DigitalBild":{"english":"Photo Number ","spanish":null},"DAI_KF08_Ortsbezeichnung1":{"english":"KF08: Location 1","spanish":"KF08: Ubicación 1"},"Ausführung":{"english":"Execution","spanish":"Ejecución"},"Foto_Steinobjekt::Auto_FotoKennung":{"english":"Photo acronym","spanish":"Acrónimo de Foto "},"Aufbewahrung_Inv.Nr":{"english":"Inventory number","spanish":"Número de inventario"},"Foto::Nummer_DigitalBild":{"english":"Photo Number","spanish":null},"Bauwerk_Topos::KurzbeschreibungBauwerk":{"english":"Description","spanish":"Descripción"},"DAI_KF03_Aufnahmedatum":{"english":"KF03: Photo Date","spanish":"KF03: Fecha del Foto"},"Anzahl_Gesamtprofil":{"english":"No. of Complete Profile Sherds","spanish":null},"Form_Handhabe":{"english":"Vessel Form - Handle","spanish":null},"Obergeschoss":{"english":null,"spanish":null},"Aufbewahrungsort":{"english":"Location","spanish":"Ubicación"},"Modell3D::Modell3D_Autor":{"english":"3D model author","spanish":"Autor del modelo 3D"},"Zeichnung_Areal::KurzbeschreibungZeichnung":{"english":"Brief Description - Drawings and Maps","spanish":"Descripción breve - Dibujos y Mapas"},"Datierung::EndCopanRuler":{"english":"Copan Ruler (End)","spanish":"Gobernante Copán Fin"},"Modell3D_Topos::Modell_Beschreibung":{"english":"Description","spanish":"Denominación "},"Copan_Nummer":{"english":"CPN No.","spanish":"Número CPN"},"Literaturzitat_Projekt::[Literaturzitat]":{"english":"Text References","spanish":"Referencias de Texto"},"Reliefszene_ThemeMotif::PS_ReliefszeneID":{"english":null,"spanish":null},"Maya_SubCommunity":{"english":null,"spanish":null},"Zeichnung_Ausgrabung::Projekt":{"english":"Project","spanish":"Proyecto"},"FigureGesture":{"english":"Figure Gesture","spanish":"Gesto de la figura "},"Datierung_Inschrift::EndCopanRuler":{"english":"Copan Ruler (End)","spanish":"Gobernante Copán (Fin)"},"Grabform":{"english":"Form of Deposits","spanish":null},"Foto_Keramik::Teilprojekt":{"english":null,"spanish":null},"Glas::Material_Farbe":{"english":"Color - Lithics / Obsidian","spanish":null},"Putz::PS_PutzID":{"english":"ID Stucco","spanish":null},"Zeichnung_Keramik::Auto_ZeichnungKennung":{"english":null,"spanish":null},"Parties_Foto::[PartyTitle]":{"english":"Rights","spanish":"Derechos"},"Baubefund besondere Beobachtungen":{"english":"Other Observations","spanish":null},"Probe::KurzbeschreibungProbe":{"english":"Brief Description - Samples","spanish":null},"Probe::Nummer_Probe":{"english":"Sample No.","spanish":null},"Baubefund Bautechnik Bezeichnung":{"english":"Construction Method","spanish":null},"Datierung_Relief::AnfDatJh":{"english":null,"spanish":null},"Foto_Topos::KurzbeschreibungFoto":{"english":"Description","spanish":"Descripción"},"Koordinate_Steinobjekt::Genauigkeit":{"english":"Accuracy of Coordinate","spanish":"Precisión de Coordenadas"},"Temporary_GUI_Field":{"english":"Temporary GUI Field","spanish":"Campo Temporal GUI"},"FS_SteindenkmalID":{"english":"Foreign Key Stone Object","spanish":"Clave externa para objetos de piedra"},"Fundkollektion::Anzahl_SonstigeWare_Wand":{"english":"No. of Other Ware Wall","spanish":null},"Koordinate::Koordinatensystem":{"english":null,"spanish":null},"AnfMayaLongCountDat_1":{"english":"Longcount Date Start - Baktuns","spanish":"Cuenta Larga Inicio - Baktuns"},"AnfMayaLongCountDat_3":{"english":"Longcount Date Start - Tuns","spanish":"Cuenta Larga Inicio - Tuns"},"AnfMayaLongCountDat_2":{"english":"Longcount Date Start - Katuns","spanish":"Cuenta Larga Inicio - Katuns"},"AnfMayaLongCountDat_5":{"english":"Longcount Date Start - Kins","spanish":"Cuenta Larga Inicio - Kins"},"AnfMayaLongCountDat_4":{"english":"Longcount Date Start - Winals","spanish":"Cuenta Larga Inicio - Winals"},"XReliefszene_SteinObjektX 2::[ReliefszeneThematik]":{"english":"Iconography theme","spanish":"Tema de la iconografía"},"GrabNr":{"english":"Burial No. ","spanish":null},"KeramikScherbe::Hoehe":{"english":"Height - Individual Sherds","spanish":null},"Foto::KurzbeschreibungFoto":{"english":"Brief Description - Photo","spanish":null},"Survey_Keramik::FundstelleNr":{"english":"Group No.","spanish":null},"Ort_KreisRegion":{"english":"Archaeological Region","spanish":"Región Arqueológica"},"Siegel::Klassifizierung_ObjetartSpeziell":{"english":"Object Type Specif. - Seals","spanish":null},"Foto_Steinobjekt::KurzbeschreibungFoto":{"english":"Bief description of photo","spanish":"Descripción breve de la foto"},"Zeichnung_Steinobjekt::Zeichner":{"english":"Illustrator","spanish":"Illustrator"},"Bauglied::Beschreibung_Rückseite":{"english":"Back","spanish":"Dorso"},"Inschrift::PS_InschriftID":{"english":"Inscription primary key","spanish":"Clave primaria para inscripción"},"AnfDatZeitraum":{"english":null,"spanish":null},"Profil::PS_ProfilID":{"english":null,"spanish":null},"ArealKennung":{"english":null,"spanish":null},"Groesze_Breite":{"english":"Width","spanish":null},"Fundkollektion::temp_sonstige_profil":{"english":null,"spanish":null},"Fundkollektion::Anzahl_Keramik_Rand":{"english":"No. of Rim Sherds","spanish":null},"Zeichnung::Nummer_Zeichnung":{"english":null,"spanish":null},"Survey_Topos::PS_SurveyID":{"english":"Serial Number","spanish":"Número de Serie"},"Ort_NameAntik":{"english":"Name (ancient)","spanish":"Nombre (antiguo)"},"Verputz: Feinputz Zuschlag":{"english":"Additives Fine  Stucco","spanish":null},"Ausgrabung::KurzbeschreibungAusgrabung":{"english":"Brief Description - Unit","spanish":"Descripción breve - Unidad"},"Bestandteile_Mauer::Material":{"english":"Material","spanish":null},"PS_RaumID":{"english":"ID Room","spanish":null},"Survey_Keramik::KurzbeschreibungSurvey":{"english":"Brief Description - Survey","spanish":null},"Foto_Keramik::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"Steinobjekt_Fundort::PS_SteinobjektID":{"english":"ID Stone Object","spanish":null},"Baubefund Mörtelzuschlaganteil":{"english":"Mortar Additives Proportion","spanish":null},"Datierung_Steinobjekt::AnfDatvn":{"english":"BC/AD (inital date)","spanish":"a.C./d.C. (fecha inicial)"},"Foto_Areal::Projekt":{"english":"Project","spanish":"Proyecto"},"Fundkollektion::Anzahl_insgesamt":{"english":"Quantity - Total","spanish":null},"Dekoration_Inschrift::PS_DekorationID":{"english":"ID Decoration","spanish":"Decoración ID"},"Zeichnung_Steinobjekt::Zeichnung_Art":{"english":"Drawing type","spanish":"Tipo de dibujo"},"Groesze_Volumen":{"english":"Volume of Vessel(s)","spanish":null},"Zeichnung_Ausgrabung::Auto_ZeichnungKennung":{"english":null,"spanish":null},"Grab_Datum_FreilegungEnd":{"english":"to","spanish":null},"[Doku_Ausgrabung_Anzahl]":{"english":"Number of Excavations","spanish":null},"Putz::Anzahl_aufgehoben":{"english":"Total Number of Stucco collected","spanish":null},"Fundkollektion::Erhaltung_Zustand":{"english":"Condition","spanish":null},"Grabfund_Nr":{"english":"Excavation number","spanish":"Número de excavación"},"Verputz: 2. Unterputz Anteil":{"english":"Proportion 2nd Underlayer of Stucco","spanish":null},"Bauwerk_Steinobjekt::KurzbeschreibungBauwerk":{"english":"Structure description","spanish":"Descripción de estructura"},"FigurePose":{"english":"Figure Pose","spanish":"Pose de la figura"},"Befund_Keramik::Auto_BefundKennung":{"english":"Feature No. - Provenience","spanish":null},"Vegetation":{"english":"Vegetation","spanish":null},"Auto_Doku_Zeichnung_vorhanden":{"english":"Existing drawings?","spanish":"Existen dibujos?"},"Herkunft_Altfunde_BefAbhub":{"english":"Pile number","spanish":"Número de pila"},"Verputz: 1. Unterputz Anteil":{"english":"Proportion 1st Underlayer of Stucco","spanish":null},"Steinobjekt 2::PS_SteinobjektID":{"english":"Primary key of related sculpture","spanish":"Clave primaria para la escultura relacionada"},"Raum_Steinobjekt::KurzbeschreibungRaum":{"english":"Brief description of room","spanish":"Descripción breve de la pieza"},"Bauglied::Ornamentfries":{"english":"Ornamental frieze","spanish":"Friso ornamental"},"Inschrift 2::KurzbeschreibungInschrift":{"english":"Brief Description Inscription (Comparison)","spanish":"Breve descripción de la inscripción (Comparación)"},"Fundkollektion::Anzahl_FeinWare_Profil":{"english":"No. of Fine Ware Profile","spanish":null},"[Doku_Fotos_Anzah]":{"english":"Number of Photos","spanish":"Número de Fotos"},"KurzbeschreibungRaum":{"english":"Brief Description","spanish":"Breve Descripción"},"Putz::Nummer_Fund":{"english":"Find No. - Stucco","spanish":null},"Profil::Klassifizierung":{"english":"Classification - Level","spanish":null},"Bauglied::Typus":{"english":"Type","spanish":"Tipo"},"DS_Bearbeiter":{"english":"DS Edited by","spanish":"Registro editado por"},"Projekt::Projekt_Kurzbeschreibung":{"english":null,"spanish":null},"Bauwerk_Inschrift::KurzbeschreibungBauwerk":{"english":"Brief Description Structure","spanish":"Descripción breve de estructura"},"Foto_Areal::Projekt_Nr":{"english":null,"spanish":null},"Grab_SkelettOrientierung":{"english":"Skeleton Orientation","spanish":null},"Anzahl_insgesamt":{"english":"Total","spanish":"Total"},"Topos::Ort_Provinz":{"english":"Department","spanish":"Departamento"},"Mauer Bautechnik_Konstruktion":{"english":"Construction","spanish":null},"Boden_Moertelkonsistenz":{"english":"Mortar Consistency","spanish":null},"Datierung_Grab::AnfPraezise":{"english":"Precise Date Start","spanish":"Fecha Precisa Inicio"},"Datierung_Inschrift::AnfDatJh":{"english":null,"spanish":null},"EndEpoche":{"english":"Period","spanish":"Período"},"Verputz: 1. Unterputz Stärke":{"english":"Thickness 1st Underlayer of Stucco","spanish":null},"XPlanquadratX::Rechts_Hoch":{"english":"Map Quadrant","spanish":null},"Topos_Grab::Ort_NameModern":{"english":"Archaeological Site","spanish":null},"Datierung::AnfPhase":{"english":"Ceramic Phase Begin","spanish":"Fase Cerámica Inicio"},"Datierung_Relief::Grundlage":{"english":"Based upon","spanish":"Basado en"},"KurzbeschreibungTopos":{"english":"Site Name","spanish":"Denominación "},"Koordinate_Topos::Y_Wert":{"english":"Easting / Y","spanish":"Este / Y"},"Datierung::AnfPraezise":{"english":"Precise Date Begin","spanish":"Fecha Precisa Inicio"},"Breite":{"english":"Width","spanish":null},"Grabungsverlauf":{"english":"Sequence of Excavation","spanish":null},"Zeichnung_Areal::Auto_ZeichnungKennung":{"english":null,"spanish":null},"Masze_Hoehe_Plattform":{"english":"Height/Depth Platform","spanish":"Altura/Profundidad de la Plataforma"},"Klassifizierung":{"english":"Classification","spanish":"Clasificación"},"Anzahl_Raeume":{"english":"No. of Rooms","spanish":"Número de piezas"},"Datierung_Inschrift::AnfPraezise":{"english":"Precise Date Start","spanish":"Fecha Precisa Inicio"},"FS_KeramikID":{"english":"Foreign Key Ceramic","spanish":"Clave externa para cerámica"},"Bauwerk_Grab::Auto_BauwerkKennung":{"english":null,"spanish":null},"Geschichte_Antik":{"english":"Ancient History","spanish":"Historia Antigua"},"Auto_SurveyKennung":{"english":"Existing 3D Models?","spanish":null},"Literaturzitat_Topos::[Literaturzitat]":{"english":"Text References","spanish":"Referencia de Texto"},"Kontext Copy":{"english":null,"spanish":null},"Grabungsumfang":{"english":"Type of Unit","spanish":"Tipo de unidad"},"Masze_HoeheGesamt":{"english":"Maximum height (cm)","spanish":"Altura máxima (cm)"},"Fundumstände":{"english":"Comments","spanish":null},"Schicht_Bodenart":{"english":"Soil Type","spanish":null},"DS_Erstellungsdatum":{"english":"DS Created on","spanish":"Registro creado en"},"AnfPraezise_Praefix":{"english":"Starting Year ","spanish":"Año de inicio"},"Reliefszene_ThemeMotif::MotivTypeGeneral":{"english":"Related Motifs - General Motif","spanish":"Motivos relacionados - Motivo general"},"Koordinate_Steinobjekt::Y_Wert":{"english":"Easting/Y","spanish":"Este/Y"},"Topos_Ausgrabung::KurzbeschreibungTopos":{"english":"Archaeological Site","spanish":null},"EndDatZeitraum":{"english":null,"spanish":null},"Projekt::Akteur_Institution":{"english":"Project institution","spanish":"Institución de Proyecto"},"Mauer Mörtelkonsistenz":{"english":"Mortar Consistency","spanish":null},"Katasterlage":{"english":"Cadastre Location","spanish":null},"[Areale_Anzahl]":{"english":"Number of Sub-Ops","spanish":"Número de Sub-Ops"},"Bauglied::Provenienz":{"english":"Workshop","spanish":"Taller"},"Niveau Obergrenze":{"english":"Highest Elevation","spanish":null},"Mauer Füllung Bemerkung":{"english":"Comments on Core/filling materials","spanish":null},"Gebaeudephase":{"english":null,"spanish":null},"Bestandteile_Fußboden::Anteil_Prozent":{"english":"Proportion (in %)","spanish":null},"Schicht_Menge_Schluff":{"english":"Silt","spanish":null},"Ziegel::[Kurzinfo]":{"english":null,"spanish":null},"Bauwerk::Bautyp":{"english":"Type of Structure","spanish":null},"LageImRaum":{"english":"Position in Environment","spanish":null},"Wert_Unterkante":{"english":"Niv. UK","spanish":null},"Foto_Editiert_Datum":{"english":"Edited on","spanish":"Editado en"},"Foto::PS_FotoID":{"english":null,"spanish":null},"Befund::Grobdatierung Befund":{"english":"Approx. Date","spanish":"Fecha aproximada"},"Foto_Ausgrabung::KurzbeschreibungFoto":{"english":"Brief Description","spanish":"Breve Descripción"},"FS_RaumID":{"english":"Foreign key for Room Table","spanish":"Clave externa para tabla de pieza"},"Areal::Auto_ArealKennung":{"english":null,"spanish":null},"FS_TestID":{"english":"Foreign Key Test","spanish":null},"Form_Beschreibung":{"english":"Vessel - Free Description of Form","spanish":null},"Ausgrabung 2::KurzbeschreibungAusgrabung":{"english":"Brief Description - Associated Excavation","spanish":"Descripción breve - Excavación asociada"},"Aufbewahrung_Negative_Zusatz":{"english":"Roll No.","spanish":"Número de Carrete "},"Datierung_Steinobjekt::AnfCopanRuler":{"english":"Copan Ruler (Begin)","spanish":"Gobernante de Copán (Inicio)"},"Oberfläche_Behandlung_außen":{"english":"Surface Treatment - Outside","spanish":null},"Foto_Keramik::Vorlagenart":{"english":null,"spanish":null},"Datierung_Inschrift::EndDatZeitraum":{"english":null,"spanish":null},"Farbreste":{"english":"Pigments","spanish":"Pigmentos"},"Sonstiges Klassifizierung":{"english":"Classification - Other","spanish":null},"Glas::KurzbeschreibungGlas":{"english":"Brief Description - Lithics / Obsidian","spanish":null},"Befund::Auto_BefundKennung":{"english":null,"spanish":null},"Sichtbarkeit":{"english":"Visibility %","spanish":null},"Maya_Treppe_Stufenanzahl":{"english":"No. of Steps","spanish":"Número de escalónes"},"TonBestandteile_Keramik::Art":{"english":"Name - Temper Components","spanish":null},"FS_SiegelID":{"english":"Foreign Key Seal","spanish":"Clave externa para sello"},"Copan_Klassifizierung":{"english":"Copan Type Classification","spanish":null},"Boden_natuerlich_kuenstlich":{"english":"Formation - Floor","spanish":null},"Ausgrabung::[Ort]":{"english":"Excavation","spanish":null},"Form_Koerper":{"english":"Vessel Form - Body","spanish":null},"Schicht_Menge_Ton":{"english":"Clay","spanish":null},"Fundkollektion::temp_grob_profil":{"english":null,"spanish":null},"Mauer Füllung Charakteristik":{"english":"Wall Core/Filling Characteristics","spanish":null},"Datum_FreilegungBeginn":{"english":"Unearthing from","spanish":null},"Foto_Relief::Projekt_Nr":{"english":null,"spanish":null},"Aufbewahrung_Status":{"english":"Curation status","spanish":"Estado de curaduría"},"Baubefund Baumaterial Spolien":{"english":"Spoils / Re-used Material","spanish":null},"Fundkollektion::Anzahl_GrobeWare_Wand":{"english":"No. of Coarse Ware Wall","spanish":null},"Bestandteile_Mauer::Groesze_Max":{"english":"max. size (cm)","spanish":null},"Grab_AnzahlIndividuen":{"english":"Number of Individuals","spanish":null},"Boden Klassifizierung":{"english":"Classification - Floor","spanish":null},"Datierung_Relief::EndPhase":{"english":"Ceramic Phase End","spanish":"Fase Cerámica Fin"},"Verputz: Älterer Putz":{"english":"Older Stucco","spanish":null},"Ort_Provinz":{"english":"Department","spanish":"Departamento"},"Funddatum":{"english":"Date of discovery","spanish":"Fecha de descubrimiento"},"XReliefszene_SteinObjektX 2::[IconographyKurzbeschreibung]":{"english":"Brief description of iconography","spanish":"Descripción breve de la iconografía"},"Maya_Vaulted":{"english":null,"spanish":null},"Erhaltung_Gewicht":{"english":"Weight of Sherds","spanish":null},"Fundkollektion::Mengeqm":{"english":"Artifacts / m2","spanish":null},"EndCopanRuler":{"english":"Copan Ruler (End)","spanish":"Gobernante de Cópan (Fin)"},"Temp_PhotoNegative":{"english":"Photo negative (temporary field)","spanish":"Negativo fotográfico"},"Auto_Inschriftnummer":{"english":null,"spanish":null},"Mauer StoryLevel":{"english":"Story / Level","spanish":null},"Keramik::Art":{"english":"Type - Ceramics ","spanish":null},"Akteur_Institution":{"english":"Institution","spanish":"Institución"},"AlternativeBezeichnung":{"english":null,"spanish":null},"Form_Rand":{"english":"Vessel Form - Rim","spanish":null},"MotifTypeSpezVal":{"english":null,"spanish":null},"[Doku_Zeichnung_Anzahl]":{"english":"Number of drawings","spanish":"Número de dibujos"},"PS_ProjektID":{"english":"Project ID","spanish":"Proyecto ID"},"XReliefszene_SteinObjektX 2::[IconographyNummerSzene]":{"english":"Iconography number","spanish":"Número de la iconografía"},"Kulturpflanzen":{"english":"Cultivated Plants","spanish":null},"KeramikScherbe::Gewicht":{"english":"Weight  - Individual Sherds","spanish":null},"Keramik::Form":{"english":"Form - Ceramics","spanish":null},"Keramik::Anzahl_Fu?":{"english":"No. of Base Sherds","spanish":null},"PS_ArealID":{"english":"ID Areal","spanish":"Zona ID"},"EndTerminus":{"english":null,"spanish":null},"Lage_Ost":{"english":"East","spanish":"Oriente"},"Fundmaterial_Sonstige_Objekte":{"english":"Other Find Types","spanish":null},"Verputz: Malschicht":{"english":"Paint/ Stucco Layer","spanish":null},"Glas::Nummer_Fund":{"english":"Find No. - Lithics / Obsidian","spanish":null},"Datierung_Steinobjekt::AnfPhase":{"english":"Ceramic phase (initial date)","spanish":"Fase Cerámica (fecha inicial)"},"Dekoration_Reliefszene::PS_DekorationID":{"english":null,"spanish":null},"Mauer Bautechnik_Verband":{"english":"Band","spanish":null},"Grab_sekundaereBestattung":{"english":"Secondary Burial(s)?","spanish":null},"Zeichnung_Areal::Projekt":{"english":"Project","spanish":"Proyecto"},"Vergleich":{"english":null,"spanish":null},"FS_BauwerkID":{"english":"Foreign key for Structure Table","spanish":"Clave externa para tabla de estructura"},"Auto_Klassifizierung_ohne_Befundart":{"english":"Feature Type","spanish":null},"Koordinate_Steinobjekt::GeoDatum_Easting":{"english":"Longitude/E","spanish":"Longitud / O"},"Bauordnung":{"english":null,"spanish":null},"Masze_Durchmesser":{"english":"Diameter Superstructure","spanish":"Diámetro de la Superestructura "},"KurzbeschreibungKeramik":{"english":"Brief Description","spanish":"Breve Descripción"},"Datei_DB_Name":{"english":"Database File: Name","spanish":"Archivo de base de datos: Nombre "},"FestDat":{"english":"Dating Certain/Dating Uncertain","spanish":"Datación segura/Datación insegura"},"Foto_Topos::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"Bauglied::Motive_Geometrisch":{"english":"Geometric motif","spanish":"Motivos geométricos"},"Strasze_Topos::Straszentyp":{"english":"Type","spanish":"Tipo"},"Copan_OtherName":{"english":null,"spanish":null},"Maya_Phase":{"english":"No. of Constr. Phases","spanish":"Número de fases de construcción"},"Datierung_Relief::EndDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Oberfläche_Überzug_Farbe_außen":{"english":"Coat Color - Outside","spanish":null},"Koordinate::Datum":{"english":null,"spanish":null},"Foto_Keramik::Projekt_Nr":{"english":null,"spanish":null},"Temp_AssocStructure":{"english":"Associated structure","spanish":"Estructura asociada"},"SonstigerFund::KurzbeschreibungSonstigerFund":{"english":"Brief Description - Other Finds","spanish":null},"Bauwerk_Areal::PS_BauwerkID":{"english":"Structure ID","spanish":"Estructura ID"},"Abhub::Kurzbeschreibung_Abhub":{"english":"Short Description - Lot","spanish":null},"Bauglied::Profil_Form":{"english":"Profile","spanish":"Perfil"},"KeramikScherbe::Staerke":{"english":"Thickness - Individual Sherds","spanish":null},"Datierung::PS_DatierungID":{"english":null,"spanish":null},"Ton_Farbe_Auszen":{"english":"Outside Color","spanish":null},"Autor":{"english":"After Author","spanish":"Por el autor"},"Qualitaet":{"english":"Situation","spanish":null},"Bauglied::Dekorationsart1":{"english":"Structural element","spanish":"Elemento estructural"},"Bauglied::Dekorationsart2":{"english":"Type of decoration","spanish":"Tipo de decoración"},"Befund_Keramik::KurzbeschreibungBefund":{"english":"Brief Description - Feature","spanish":null},"Oberfläche_Struktur_außen":{"english":"Surface Structure - Outside","spanish":null},"Erhaltung_Grapheme_Logographisch":{"english":"Logograph","spanish":"Logograma"},"Nummer_Katalog":{"english":"CPN","spanish":"CPN"},"Probe::Material":{"english":"Material - Samples","spanish":null},"Bestandteile_Sonstige::Format":{"english":"Formats","spanish":null},"FS_PutzID":{"english":"Foreign Key Stucco","spanish":"Clave externa para estuco"},"Foto_Inschrift::Teilprojekt":{"english":null,"spanish":null},"Groesze_Dm_Bauch":{"english":"max. Dia.","spanish":null},"Profil::Auto_ProfilKennung":{"english":"Level ID","spanish":null},"BohrlochSchicht_Keramik::KurzbeschreibungBohrlochSchicht":{"english":"Brief Description - Drill Hole Layer","spanish":null},"Auto_Doku_Fotos_Anzahl":{"english":"No. of Photos","spanish":null},"BearbeitungenAntik":{"english":"Historical treatment","spanish":"Tratamiento histórico"},"Mauer Klassifizierung AuszenInnen":{"english":"Exterior or Interior Wall?","spanish":null},"Datierung_Steinobjekt::EndPraezise":{"english":"Precise date (end date)","spanish":"Fecha precisa (fecha final)"},"Mauer Füllung Baumaterial":{"english":"Wall Core/Filling","spanish":null},"Survey_Topos::FundstelleNr":{"english":"Group Number","spanish":"Número del Grupo"},"Fundkollektion::Anzahl_aufgehoben":{"english":"Collected - Total","spanish":null},"Boden besondere Beobachtungen":{"english":"Other Observations - Floor","spanish":null},"Areal::ArealNr":{"english":"Sub-Op. No.","spanish":"Sub-Op. No."},"Bauglied::Motive_Abstrakt":{"english":"Abstract motif","spanish":"Motivos abstractos"},"Anzahl_Wand":{"english":"No. of Wall Sherds","spanish":null},"Dekoration_Reliefszene::KurzbeschreibungDekoration":{"english":"Brief Description Decoration","spanish":"Descripción breve de decoración"},"Erhaltung_Grapheme_Syllabisch":{"english":"Grapheme No.","spanish":"Número de Grafema"},"Bohrloch_Keramik::Auto_BohrlochKennung":{"english":"Drill Hole No. ","spanish":null},"FS_SteinobjektID":{"english":"Foreign Key Stone Object","spanish":"Clave externa para objetos de piedra"},"Keramik::Dekoration_Art":{"english":"Decoration Type - Ceramics","spanish":null},"Literaturzitat_Steinobjekt::[Literaturzitat]":{"english":"Citation","spanish":"Citación"},"Auto_Doku_Mauern_vorhanden":{"english":"Existing Features?","spanish":"Existen paredes"},"Mauern_Kennzeichen":{"english":"Wall Characteristics","spanish":"Características del muro"},"Koordinate_Topos::Z_Wert":{"english":"Z (masl)","spanish":"Z (msnm)"},"Bauwerk::KurzbeschreibungBauwerk":{"english":"Brief Description - Structure","spanish":null},"Datierung_Relief::AnfPraezise":{"english":"Precise Date Start","spanish":"Fecha Precisa Inicio"},"Bautechnik":{"english":"Type of Masonry","spanish":"Técnica de construcción"},"Steinobjekt_Reliefszene::Nummer_Katalog":{"english":"ID Stone Object","spanish":"Objeto de piedra ID"},"Befund_Grab::Grobdatierung Befund":{"english":"Burial Elements - Rough Dating","spanish":null},"Survey_Ausgrabung::FundstelleNr":{"english":"Group No. ","spanish":null},"Datum_AusgrabungBeginn":{"english":"Start Date","spanish":"Fecha Inicial"},"BautypSpeziell":{"english":"Special Elements","spanish":"Elementos especiales"},"Ausgräber":{"english":"Project Director","spanish":"Dirección"},"PrimaryPhoto":{"english":"Primary Photo","spanish":"Foto primaria"},"Putz::Klassifizierung":{"english":"Classification - Stucco","spanish":null},"GattungTraeger":{"english":"Functional category","spanish":"Categoría funcional"},"Zeichnung_Ausgrabung::Teilprojekt":{"english":null,"spanish":null},"Zeichnung_Inschrift::KurzbeschreibungZeichnung":{"english":"Brief Description Drawing","spanish":"Breve descripción del dibujo"},"Foto_Areal::Nummer_DigitalBild":{"english":"Photo Number","spanish":"Número del foto"},"XReliefszene_SteinObjektX 2::[IconographyMotifTypeGen]":{"english":"Iconography general motif type","spanish":"Iconografía tipo general de los motivos"},"Verputz: Feinputz Farbe":{"english":"Color Fine Stucco","spanish":null},"SonstigerFund::Material":{"english":"Material - Other Finds","spanish":null},"Wand::Steinblock_Oberflächenbearbeitung":{"english":"Treatment of Face-/Front Side of Blocks of Stone","spanish":null},"Zeichnung_Keramik::Projekt_Nr":{"english":null,"spanish":null},"Keramik::Gattung":{"english":"Classification - Ceramics","spanish":null},"Datierung_Grab::EndPhase":{"english":"Ceramic Phase End","spanish":"Fase Cerámica Fin"},"[MotifType]":{"english":null,"spanish":null},"Fundkollektion::Fundkiste":{"english":"Curation Site - Box","spanish":null},"Literaturzitat::[Literaturzitat]":{"english":"Text References","spanish":"Referencias de Texto"},"Fundbearbeitung_abgeschlossen":{"english":"Find-work finished ?","spanish":null},"XReliefszene_SteinObjektX 2::[ReliefszeneTheme_Composition_Mode]":{"english":"Iconography mode","spanish":"Modo de iconografía"},"Sonstiges":{"english":"Other","spanish":null},"[Ueberschrift1]":{"english":null,"spanish":null},"Steinartefakt::Anzahl_insgesamt":{"english":"Total No. of Other Lithics","spanish":null},"Steinobjekt_Fundort::Auto_Objektnummer":{"english":null,"spanish":null},"BauwerkNr":{"english":"Structure No.","spanish":"Número de Estructura"},"Koordinate_Keramik::Z_Wert":{"english":"Z (masl)","spanish":"Z (msnm)"},"EndPraezise_Praefix":{"english":"Ending Year","spanish":"Año de finalización"},"Boden Beschreibung":{"english":"Description - Floor","spanish":null},"Maya_Versteck_Ort":{"english":"Location","spanish":"Ubicación"},"[Ueberschrift2]":{"english":null,"spanish":null},"SonstigerFund::PS_SonstigerFundID":{"english":"ID Other Finds","spanish":null},"Zeichnung_Relief::Projekt":{"english":"Project","spanish":"Proyecto"},"Fundkollektion::Groesze_Bezugsflaeche":{"english":"Surface / Volume","spanish":null},"Bestandteile_Fußboden::Format":{"english":"Formats","spanish":null},"Steinobjekt::PS_SteinobjektID":{"english":"ID Stone Artifact","spanish":"Artefacto de piedra ID"},"Steinobjekt_Reliefszene::KurzbeschreibungSteinobjekt":{"english":"Brief Description Stone Object","spanish":"Descripción breve de objeto de piedra"},"SideSurfaceAreaB":{"english":"Side B area (m²)","spanish":"Superficie lado B (m²)"},"SideSurfaceAreaA":{"english":"Side A area (m²)","spanish":"Superficie lado A (m²)"},"Lage_Fundhoehe_Bezugspunkt":{"english":"Refer. Point","spanish":null},"[Position]":{"english":null,"spanish":null},"Lampen::PS_LampenID":{"english":"ID Manos / Metates","spanish":null},"Datierung::EndDatJh":{"english":null,"spanish":null},"Keramik::Anzahl_Lippe":{"english":"No. of Rim Sherds","spanish":null},"Datierung_Keramik::EndPhase":{"english":"Ceramic Phase End","spanish":"Fase Cerámica Fin"},"Oberfläche_Behandlung_innen":{"english":"Surface Treatment - Inside","spanish":null},"Survey_Keramik::Copan_SubCommunity":{"english":"Group","spanish":null},"Fundmaterial_gefunden":{"english":"Found","spanish":null},"Topos::Ort_Land":{"english":"Country","spanish":"País"},"Sonstiges Klassifizierung Sonstiges":{"english":"Other Classification - Other","spanish":null},"Strasze_Areal::Straszentyp":{"english":"Type of Plaza","spanish":"Tipo de plaza"},"Ausrichtung_Grad":{"english":"Degrees","spanish":"Grados"},"Datierung_Keramik::EndDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"SideSurfaceAreaC":{"english":"Side C area (m²)","spanish":"Superficie lado C (m²)"},"SideSurfaceAreaD":{"english":"Side D area (m²)","spanish":"Superficie lado D (m²)"},"Arbeitsstand":{"english":"Status of Registration","spanish":null},"nachantik":{"english":null,"spanish":null},"Sonstiges Beschreibung":{"english":"Description - Other","spanish":null},"Untersuchungsmethode":{"english":"Investigation Method(s)","spanish":null},"Befund_Bauwerk::PS_BefundID":{"english":"ID","spanish":"ID"},"FS_TontafelID":{"english":"Foreign Key Clay Tablet","spanish":"Clave externa para tablillas de barro"},"Foto_Relief::Projekt":{"english":"Project","spanish":"Proyecto"},"SurfaceAreaIconography":{"english":"Iconography area (m²)","spanish":"Superficie de la iconografía (m²)"},"Zeichnung::Zeichnung_Art":{"english":"Type","spanish":"Tipo"},"Verputz: Erhaltung":{"english":"Stucco Proportion","spanish":null},"PS_SteinobjektID":{"english":"Primary key of stone object","spanish":"Clave principal de objeto piedra"},"DAI_KF05_Freigabe":{"english":"KF05: Access","spanish":"KF05: Acceso"},"Profil::KurzbeschreibungProfil":{"english":"Short Description - Level","spanish":null},"FigureType":{"english":"Figure Type","spanish":"Tipo de figura"},"Befund_Keramik::[Klassifizierung]":{"english":"Feature Type - Provenience","spanish":null},"Siegel::Anzahl_insgesamt":{"english":"Total Number of Seals ","spanish":null},"Metall::KurzbeschreibungMetall":{"english":"Brief Description - Metal","spanish":null},"Foto_Ausgrabung::Fotodatum":{"english":"Year","spanish":"Año"},"Mollusken::Anzahl_ingesamt":{"english":"Total Number of Shells ","spanish":null},"Survey::PS_SurveyID":{"english":null,"spanish":null},"Glas::Anzahl_insgesamt":{"english":"Total Number of Lithics / Obsidian ","spanish":null},"BeschreibungBauwerk":{"english":"Structure Description","spanish":"Descripción de la estructura"},"Theme_Composition_Field":{"english":"Composition","spanish":"Composición"},"Grundlage":{"english":"Based On","spanish":"A base de"},"AusgrabungNr":{"english":"Number","spanish":"Número"},"Probe::Auto_ProbeKennung":{"english":null,"spanish":null},"Temporary_GUI_field":{"english":"GUI notes (temporary field)","spanish":"Notas GUI"},"PS_AusgrabungID":{"english":"ID Unit","spanish":null},"Bauwerk_Reliefszene::KurzbeschreibungBauwerk":{"english":"Brief Description Structure","spanish":"Descripción breve de estructura"},"Datierung_Relief::EndCopanRuler":{"english":"Copan Ruler (End)","spanish":"Gobernante Copán (Fin)"},"Ort_Land":{"english":"Country","spanish":"País"},"Auto_AusgrabungKennung":{"english":"ID Associated Excavation","spanish":"ID de excavaciónes asociadas"},"FS_MolluskenID":{"english":"Foreign Key Shells","spanish":"Clave externa para Conchas"},"Auto_Doku_3DModel_vorhanden":{"english":"Existing 3D models?","spanish":"Existen modelos 3D?"},"Wand::Mauerseite":{"english":"Side of Wall","spanish":null},"FS_ProbeID":{"english":"Foreign Key Sample","spanish":"Clave externa para muestra"},"AnfApogee":{"english":"Beginning of Apogee","spanish":"Comienzo de Apogeo"},"Zeichnung_Relief::Zeichnung_Art":{"english":"Type","spanish":"Tipo"},"Koordinate_Keramik::Genauigkeit":{"english":"Accuracy of Coordinate","spanish":"Precisión de Coordenadas"},"Wand::Ergaenzung Mauertechnik":{"english":"Addition masonry technique","spanish":null},"Ort_NameModern":{"english":"Town / City Name","spanish":"Ciudad"},"Schicht Klassifizierung Sonstiges":{"english":"Other Classifications - Level","spanish":null},"Oberfläche_Staerke_innen":{"english":"Coat thickn. - Inside","spanish":null},"Foto_Inschrift::Vorlagenart":{"english":null,"spanish":null},"Wand::PS_WandID":{"english":"ID Wall","spanish":null},"Zeichnung_Topos::Zeichnung_Art":{"english":"Type","spanish":"Tipo"},"Datierung::[Datierung_kurz]":{"english":null,"spanish":null},"FS_AusgrabungID":{"english":"Foreign Key Excavation","spanish":null},"Projekt::Akteur_Director":{"english":"Project Director","spanish":"Dirección"},"KurzbeschreibungBauwerk":{"english":"Brief Description","spanish":"Breve Descripción"},"Datierung_Steinobjekt::EndDatvn":{"english":"BC/AD (end date)","spanish":"a.C./d.C. (fecha final)"},"EndDatvn":{"english":"BC/AD","spanish":"a.C./d.C. "},"Datierung_Keramik::AnfPraezise":{"english":"Precise Date Start","spanish":"Fecha Precisa Inicio"},"Datierung::Gebaeudephase":{"english":null,"spanish":null},"Ausgrabung 2::Auto_AusgrabungKennung":{"english":null,"spanish":null},"KurzbeschreibungSurvey":{"english":"Brief Desc./Alias","spanish":null},"Fundkollektion::Anzahl_Keramik_Sonstiges":{"english":"No. of Other Sherds","spanish":null},"Foto_Steinobjekt::Fotograf":{"english":"Photographer","spanish":"Fotógrafo"},"Datierung_Steinobjekt::AnfMayaLongCountDat_1":{"english":"Longcount Date Start - Baktuns","spanish":"Cuenta Larga Inicio - Baktuns"},"Datierung_Steinobjekt::AnfMayaLongCountDat_3":{"english":"Longcount Date Start - Tuns","spanish":"Cuenta Larga Inicio - Tuns"},"Datierung_Steinobjekt::AnfMayaLongCountDat_2":{"english":"Longcount Date Start - Katuns","spanish":"Cuenta Larga Inicio - Katuns"},"Nummer_Befund":{"english":"Feature No.","spanish":null},"Datierung_Steinobjekt::AnfMayaLongCountDat_5":{"english":"Longcount Date Start - Kins","spanish":"Cuenta Larga Inicio - Kins"},"Datierung_Steinobjekt::AnfMayaLongCountDat_4":{"english":"Longcount Date Start - Winals","spanish":"Cuenta Larga Inicio - Winals"},"Mauer Mörtelzuschlaganteil":{"english":"Mortar Additives Proportion ","spanish":null},"Lage_Einmessung_Bezug1":{"english":"Reference point one","spanish":"Punto de referencia uno"},"Laufzeit_Ende":{"english":"End Date","spanish":"Fecha Final"},"Datierung_Steinobjekt::AnfPraezise":{"english":"Precise date (initial date)","spanish":"Fecha precisa (fecha inicial)"},"Projekt 2::Projekt_Kurzbeschreibung":{"english":"Project","spanish":"Proyecto"},"[Ausgrabungen_Anzahl]":{"english":"Number of Units","spanish":"Número de Unidades"},"Niveau Untergrenze":{"english":"Lowest Elevation","spanish":null},"Laufzeit_Beginn":{"english":"Start Date","spanish":"Fecha Inicial"},"Seriennummer_ObjektFoto::Auto_Datenbank":{"english":null,"spanish":null},"KurzbeschreibungReliefszene":{"english":"Brief Description","spanish":"Breve Descripción"},"Koordinate::X_Wert":{"english":"Northing / X","spanish":"Norte / X"},"Dekoration::PS_DekorationID":{"english":"Decoration primary key","spanish":"Clave primaria para decoración"},"Lage_Einmessung_Bezug2":{"english":"Reference point two","spanish":"Punto de referencia dos"},"Ton_Bemerkung":{"english":"Comment - Clay","spanish":null},"Lage_ungestoert":{"english":"Context undisturbed?","spanish":"Contexto no perturbado?"},"Steinobjekt_Zuweisung::Auto_Objektnummer":{"english":null,"spanish":null},"Foto_Ausgrabung::Teilprojekt":{"english":null,"spanish":null},"Auto_Grabkennung":{"english":"Indentifier Burial","spanish":null},"Datei_Original_Pfad":{"english":"Path","spanish":"Red"},"Baumaterialien":{"english":"Construction Material","spanish":"Materiales de construcción"},"Zeichnung_Keramik::KurzbeschreibungZeichnung":{"english":"Brief Description - Drawing","spanish":null},"Bauglied::Position":{"english":"Specific position on structure","spanish":"Posición específica sobre la estructura"},"Lage_Beschreibung":{"english":"Description of Situation","spanish":"Descripción de la situación/ubicación"},"AnfDatJh":{"english":null,"spanish":null},"XReliefszene_SteinObjektX 2::[ReliefszeneKurzbeschreibungRelatedTheme]":{"english":"Motif is part of theme","spanish":"El motivo es parte del tema"},"temp_arachne-export":{"english":"temp_arachne-export","spanish":null},"Survey_Areal::PS_SurveyID":{"english":null,"spanish":null},"Grab_beigabenführend":{"english":"With Grave Goods?","spanish":null},"Projekt_Kennung":{"english":"Project Acronym","spanish":"Acrónimo del Proyecto"},"Reliefszene_Survey::Nummer_Szene":{"english":null,"spanish":null},"Strasze_Areal::PS_StraszeID":{"english":"ID Plaza","spanish":"Plaza ID"},"Bauglied::Beschreibung":{"english":"Complete structural element","spanish":"Estructura completa de elemento "},"Dekoration_Qualitaet":{"english":"Decoration Quality - Surface Coat","spanish":null},"Fundmaterial_gesucht":{"english":"Surveyed ?","spanish":null},"Fundkollektion::PS_FundkollektionID":{"english":"ID Collection","spanish":null},"PS_ReliefszeneID":{"english":"ID Iconography","spanish":"Iconografía ID"},"Koordinate_Steinobjekt::Koordinatensystem_Zone":{"english":"UTM zone","spanish":"Zona UTM"},"Schicht Unterscheidungskriterien":{"english":"Strata or arbitrary levels contained within Level","spanish":null},"Wasservorkommen":{"english":"Water Sources","spanish":null},"Bestattungen_Anzahl":{"english":"No. of Human Deposits","spanish":null},"Datierung::EndEpoche":{"english":"Period End","spanish":"Época Fin"},"Fotodatum":{"english":"Photo Date ","spanish":"Fecha de foto"},"Bauglied::Aufgehendes":{"english":"Rising elements","spanish":"Elementos elevados"},"Befund::Niveau Obergrenze":{"english":"Upper Level","spanish":"Nivel Superior"},"Fundkollektion::Gewicht_Keramik_Boden":{"english":"Weight of Base Sherds","spanish":null},"Projekt":{"english":"Project","spanish":"Proyecto"},"Sonstiges besondere Beobachtungen":{"english":"Other Observations - Other","spanish":null},"Lage":{"english":"Topographic Position","spanish":"Posición Topográfica"},"Steinobjekt_Zuweisung::PS_SteinobjektID":{"english":"ID Stone Object (All.)","spanish":null},"Reliefszene_Survey::KurzbeschreibungReliefszene":{"english":null,"spanish":null},"Magerung_Farbe_Munsell":{"english":"Munsell No. - Temper","spanish":null},"Keramik 2::PS_KeramikID":{"english":"ID Ceramic - Comparisons","spanish":null},"Datierung_Steinobjekt::EndCopanRuler":{"english":"Copan ruler (End)","spanish":"Gobernante de Copán (Fin)"},"Anzahl_Henkel":{"english":"No. of Handle Sherds","spanish":null},"[Fotoangaben]":{"english":null,"spanish":null},"Koordinate_Areal::Uhrzeit":{"english":null,"spanish":null},"Wand::Verputz 1. Unterputz Anteil":{"english":"Proportion 1st Underlayer of Stucco","spanish":null},"Baubefund Mörtelzuschlag":{"english":"Mortar Additives","spanish":null},"Ort_modern":{"english":"Place","spanish":"Lugar"},"Survey_Areal::Copan_SubCommunity":{"english":"Sub Community","spanish":"Sub Comunidad"},"Mauer Klassifizierung":{"english":"Classification - Wall","spanish":null},"Datierung_Inschrift::AnfEpoche":{"english":"Period Start","spanish":"Época Inicio"},"XReliefszene_SteinObjektX 2::[IconographyRelevanteSeiteZwei]":{"english":"Relevant side of iconography 2","spanish":"Lado relevante de la iconografía 2"},"Nummer_Inschrift":{"english":"CPN Number","spanish":"Número CPN"},"Grab_Altgrabung":{"english":"Old Excavation?","spanish":null},"Fundkollektion::Datierung_Grobdatierung_Anf":{"english":"Dating","spanish":null},"Datierung_Relief::AnfDatvn":{"english":"BC or AD","spanish":"a.C. o d.C. "},"Aufbewahrung_Negative":{"english":null,"spanish":null},"Arealart":{"english":null,"spanish":null},"Fundkollektion::Gewicht_Keramik_Rand":{"english":"Weight of Rim Sherds","spanish":null},"Architekt":{"english":null,"spanish":null},"Raum::PS_RaumID":{"english":"Room ID ","spanish":"Pieza ID"},"Survey_Topos::Copan_SubCommunity":{"english":"Group Name","spanish":"Nombre del Grupo"},"Bestandteile_Schicht::Anteil":{"english":"Proportion","spanish":null},"Areal 2::PS_ArealID":{"english":"Serial ID","spanish":"Número de Serie"},"Befund_Grab::Befundart":{"english":"Burial Elements - Classification","spanish":null},"Foto_Ausgrabung::Nummer_DigitalBild":{"english":"Photo Number","spanish":"Número del Foto"},"Keramik 2::Auto_Objektnummer":{"english":null,"spanish":null},"Oberfläche_Überzug_Farbe_innen_Munsell":{"english":"Coat Color - Inside","spanish":null},"Strasze_Areal::Auto_StraszeKennung":{"english":null,"spanish":null},"Text_Lesbarkeit":{"english":"Legibility","spanish":"Legibilidad"},"Thematik":{"english":"Theme","spanish":"Tema"},"Datierung::AnfCopanRuler":{"english":"Copan Ruler (Begin)","spanish":"Gobernante Copán (Inicio)"},"Lage_Einmessung_Distanz1":{"english":"Distance one","spanish":"Distancia uno"},"XSteindenkmalBauwerkRaumX::KommentarBauwerk":{"english":"Associated structure comments","spanish":"Comentarios acerca la estructura asociada"},"Bodenniveau_Hinweis":{"english":null,"spanish":null},"Lage_Einmessung_Distanz2":{"english":"Distance two","spanish":"Distancia dos"},"Verputz: 1. Unterputz Zuschlag":{"english":"Additives 1st Underlayer of Stucco","spanish":null},"ReliefszeneSelfRef::MotivTypeSpez":{"english":"Specific Motif","spanish":"Motivo específico"},"Mauer Steinblock_Form":{"english":"Shape of building block","spanish":null},"[PreciseDatePlusBCAD]":{"english":"Precise date","spanish":"Fecha precisa"},"Mollusken::PS_MolluskenID":{"english":"ID Shells","spanish":null},"Anzahl_aufgehoben":{"english":"Quantity collected","spanish":"Cantidad recogido"},"Maya_Funktion_Text":{"english":"Function Additional","spanish":"Función adicional"},"KurzbeschreibungAusgrabung":{"english":"Brief Description","spanish":"Breve Descripción"},"Ausgrabung::Altgrabung":{"english":"Old Excavation?","spanish":null},"Groesze_Sonstiges":{"english":"Other Measures","spanish":null},"Raum_Befund::PS_RaumID":{"english":null,"spanish":null},"Glas::Klassifizierung_ObjektartAllgemein":{"english":"Object Type - Lithics / Obsidian","spanish":null},"Datierung_Inschrift::EndEpoche":{"english":"Period End","spanish":"Época Fin"},"Bauglied::Unterbau":{"english":"Base","spanish":"Fundamento"},"Oberfläche_Überzug_Farbe_außen_Munsell":{"english":"Munsell No. Coat Color - Outside","spanish":null},"Bestattungsform":{"english":"Form of Burial","spanish":null},"Nummer_Befund_alternative":{"english":"Old / Previous No.","spanish":null},"Lampen::Anzahl_insgesamt":{"english":"Total Number of Manos / Metates ","spanish":null},"Keramik::Anzahl_Scherben_insgesamt":{"english":"Total Number of Sherds","spanish":null},"Mollusken::Anzahl_aufgehoben":{"english":"Total Number of Shells collected","spanish":null},"XDokumentationX::ObjektFoto":{"english":null,"spanish":null},"[Inschriftentraeger_Objekt]":{"english":null,"spanish":null},"FundstelleNr":{"english":"Group No. ","spanish":null},"Archiv_FotoNr":{"english":"Archive No.","spanish":"Número de Archivo"},"KeramikScherbe::Laenge":{"english":"Length - Individual Sherds","spanish":null},"Fundkollektion::Nummer_Kollektion":{"english":"Collection No.","spanish":null},"Baubefund Klassifizierung Sonstiges":{"english":"Other Classifications - Constr. Feature","spanish":null},"Foto_Areal::Fotodatum":{"english":"Year","spanish":"Año"},"Baubefund Mörtelkonsistenz":{"english":"Mortar Consistency","spanish":null},"KurzbeschreibungAreal":{"english":"Brief Description","spanish":"Breve Descripción"},"Zeichnung_Keramik::Teilprojekt":{"english":null,"spanish":null},"Bautyp":{"english":null,"spanish":null},"Datierung_Relief::AnfEpoche":{"english":"Period Start","spanish":"Época Inicio"},"Befund_Steinobjekt::PS_BefundID":{"english":"Lot/ feature ID","spanish":"Rasgos/Paredes ID"},"Allgemein_Steinobjekttyp":{"english":"Artifact Type","spanish":"Tipo de Artefacto"},"Auto_BauwerkKennung":{"english":null,"spanish":null},"Koordinate_Steinobjekt::GeoDatum_Northing":{"english":"Latitude/N","spanish":"Latitud / N"},"Einzelmotiv::Verzierungszone":{"english":"Individual Subject Position","spanish":null},"Steinartefakt::Anzahl_aufgehoben":{"english":"Total No. of Other Lithics collected","spanish":null},"Foto_Areal::KurzbeschreibungFoto":{"english":"Brief Description - Photo","spanish":"Descripción breve - Foto"},"Altgrabung":{"english":"Old Excavation?","spanish":null},"Bestandteile_Mauer::Format":{"english":"Formats","spanish":null},"Dekoration_Technik":{"english":"Decoration Technique - Surface Coat","spanish":null},"Groesze_Dm_Rand_auszen":{"english":"ext. Diameter","spanish":null},"Steinobjekt_Herkunft::KurzbeschreibungSteinobjekt":{"english":"Description Construction Components","spanish":"Descripción de los componentes de la construcción "},"Grobdatierung":{"english":null,"spanish":null},"Strasze_Topos::PS_StraszeID":{"english":"Serial Number","spanish":"Número de Serie"},"FS_MolluskeID":{"english":"Foreign Key Shells","spanish":"Clave externa para Conchas"},"Oberfläche_Zustand_außen":{"english":"Surface Condition - Outside","spanish":null},"Anlass":{"english":"Created for","spanish":"Creado para"},"Koordinate_Areal::Y_Wert":{"english":"Easting / Y","spanish":"Este / Y"},"Vorlagenart":{"english":"Photo Type","spanish":"Tipo de foto"},"Knochen::Anzahl_insgesamt":{"english":"Total Number of Bones ","spanish":null},"Zeichnung_Keramik::Nummer_Zeichnung":{"english":null,"spanish":null},"Wand::Fugengestaltung":{"english":"Layout of Joints","spanish":null},"Datierung::AnfEpoche":{"english":"Period Begin","spanish":"Época Inicio"},"Dekoration::KurzbeschreibungDekoration":{"english":"Brief description of decoration","spanish":"Descripción breve de la decoración"},"VermessungStatus_inProzent":{"english":"Survey in %","spanish":null}}
	,
	translate : function(originalName, targetLanguage){
		
		if(MA3D.IdaifieldTranslator.map[originalName]){
			if (MA3D.IdaifieldTranslator.map[originalName][targetLanguage]){
				return MA3D.IdaifieldTranslator.map[originalName][targetLanguage];
			}
			else if (MA3D.IdaifieldTranslator.map[originalName]["english"]){
				return MA3D.IdaifieldTranslator.map[originalName]["english"];
			}
			else {
				return originalName;
			}
		}
		else {
			return originalName;
		}
	}
};
/**
 * Utility Class with convenience functions stored in a central place. 
 *
 * @namespace MA3D
 * @class Utils
 * @static 
 */
MA3D.Utils = {
	/**
	 * parses the actual URL location and returns a key value object with the URL-Params
	 * 
	 * @method getURLParams
	 * @param {String} url
	 * @return {Object} parameters
	 */
	getURLParams : function(url) {

		//parse out parameters portion of url string
		var paramsString = "";
		var start = url.indexOf('?') + 1;
		var end = url.length;
		paramsString = url.substring(start, end);

		var parameters = {};
		var pairs = paramsString.split(/[&;]/);
		for (var i = 0, len = pairs.length; i < len; ++i) {
			var keyValue = pairs[i].split('=');
			if (keyValue[0]) {
				var key = decodeURIComponent(keyValue[0]);
				var value = decodeURIComponent(keyValue[1]) || '';
				//empty string if no value
				parameters[key] = value;
			}
		}
		return parameters;
	}
};
MA3D.Accordion = function() {
	this.items = []; //AccordionItems
	
	this.div = document.createElement('div');
	$(this.div).addClass('ma3d-accordion');
	$(this.div).addClass('ui-widget');
	
	this.add = function(item) {
		this.items.push(item);
		this.div.appendChild(item.div);
	};
	
	this.remove = function(item) {
		this.items = this.items.filter(function(e,i,a){return e != item.id;});
		this.div.removeChild(item.div);
	};
};
MA3D.AccordionItem = function(config) {
	var defaults = {
		title: "",
		state: "open",
		cssText: null //style for content DIV
	}; 
	
	this.config = $().extend({},defaults, config);
	this.id = MA3D.accordionItemCounter++;
	
	//create itemContainer
	this.div 	 = document.createElement('div');
	this.header  = document.createElement('div');
	this.content = document.createElement('div');
	this.div.appendChild(this.header);
	this.div.appendChild(this.content);
	
	//add css classes and states
	$(this.div).addClass('ma3d-accordion-item');
	$(this.header).addClass('ma3d-accordion-item-header');
	$(this.content).addClass('ma3d-accordion-item-content');
	if(this.config.state == 'open'){
		$(this.header).addClass('opened');
	} else {
		$(this.header).addClass('closed'); 
		$(this.content).hide();
	};
	
	if(this.config.cssText){
		this.content.style.cssText = this.config.cssText;
	} 
	
	//setTitle
	this.header.textContent = this.config.title;
	
	//events
	this.header.onclick = function(event) {
				var headline = $(event.target);
				var content = headline.next();
				if (headline.hasClass('closed')) {
					content.slideDown();
					headline.removeClass('closed');
					headline.addClass('opened');
				} else {
					content.slideUp();
					headline.removeClass('opened');
					headline.addClass('closed');
				}
			};
};
MA3D.Button = function(config) {
	var defaults = {
		behaviour	: "button", // radio | checkbox | button
		type		: "button", //only applies to behaviour 'button'. Can be: button | submit | reset
		style		: "text", 	// text | icon | icon-text
		name		: null,
		text		: "Text",
		checked		: false,
		icon		: null,		// URL-String | data-URL?
		cssClass	: null,
		// cssTextElement	: null, //style for button or input
		// cssTextLabel	: null, // style for label
		cssText			:null, //style for widgetElement (button, input or label)
		tooltip		: null,
		appendTo : null //Container where the button should be appended to
	}; 
	
	this.config = $().extend({},defaults, config);
	this.id = MA3D.idCounter++;
	this.buttonElement = null;
	this.labelElement  = null;
	this.widgetElement = null; //button or label element styled with icon as background and contains the text
	
	//create element
	switch (this.config.behaviour){
		case "radio":
			this.buttonElement = document.createElement('input');
			this.buttonElement.type = "radio";
			this.buttonElement.name = (this.config.name)? this.config.name : alert("Specify name to group radio buttons");
			if(this.config.checked){this.buttonElement.checked = "checked";}
			break;
		case "checkbox":
			this.buttonElement = document.createElement('input');
			this.buttonElement.type = "checkbox";
			if(this.config.name) {this.buttonElement.name = this.config.name;}
			if(this.config.checked){this.buttonElement.checked = "checked";}
			break;
		case "button":
			this.buttonElement = document.createElement('button');
			this.buttonElement.type = this.config.type;
			if(this.config.name) {this.buttonElement.name = this.config.name;}
			// if(this.config.style == "icon"){
				// this.buttonElement.innerHTML = "&nbsp;";
			// }
			// else{
				// this.buttonElement.innerHTML = this.config.text;
			// }
			break;
		default:
			console.log("No such button behaviour: " + this.config.behaviour);
	}
	
	this.buttonElement.id = "ma3d-button-" + this.id;
	
	if(this.config.behaviour == "radio" || this.config.behaviour == "checkbox"){	
		this.labelElement = document.createElement('label');
		this.labelElement.setAttribute("for", this.buttonElement.id);
		this.labelElement.id = "ma3d-button-label-" + this.id;
		// if(this.config.style == "icon"){
				// this.labelElement.innerHTML = "&nbsp;";
			// }
			// else{
				// this.labelElement.innerHTML = this.config.text;
			// }
	}
	
	//button or label element
	this.widgetElement = (this.config.behaviour == "button")? this.buttonElement : this.labelElement ;
	
	//add text or space
	if(this.config.style == "icon"){
		this.widgetElement.innerHTML = "&nbsp;";
	}
	else{
		this.widgetElement.innerHTML = this.config.text;
	}
	
	// add cssClass
	$(this.widgetElement).addClass("ma3d-button");
	switch (this.config.style){
		case "icon":
			$(this.widgetElement).addClass("ma3d-button-icon-only");
			break;
		case "text":
			$(this.widgetElement).addClass("ma3d-button-text-only");
			break;
		case "icon-text":
			$(this.widgetElement).addClass("ma3d-button-icon-text");
			break;
		default:
			console.log("No such button style: " + this.config.style);
	}
	
	//add style
	if(this.config.cssClass){
		//$(this.labelElement).addClass(this.config.cssClassLabel);
		$(this.widgetElement).addClass(this.config.cssClass);	
	}
	if(this.config.cssText){
		this.widgetElement.style.cssText = this.config.cssText;
	}
	
	//add tooltip
	if(this.config.tooltip){
		$(this.buttonElement).attr("title", this.config.tooltip).tooltip({position:{"my":"right top", "at":"left bottom"}});
	}
	
	//add to DOM
	if(this.config.appendTo){
		var container = this.config.appendTo;
		container.appendChild(this.buttonElement);
		if(this.config.behaviour != "button"){
			container.appendChild(this.labelElement);
		}
		//apply jquery-ui button
		if(this.config.behaviour != "radio"){
			$(this.buttonElement).button();
		}
		
	}
	
};
MA3D.LayerTree = function(scene, config) {
	
	//plugin
	$.jstree.defaults.conditionalselect = function () { return true; };

    $.jstree.plugins.conditionalselect = function (options, parent) {
        // own function
        this.select_node = function (obj, supress_event, prevent_open) {
            if(this.settings.conditionalselect.call(this, this.get_node(obj))) {
                parent.select_node.call(this, obj, supress_event, prevent_open);
            }
        };
    };
        
        
	var defaults = {
		groupBy :  [{text:"Layers",layerGroup:null}],
		height	:  null,
		minHeight:  null,
		maxHeight: null
	};
	
	this.config = $().extend({},defaults, config);
	this.treeDiv = document.createElement('div');
	$(this.treeDiv).addClass('ma3d-layertree-container');
	if(this.config.height){this.treeDiv.style.height = this.config.height;};
	if(this.config.minHeight){this.treeDiv.style.minHeight = this.config.minHeight;};
	if(this.config.maxHeight){this.treeDiv.style.maxHeight = this.config.maxHeight;};
	this.toolbarDiv = document.createElement('div');
	$(this.toolbarDiv).addClass('ma3d-layertree-toolbar-container');
	this.activeLayerDiv = document.createElement('div');
	this.activeLayerDiv.style.padding = "2px"; 
	this.activeLayerDiv.textContent = "Active Layer: none";
	//$(this.activeLayerDiv).addClass('ma3d-layertree-toolbar-container');
	this.div = document.createElement('div');
	this.div.appendChild(this.toolbarDiv);
	this.div.appendChild(this.activeLayerDiv);
	this.div.appendChild(this.treeDiv);
	this.activeLayer = null;
	
	var init = function() {
		//create toolbar
		// setVisibility, filter/query, render_options
		// title, id, icon, type, [buttongroup]
		var setVisButton = document.createElement('button');
		$(setVisButton).button({text:false,icons:{primary:'ma3d-layertree-toolbar-setvisibility'}})
						.tooltip({content:"Show/Hide layer"})
						.on('click', function(e){
							if(this.activeLayer) {
								this.activeLayer.setVisibility(!this.activeLayer.visibility);
								}
							}.bind(this));
		this.toolbarDiv.appendChild(setVisButton);
		//remove layer
		var removeLayerButton = document.createElement('button');
		$(removeLayerButton).button({
			text : false,
			icons : {
				primary : 'ma3d-layertree-toolbar-removelayer'
			}
		})
		.tooltip({content:"Remove layer or style"})
		.on('click', function(e) {
			if (this.activeLayer) {
				
				var selectedNodes = $(this.treeDiv).jstree().get_selected(true);
				if(selectedNodes.length > 1){alert('Please select only one item in the layer tree'); return;}
				
				//layer or style?
				var selectedNode = selectedNodes[0];
				
				var selectedNodeType = ("layer" in selectedNode.original)? 'layer' : ("style" in selectedNode.original)? 'style' : null;
				
				if(selectedNodeType == 'layer'){
					var ok = confirm("Do you really want to delete Layer: "+this.activeLayer.name);			
					if (ok) {
						scene.removeLayer(this.activeLayer);
						this.activeLayer = null;
						this.activeLayerDiv.textContent = "Active Layer: none";
					}
				}
				
				if(selectedNodeType == 'style'){
					var ok = confirm("Do you really want to delete Style: "+selectedNode.original.style.title);			
					if (ok) {
						
						//get parent (layer)
						var layer  = $(this.treeDiv).jstree().get_node(selectedNode.parent).original.layer;
						//remove style from layer, the rest is done by the onRemoveStyleEvent
						layer.disposeStyle(selectedNode.original.style);
					}
				}
				
				if(selectedNodeType == null){
					alert("This item can't be removed.");
				}
				

			}
		}.bind(this)); 
		this.toolbarDiv.appendChild(removeLayerButton);
		
		//show attribut table
		// var showAttributeTableButton = document.createElement('button');
		// $(showAttributeTableButton).button({
			// text : false,
			// icons : {
				// primary : 'ma3d-layertree-toolbar-showattributetable'
			// }
		// })
		// .tooltip({content:"Show Attribute Table"});
		// //.on('click'.....)
		// this.toolbarDiv.appendChild(showAttributeTableButton);
		
		//register events
		
		//select tree node
		$(this.treeDiv).on('select_node.jstree', function(event, data){
			
			console.log(event,data);
			
			var type = data.node.type;
			
			//on select layers
			if(type == "layer" || type == "layer_disabled" || type == "style" || type == "style_disabled"){
				var formerActiveLayer = this.activeLayer;
				var layer = (type == "layer"  || type == "layer_disabled")? data.node.original.layer : $(this.treeDiv).jstree().get_node(data.node.parent).original.layer;
				this.activeLayer = layer;
				this.activeLayerDiv.textContent = "Active Layer: " + this.activeLayer.name;
				/**
				 *@event activeLayerChanged event.content holds an object with references to the active and the former active layer (activeLayer and formerActiveLayer)
				 */
				if( !(formerActiveLayer === this.activeLayer) ){
					this.dispatchEvent({type : 'activeLayerChanged', content:{activeLayer:this.activeLayer,formerActiveLayer:formerActiveLayer}});
				}
				
			}
			
			//on select styles
			if(type == "style_disabled"){
				
				var layer = $(this.treeDiv).jstree().get_node(data.node.parent).original.layer;
				var style = data.node.original.style;
				// //is layer grid?
				// var isGridLayer = layer instanceof GIScene.Layer.Grid;				
				// console.log("isGridLayer", isGridLayer);
				// //isMaterrial RasterOverlay or WMSOvwerlay
				// var isWMSOverlayMaterial = data.node.original.material instanceof GIScene.WMSOverlayMaterial;
				// console.log("isWMSOverlayMaterial",isWMSOverlayMaterial);
// 				
				// if(isGridLayer && isWMSOverlayMaterial){
					// layer.setOverrideMaterialHandler(GIScene.OverrideMaterialHandler.WMS);
// 					
				// }else{
					// layer.setOverrideMaterialHandler(null);
// 					
				// }
				//layer.setOverrideMaterial(layer.root, data.node.original.material);
				
				layer.setActiveStyle(style);
				
				// //disable all siblings
				// var parentNode = $(this.treeDiv).jstree().get_node(data.node.parent);
				// var siblingIDs = parentNode.children;
				// $(this.treeDiv).jstree().set_type(siblingIDs, 'style_disabled');
// 				
				// //enable selected
				// $(this.treeDiv).jstree().set_type(data.node,'style');
				
			}
			
		}.bind(this));
		
		//check for layers to create tree
		$(this.treeDiv).jstree({
			core:{check_callback:true,/*data: this.data,*/ themes:{responsive:false}},
			types:{
				//"layergroup": {icon:'./lib/resources/images/layertree/folder_open.png'},
				"layergroup": {icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAERpIDQgTXJ6IDIwMDMgMTk6MTg6MDUgKzAxMDDiemgrAAAAB3RJTUUH0wMEEic1A2go/gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAIgSURBVHjapVNPaNNQGP+laTvbMplhq+vqaY55UuZJZYiCCCrz5EVFEJFdvehBEHYQPAnbUISdxPPAw1AolDEmg4F1ovNgaafDTuvaaZOsa9LkJS/Zl1SnZVOKPvjlJd+f3/fL970H/OcSWg1ceIB0pYbTjgN4qKp4fGkU11uuNHMfOtMr7s81NQLXswf/lJB7gkFlHaccF0cthrgb6gyHItK2uG0EmYfIidLhfhZLoOfgMXT2nke4PQ5RjJF3lWAQuvzf2JFAZ+g/cfkFbOM9dPUz1OIUzI01wGWwbYa+47coKgLOfyOYGwtYCO0WewZuCJ/m70KXF6HJKYR2xSDt24O2aJI6Z6CUXwTTsgjHBrYUBLyHZbvakWtpoXfwpu+ISgl09R1AR/detEUohKtEsI7u/Ql8zT6jjPqWAp/AccW8ulqgt9oPZo2MFZJN4PIvWDKCjuK1uFmBw+23hcyE5TXId3AKqpcJ1DSzROZy49v8jmQyCnkp3dwDSpqWP8xesPWc5DsskmxQMmfkJHCzsRO5EBAgauVmBWfuYNINhuZeTd5rOBgp0L3KpYYCm6pDhqKWsPwmj/nUawgCik1jZKaRqn77OEQEotcwODS6gAllrYYvuSqKBd3VqpZKk3x5cQxnd7wLM48O2UrxnXju6hCWMrNYWa5zo8bLDsdCvAO3T44g+9eT2C6Gh1c2MPp04rlKJ336yjiGW74s/7o2AQ/QEuOMQm7qAAAAAElFTkSuQmCC'},
				// "layer"		: {icon:'./lib/resources/images/layertree/layer-show.png'}
				"layer"		: {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3gQYBDYHlLyiRQAAAllJREFUOMvtkk9I03EAxd/39/uNMDdLzeVUnAtm6dTU1hZITSEU1BSloETrYJBN06I/FgbRoYjqIt46dAgqIk+VaWpMmdWGodgO5ZZ/cv7aUlN+c9qc/r7fDpEQdQk69jk9Hu/wHjzgX1Pd0PJXeZKSmoZJ93sAQKbRnMBAeVAumvB0OxjZQhgLMkKChLJFcJgghFseGXT6dOlZ0KpjQAAgK9dYzHguhVHWI1O6+MU7FZyfmw0CQEZGHs9HhBRM5hSMIIrjSCyVaZFr6O0tABAAIKSK6HX328O1dScNcbHR1VMLzKKKVscvrqw9SdbnPJv96FjqvXvZ++krRABiW3Wx69QQkJ+f/6NBgla3td56oqOyvGwnESKEthefUWpOQl+/HeNePxJ2mFaCkjQ++vLOjYHup/cAwGw2w+l0ggeAqpqaR9evXrEIgkCkZZkMe7/BPychNGaDs78DiQaLELlZHVd3qKBCqdqYM+hwtIuiSNcnTE9P94k+X4lKqSQKgYBRiqVVDi5vEBq9ERsiN0FeW2OJmiTScuF8uU6r7XF7xlwzMzO3+WO1x/H44YPXoVU5ffeuXIM6JgqeyVm2EBZIckYe4lNNCIdlJCtlFGRryHIoBJ/fP+/2eMQFSbIhy2jC2eZmACD1TU3Xnnd1MikgsS6Hm1pbbczaamOdbz7QQEBi9gE7azh95iYAxW+HOHikCgCgN2SmWRsb7w+8sosTY6OByfHRwMi74blzFy+1m/buswDA4Zqjf36VZX/huk7cpo8pOlCmKywp1WWb9mh++iUVlfjPr3wHVfP7QkEdMbYAAAAASUVORK5CYII='},
				"layer_disabled" : {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3gQYBDYi37h2AgAAAhJJREFUOMvtkt9rUnEYxp/3nONplsfjtmpWrOgi0NaEmJ2IbIx+ScsYLpdssN1F/0FXddNF3QQNFhoE/SAIYrotiHDzooKxkXSxVg1yqXMIsxxKqVPTc75drR/g6KbLPpcPvO/zvg8P8K+JxVhd3aIodXUCAM/AIAKPH2Gv1Wraad5h2trUslknkonAmVSmSkRIESidyea0Yj7/9c3MdBYAupxOCIwxEBGOdHZdHOj37mvf36byPM+Log6iKDJRJ6qFYqGjVCrxIK76YWFBv625WfsYXxx+OTmZJACIRqO2L5nMJavFkq5UKhwR1T2XMQZRFDVJMmjB8Qm53+u9SgCQSqUuCIJg1TQNGw3/vgQAOI7TVFW9wwFAU2PjNM/zRETsbyETERMEQXs7/w6SwZDjXO5e2Ts45L12/cbRbDbbsO6wgTMjIjbi97tH/H7JKMs1oVQq77G1tx3vcZ09GAqHTZ0OR2h3a+t3juOwHjAYY4lkUiqXy/rZSKR7Jf156dn42OXbfh9+Pmw7pJgVe8f9PrfbMfs6MvOtkM/JkpGKa2uyvmGT7Oo+cyCzurrleWjqSXBsYmhlOVG12et049x5z5XRYOD9p9hidW5+To0nYrV4Ila8OXzrxbETJ3sB4N7DB38WCQBsdgWHFTvu+nzQGYx65+lTu8wt2/lqtYalZLLyKjy1DEDr8fThaWAU//nFD51z0vS23diSAAAAAElFTkSuQmCC'},
				"style"		: {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAAAQEBAwNDA1PDU4PDdga17diVtkbmKAgICox3elpZaKrNypv9bY69L1+urk4oXyRNRFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVQI1zXKMQqAMBBE0b2UJwm2KQOpUtp5DGG09xI5QmzFytLWdIFFIa4r/uoxDDWtZsie2kG2BE4xbmSr+1HqlT6ESZFruJflXeSkyHLa+V148Fw26jPDFydgYHYQAKMDdBngBXbXVmo6zTxir1kHh3wSoQAAAABJRU5ErkJggg=='},
				"style_disabled" : {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAAAgICA5OTloaGiXl5exsbHOzs7u7u4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9cHNaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVQI1zWO0RHAIAhD3aUbtB8uIC5Q6ATGBaqwfkWu+crlkSPpuLbOlG3rTXnWKczLKIG5LGNNAfFkPCKOTCsAT5QDmY3euyeTKRBA8DpE7uI3QCsShoWiFU//GR+mByzLwsXISwAAAABJRU5ErkJggg=='}
			},
			"conditionalselect": function(node) {
													if(node.type == "layergroup"){
														var formerActiveLayer = this.activeLayer;
														this.activeLayer = null;
														this.activeLayerDiv.textContent = "Active Layer: none";
														/**
														 *@event activeLayerChanged event.content holds an object with references to the active and the former active layer (activeLayer and formerActiveLayer)
														 */
														this.dispatchEvent({type : 'activeLayerChanged', content:{activeLayer:this.activeLayer,formerActiveLayer:formerActiveLayer}});
													}
													return node.type != "layergroup"; //TODO reflect style type
												}.bind(this),
			"plugins" : [ "wholerow", "types", "conditionalselect"]	
			});
			
		for (var i=0; i < scene.layers.length; i++) { 
			
			addLayer(scene.layers[i]);
			// this.data.push({text:scene.layers[i].name,icon:"./lib/resources/images/layertree/layer-show.png"});
		};
	}.bind(this);
	
	var addLayer = function(layer) {
		//check group
		var layerGroupIndex = "last";//-1;
		for (j=0;j<this.config.groupBy.length;j++){
			if(layer.config.layerGroup == this.config.groupBy[j].layerGroup){
				layerGroupIndex = j;
			}
		}
		console.log("layerGroupIndex",layerGroupIndex);
		
		var groupNodeText = layer.config.layerGroup;
		var layerNodeId;
		//find or create group_node
		// if(layerGroupIndex != -1){ //group is defined in config
			
			//find group node if it exists
			// var groupNodeId = $(this.treeDiv).jstree().get_node(':contains("'+this.config.groupBy[layerGroupIndex].text+'")');
		if(groupNodeText){	
			var groupNodeId = $(this.treeDiv).jstree().get_node(':contains("'+groupNodeText+'")');
			
			if (!groupNodeId){
				//create group node
				groupNodeId= $(this.treeDiv).jstree().create_node('#',{text:groupNodeText,state:{disabled:false, opened:true}, type:'layergroup'}, layerGroupIndex);
			}
			
			layerNodeId = $(this.treeDiv).jstree().create_node(groupNodeId,{text:layer.name,layer:layer ,type:'layer'/*, icon:"http://www.mayaarch3d.org/dev/examples/singleObjectViewer/lib/resources/images/layertree/layer-show.png"*/});
		}
		else{
			layerNodeId = $(this.treeDiv).jstree().create_node('#',{text:layer.name,layer:layer ,type:'layer'/*, icon:"http://www.mayaarch3d.org/dev/examples/singleObjectViewer/lib/resources/images/layertree/layer-show.png"*/});
		}
		
		//create node for default style
		// if(layer.styles.length > 0){
			// var defaultStyle = new GIScene.Style({
				// title : "default style",
				// material: layer.config.overrideMaterial //can be null as well
			// }); 
			// $(this.treeDiv).jstree().create_node(layerNodeId,{text:defaultStyle.title, style:defaultStyle ,type:'style'});
		// }
		
		
		//set other styles
		for(var k=0,l=layer.styles.length; k<l; k++){
		  var style = layer.styles[k];
		  $(this.treeDiv).jstree().create_node(layerNodeId,{text:style.title, style:style ,type:'style_disabled'});
		};
		
		//mark default as active
		var defaultStyleNode = findStyleNodeByStyle(layer.styles[0]);
		if(defaultStyleNode){$(this.treeDiv).jstree().set_type(defaultStyleNode.id , 'style');}
		
		//register layer changedvisibility to toggle type icons
		var toggleLayerType = function(event) {
			var visibility = event.content.visibility;
			var layerType = (visibility)? 'layer': 'layer_disabled';
			$(this.treeDiv).jstree().set_type(layerNodeId,layerType);
		}.bind(this);
		layer.addEventListener('changedvisibility', toggleLayerType);
		
		//register style changes
		var onAddStyle = function (event) {
		  	var style = event.content.style;
		  	var layer = event.content.layer;
		  	addStyle(layer, style);
		};
		layer.addEventListener('addStyle', onAddStyle);
		
		
		var onRemoveStyle = function (event) {
			var style = event.content.style;
		  	// var layer = event.content.layer;
		  	removeStyle(style);
		};
		layer.addEventListener('removeStyle', onRemoveStyle);
		
		var onSetActiveStyle = function (event) {
			
			var style = event.content.style;
			var styleNode = findStyleNodeByStyle(style); 
			
			//disable all siblings
			var parentNode = $(this.treeDiv).jstree().get_node(styleNode.parent);
			var siblingIDs = parentNode.children;
			$(this.treeDiv).jstree().set_type(siblingIDs, 'style_disabled');
			
			//enable selected
			$(this.treeDiv).jstree().set_type(styleNode,'style');
		}.bind(this);
		layer.addEventListener('setActiveStyle', onSetActiveStyle);
		
		// }
	}.bind(this);
	
	var removeLayer = function(layer) {
		//find layer node
		var domNode = '#'; //start with root
		
		var findAndDelete = function(){
			domNode = $(this.treeDiv).jstree().get_next_dom(domNode, false);
			
			//stop traversing after the last node
			if (domNode.length == 0)return;
			
			var treeNode = $(this.treeDiv).jstree().get_node(domNode);
			
			
			if(treeNode.original.layer === layer){
				//remove node
				$(this.treeDiv).jstree().delete_node(treeNode);
				return;
			}
			else{
				//traverse
				findAndDelete();
			}
		}.bind(this);
		
		findAndDelete();
		
	}.bind(this);
	
	
	var addStyle = function(layer, style){
	
		var layerNode = findLayerNodeByLayer(layer);
		var layerNodeId = layerNode.id;
		//create node for default style

		// if(layerNode.children.length == 0){
			// var defaultStyle = new GIScene.Style({
				// title : "default style",
				// material: layer.config.overrideMaterial //can be null as well
			// });
			// $(this.treeDiv).jstree().create_node(layerNodeId,{text:"default style", style:defaultStyle ,type:'style'});
		// }
		
		//set styles
		  $(this.treeDiv).jstree().create_node(layerNodeId,{text:style.title, style:style, type:'style_disabled'});

	}.bind(this);
	
	var removeStyle = function(style){
		var styleNode = findStyleNodeByStyle(style); 
		
		var isActive = styleNode.type == "style";
		if(isActive){
			//find layer (parent)
			var layerNode = $(this.treeDiv).jstree().get_node(styleNode.parent);
			layerNode.original.layer.setActiveStyle("default");
		}
		
		// remove style node from layertree
		$(this.treeDiv).jstree().delete_node(styleNode);
		
	}.bind(this);
	
	/**
	 * 
 	 * @param {GIScene.Style} style
 	 * @param {String} [rootNodeId]
	 */
	var findStyleNodeByStyle = function(style, rootNodeId){//find styleNode; rootNodeId is optional
			
			var nodeId = rootNodeId || '#';
			
			var node = $(this.treeDiv).jstree().get_node(nodeId);
			
			var styleNode = null;
			
			if( node.original && ( node.original.style === style ) ){
				//return style node
				styleNode = node;
			}
			else{
				//traverse children
				var children = node.children;
				for(var i=0,j=children.length; i<j; i++){
				  styleNode =  findStyleNodeByStyle(style, children[i]);
				  if(!!styleNode)break;
				};			
			}
			
			return styleNode;
			
		}.bind(this);	
	
	var findLayerNodeByLayer = function(layer, rootNodeId){//find layerNode; rootNode is optional
			
			var nodeId = rootNodeId || '#';
			
			var node = $(this.treeDiv).jstree().get_node(nodeId);
			
			var layerNode = null;
			
			if( node.original && ( node.original.layer === layer ) ){
				//return style node
				layerNode = node;
			}
			else{
				//traverse children
				var children = node.children;
				for(var i=0,j=children.length; i<j; i++){
				  layerNode =  findLayerNodeByLayer(layer, children[i]);
				  if(!!layerNode)break;
				};			
			}
			
			return layerNode;
			
			
			//***********
			// var domNode = rootNode || '#';
// 		
			// domNode = $(this.treeDiv).jstree().get_next_dom(domNode, false);
// 			
			// //stop traversing after the last node
			// if (domNode.length == 0)return false;
// 			
			// var treeNode = $(this.treeDiv).jstree().get_node(domNode);
// 			
// 			
			// if(treeNode.original.layer === layer){
				// //return layer node
				// return treeNode;
			// }
			// else{
				// //traverse
				// return findLayerNodeByLayer(layer, domNode);
			// }
		}.bind(this);
	
	var onAddLayer = function(event) {
		
		var layer = event.content;
		addLayer(layer);
		
	}.bind(this);
	
	var onRemoveLayer = function(event) {
		
		var layer = event.content;
		removeLayer(layer);
		
	}.bind(this);
	
	scene.addEventListener('addlayer', onAddLayer);
	scene.addEventListener('removelayer', onRemoveLayer);
	
	//self initialization 
	init();
};

MA3D.LayerTree.prototype = {
	
	constructor : MA3D.LayerTree,
	addEventListener: THREE.EventDispatcher.prototype.addEventListener,
	hasEventListener: THREE.EventDispatcher.prototype.hasEventListener,
	removeEventListener: THREE.EventDispatcher.prototype.removeEventListener,
	dispatchEvent: THREE.EventDispatcher.prototype.dispatchEvent
	
};MA3D.Textfield  = function(config) {
	var defaults = {
		label		: null,
		name		: null,
		value		: null,
		placeholder	: null,
		disabled	: null,
		cssClass	: null,
		cssText		: null, 
		cssClassLabel:null,
		cssTextLabel: null,
		cssClassContainer : null,
		cssTextContainer  : null,
		listeners	: [],
		appendTo 	: null 
	}; 
	
	this.config = $().extend({},defaults, config);
	this.id = MA3D.idCounter++;
	this.containerElement = document.createElement('div');
	
	this.element = document.createElement('input');
	this.element.id = "ma3d-textfield-" + this.id;
	this.element.type = "text";
	if(this.config.name){this.element.name = this.config.name;}
	
	this.labelElement = null;
	if(this.config.value) {this.element.value = this.config.value;};
	if(this.config.placeholder) {this.element.placeholder = this.config.placeholder;};
	if(this.config.label){
		this.labelElement = document.createElement('label');
		this.labelElement.setAttribute("for", this.element.id);
		this.labelElement.textContent = this.config.label;
		
		if(this.config.cssClassLabel){this.labelElement.className = this.config.cssClassLabel;};
		if(this.config.cssTextLabel){this.labelElement.style.cssText = this.config.cssTextLabel;};
	}
	if(this.config.cssClass){this.element.className = this.config.cssClass;};
	if(this.config.cssText){this.element.style.cssText = this.config.cssText;};
	
	if(this.config.cssClassContainer){this.containerElement.className = this.config.cssClassContainer;};
	if(this.config.cssTextContainer){this.containerElement.style.cssText = this.config.cssTextContainer;};
	
	if(this.labelElement){this.containerElement.appendChild(this.labelElement);}
	this.containerElement.appendChild(this.element);
	
	if(this.config.appendTo){
		this.config.appendTo.appendChild(this.containerElement);
	};
	
	if(this.config.disabled) {
		this.element.disabled = "disabled";
	}
	
	//add event listeners to textfield
	for(var i=0;i<this.config.listeners.length;i++){
		$(this.element).on(Object.keys(this.config.listeners[i])[0], this.config.listeners[i][Object.keys(this.config.listeners[i])[0]]);
	}
	
	//auto select on first focus
	$(this.element).focus(function(){
    $(this).one('mouseup', function(event){
        event.preventDefault();
    }).select();
});
		
};
/**
 * 
 */
MA3D.Numberfield = function(config) {
	
	var defaults = {
		spinner : false
	};
	
	this.config = $().extend({},defaults, config);
	
	//mixin from Textfield.js
	MA3D.Textfield.apply(this, [config]);
	
	if(this.config.spinner){
		this.element.type = 'number';
	}
	
	this.element.pattern = "^\\-?\\d+((\\.|\\,)\\d+)?((e|E)\\+?\\-?\\d+)?$";
	
	//convert comma into point seperator
	var onKeyPress = function(event) {if(event.which == 44 ){event.preventDefault();event.target.value+=".";}};
	
	this.element.addEventListener('keypress', onKeyPress, false);
	
};/**
 * 
 */
MA3D.Pickfield = function(config) {
	
	var defaults = {
		scene : null,
		pickColor : new THREE.Color( 0xff00ff )
	};
	
	this.config = $().extend({},defaults, config);
	
	//mixin from Textfield.js
	MA3D.Textfield.apply(this, [this.config]);
	
	this.button = new MA3D.Button({
		behaviour 	: 'button',
		text	  	: 'Pick'
	});
	
	var pickConfig = {
		color: this.config.pickColor
	};
	
	this.pickControl = new GIScene.Control.Pick(this.config.scene.camera, pickConfig);
	this.config.scene.addControl(this.pickControl);
	
	var onPicked = function(event) {
		var control = event.target;
		var results = event.content;
		if(results){
			var point	= results.point;
			//if mesh
			if(results.face){
				var faceNormal = results.face.normal.normalize();
			
				//add a little offset to avoid mathematical problems when looking "through" the ground.
				point.add(faceNormal.multiplyScalar(0.0001));
			}
			
			point = new GIScene.Coordinate3().fromVector3(point).add(this.config.scene.config.offset);
			this.element.value = point.toArray().toString();
		}
		else{
			this.element.value = "No point picked!";
		}
		$(this.element).change();
		
		control.deactivate();
	}.bind(this);
	
	var pickCoords = function(event) {
		//alert('picked');
		//activate
		this.pickControl.activate();
		this.pickControl.pickables = this.config.scene.root.getDescendants();
		this.pickControl.addEventListener('click', onPicked);
		//onpicked deactivate
	}.bind(this);
	
	this.containerElement.insertBefore(this.button.buttonElement, this.element);
	var button = $(this.button.buttonElement).button();
	button.on('click',pickCoords);
};
/**
 * 
 */
MA3D.Selectfield = function(config) {
	
	var defaults = {
		label:null,
		name: null,
		disabled	: null,
		cssClass	: null,
		cssText		: null, 
		cssClassLabel:null,
		cssTextLabel: null,
		cssClassContainer : null,
		cssTextContainer  : null,
		listeners	: [],
		appendTo 	: null 
		// scene : null,
		// pickColor : new THREE.Color( 0xff00ff )
	};
	
	this.config = $().extend({},defaults, config);
	
	this.id = MA3D.idCounter++;
	this.containerElement = document.createElement('div');
	
	this.element = document.createElement('select');
	this.element.id = "ma3d-selectfield-" + this.id;
	if(this.config.name){this.element.name = this.config.name;}
	
	this.labelElement = null;
	if(this.config.label){
		this.labelElement = document.createElement('label');
		this.labelElement.setAttribute("for", this.element.id);
		this.labelElement.textContent = this.config.label;
		
		if(this.config.cssClassLabel){this.labelElement.className = this.config.cssClassLabel;};
		if(this.config.cssTextLabel){this.labelElement.style.cssText = this.config.cssTextLabel;};
	}
	if(this.config.cssClass){this.element.className = this.config.cssClass;};
	if(this.config.cssText){this.element.style.cssText = this.config.cssText;};
	
	if(this.config.cssClassContainer){this.containerElement.className = this.config.cssClassContainer;};
	if(this.config.cssTextContainer){this.containerElement.style.cssText = this.config.cssTextContainer;};
	
	if(this.labelElement){this.containerElement.appendChild(this.labelElement);}
	this.containerElement.appendChild(this.element);
	
	if(this.config.appendTo){
		this.config.appendTo.appendChild(this.containerElement);
	};
	
	if(this.config.disabled) {
		this.element.disabled = "disabled";
	}
	
	//add event listeners to selectfield
	for(var i=0;i<this.config.listeners.length;i++){
		$(this.element).on(Object.keys(this.config.listeners[i])[0], this.config.listeners[i][Object.keys(this.config.listeners[i])[0]]);
	}
	
	
};

MA3D.Selectfield.prototype = {
	
	constructor	: MA3D.Selectfield,
	
	/**
	 * @method addOption
 	 * @param {Object} text
	 * @param {Object} [value]
	 */
	addOption	: function(text, value) {
		var option = document.createElement("option");
		option.textContent = text;
		if(value){option.value = value;}
		this.element.appendChild(option);
	}
	
};
/**
 * 
 */
MA3D.LayerSelectfield = function(config) {
	
	var defaults = {
		scene : null,
		// pickColor : new THREE.Color( 0xff00ff )
	};
	
	this.config = $().extend({},defaults, config);
	
	//mixin from Selectfield.js
	MA3D.Selectfield.apply(this, [this.config]);
	
	this.layers = this.config.scene.layers || [];
	
	this.update();
	
	
	
	// this.id = MA3D.idCounter++;
	// this.containerElement = document.createElement('div');
// 	
	// this.element = document.createElement('select');
	// this.element.id = "ma3d-selectfield-" + this.id;
	// if(this.config.name){this.element.name = this.config.name;}
// 	
	// this.labelElement = null;
	// if(this.config.label){
		// this.labelElement = document.createElement('label');
		// this.labelElement.setAttribute("for", this.element.id);
		// this.labelElement.textContent = this.config.label;
// 		
		// if(this.config.cssClassLabel){this.labelElement.className = this.config.cssClassLabel;};
		// if(this.config.cssTextLabel){this.labelElement.style.cssText = this.config.cssTextLabel;};
	// }
	// if(this.config.cssClass){this.element.className = this.config.cssClass;};
	// if(this.config.cssText){this.element.style.cssText = this.config.cssText;};
// 	
	// if(this.config.cssClassContainer){this.containerElement.className = this.config.cssClassContainer;};
	// if(this.config.cssTextContainer){this.containerElement.style.cssText = this.config.cssTextContainer;};
// 	
	// if(this.labelElement){this.containerElement.appendChild(this.labelElement);}
	// this.containerElement.appendChild(this.element);
// 	
	// if(this.config.appendTo){
		// this.config.appendTo.appendChild(this.containerElement);
	// };
// 	
	// if(this.config.disabled) {
		// this.element.disabled = "disabled";
	// }
// 	
	// //add event listeners to selectfield
	// for(var i=0;i<this.config.listeners.length;i++){
		// $(this.element).on(Object.keys(this.config.listeners[i])[0], this.config.listeners[i][Object.keys(this.config.listeners[i])[0]]);
	// }
	
	
};

MA3D.LayerSelectfield.prototype = Object.create(MA3D.Selectfield.prototype);
	
/**
 * @method update updates the displayed selection options according to the layers in the array of this.layers
 */
MA3D.LayerSelectfield.prototype.update= function() {
		//remove old options
		this.element.innerHTML = "";
		
		this.addOption("", "");
		
		for(var i=0,j=this.layers.length; i<j; i++){
		  this.addOption(this.layers[i].name, String(this.layers[i].id));
		};	
};


MA3D.ToolContainer = function(config) {
	var defaults = {
		cssClass	: "ma3d-tool-container indent",
		cssText		: null, 
		appendTo 	: null, 
		indent		: true,
		hr			: false,
		id			: null
	}; 
	
	this.config = $().extend({},defaults, config);
	
	this.id = this.config.id || MA3D.idCounter++;
	
	this.element = document.createElement('div');
	
	this.element.id = this.id;
	if(this.config.cssClass){this.element.className = this.config.cssClass;};
	if(this.config.indent == false){$(this.element).removeClass("indent");}
	if(this.config.cssText){this.element.style.cssText = this.config.cssText;};
	if(this.config.appendTo){
		this.config.appendTo.appendChild(this.element);
		if(this.config.hr){
			this.config.appendTo.appendChild(document.createElement('hr'));
		}
		};
};
MA3D.Button.Fullscreen = function(config) {
	
	MA3D.Button.apply(this, [config]);
	
	var defaults = {
		containerDiv 	: null,
		scene			: null
	};
	
	this.config = $().extend({},defaults, config);
	
	var doc = (window.frameElement)? window.parent.document : document;
	var fullscreenElement = (window.frameElement)? window.frameElement : this.config.containerDiv;
	
	$(this.buttonElement).button().on('change', function(e) {
		
		
		function launchFullScreen(element) {
		  	if(element.requestFullscreen) {
			    element.requestFullscreen();
			  } else if(element.mozRequestFullScreen) {
			    element.mozRequestFullScreen();
			  } else if(element.webkitRequestFullscreen) {
			    element.webkitRequestFullscreen();
			  } else if(element.msRequestFullscreen) {
			    element.msRequestFullscreen();
			  }
		}
		function exitFullscreen() {
			  if(doc.exitFullscreen) {
			    doc.exitFullscreen();
			  } else if(doc.mozCancelFullScreen) {
			    doc.mozCancelFullScreen();
			  } else if(doc.webkitExitFullscreen) {
			    doc.webkitExitFullscreen();
			  } else if(doc.msExitFullscreen){
			  	doc.msExitFullscreen();
			  }
		}	
			
		if(e.target.checked){
			// box was checked	
			// if(window.frameElement){
				launchFullScreen(fullscreenElement);
			// }
			// else{
				// launchFullScreen(this.config.containerDiv);
			// }
			
		}else
			exitFullscreen();	
		
	}.bind(this));
	
	//if user exits fullscreen by ESC or F11
	var uncheckFullscreen = function ( event ) {
		// console.log('fullscreenchange');
	    // The event object doesn't carry information about the fullscreen state of the browser,
	    // but it is possible to retrieve it through the fullscreen API
	    if ( doc.fullScreenEnabled || doc.mozFullScreenEnabled || doc.webkitFullscreenEnabled || doc.msFullscreenEnabled) {        
	        // The target of the event is always the document,
	        // but it is possible to retrieve the fullscreen element through the API
	        var fse = doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;
	        // console.log("fse: " + fse);
	        if(!(fse)){
	        	//deactivate button
	        	$(this.buttonElement).removeAttr('checked');
	        	$(this.buttonElement).button('refresh');
	        	// $('#requestfullscreen').removeAttr('checked');
	        	// $('#requestfullscreen').button('refresh');
	        	//resize viewport 
	        	this.config.scene.onResize();
	        }
	    }
	
	}.bind(this);
	doc.addEventListener("fullscreenchange", uncheckFullscreen);
	doc.addEventListener("mozfullscreenchange", uncheckFullscreen);
	doc.addEventListener("webkitfullscreenchange", uncheckFullscreen);
	doc.addEventListener("MSFullscreenChange", uncheckFullscreen);
};

MA3D.Button.Fullscreen.prototype = Object.create(MA3D.Button.prototype);
MA3D.Button.Screenshot = function(config) {
	
	// MA3D.Button.apply(this, [config]);
	
	var defaults = {
		containerDiv 	: null,
		scene			: null,
		text			: "Save Screenshot"
	};
	
	this.config = $().extend({},defaults, config);
	
	MA3D.Button.apply(this, [this.config]);
	
	this.createDialog = function() {
		
		
		var dataURL;
		
		//get data before buffer is cleared
		var getDataURL = function() {
			dataURL = this.config.scene.renderer.context.canvas.toDataURL();
			this.config.scene.removeEventListener('afterRender', getDataURL);
		}.bind(this);
		this.config.scene.stopAnimation();
		this.config.scene.addEventListener('afterRender', getDataURL);
		this.config.scene.startAnimation();
		
		var image = new Image();
		image.style.width ="100%";
		
		image.onload = function(){
		var dialog = new MA3D.Dialog("Save Screenshot", this.config.containerDiv);
		var link = "<a href='"+dataURL+"' download='Screenshot.png'><button>Save</button></a>";
		dialog.dialogDiv.appendChild(image);
		dialog.dialogDiv.innerHTML += "<br>" + link;
		}.bind(this);
		
		image.src = dataURL;
		
	}.bind(this);
	
	$(this.buttonElement).button().on('click', this.createDialog);
};

MA3D.Button.Screenshot.prototype = Object.create(MA3D.Button.prototype);


MA3D.SelectSegmentedModel = function(sov, containerDiv, checkboxButton) {
	
	var selectSegmentedContainer = null;
	
	this.getParentNodes = function(object) {
		var nodesArray = [];
		
		do{
			nodesArray.push(object);
			object = (object.parent) ? object.parent : null;
		}
		while(object && (object.name != 'group' && !(object.name.match(/^layer/))));
		
		return nodesArray;
	};
	
	this.deleteGui = function() {
		// var container = $('#select_output_container > .sovSelectSegmentedContainer');
		// var container = $(selectSegmentedContainer);
		// if(container.length > 0) {container.remove();}
		
		if(selectSegmentedContainer){
			$(selectSegmentedContainer.element).remove();
			selectSegmentedContainer = null;
		}
	};
	
	
	this.createAttributeList = function(element, attrId) {
		var attributes = {"Attribute 1" : "Value 1","Attribute 2" : "Value 2","Attribute 3" : "Value 3"}; //response;
			//container
			// var container = document.createElement('div');
			// container.setAttribute("class", "sovSelectSegmentedShort")
			//create table
			var table = document.createElement('table');
			// table.setAttribute("class", "sovSelectSegmentedShort")
			// ulElem.style.listStyle = "none";
			
			for(attribute in attributes){
				var row = document.createElement('tr');
				row.innerHTML="<td>"+ attribute + ": </td><td>"+ attributes[attribute]+"</td>";
				table.appendChild(row);
			}
			element.appendChild(table);
			
			
			var more = document.createElement('button');
			more.className = "sovMore"; 
			more.textContent = 'more...';
			//more.href="#";
			more.title = "Open complete list of attributes";
			more.onclick = function() {
				
				if($('#sovAttributeWindow'+filemakerId).length == 0){
					var attributeWindow = document.createElement('div');
					attributeWindow.id = 'sovAttributeWindow'+filemakerId;
					document.body.appendChild(attributeWindow);
					$(attributeWindow).dialog(	{
													title:'Complete attribute list of '+filemakerId,
													close: function(event, ui) {$(this).dialog('destroy').remove();}
												});
					$(attributeWindow).html('Loading attributes <img src="./lib/resources/images/maya-spinner.gif" style="vertical-align:middle;">');
				}
				
			};
			// $(more).button();
			
			element.appendChild(more);
			
			
			
			
			// element.appendChild(container);
		
		
		// var filemakerId = attrId;
		// var onSuccess = function(response) {
			// $(element).removeClass('sovLoading');
			// //just for testing
			// alert(response.responsText);
			// var attributes = {"Attribute 1" : "Value 1","Attribute 2" : "Value 2","Attribute 3" : "Value 3"}; //response;
			// //container
			// // var container = document.createElement('div');
			// // container.setAttribute("class", "sovSelectSegmentedShort")
			// //create table
			// var table = document.createElement('table');
			// // table.setAttribute("class", "sovSelectSegmentedShort")
			// // ulElem.style.listStyle = "none";
// 			
			// for(attribute in attributes){
				// var row = document.createElement('tr');
				// row.innerHTML="<td>"+ attribute + ": </td><td>"+ attributes[attribute]+"</td>";
				// table.appendChild(row);
			// }
			// element.appendChild(table);
// 			
// 			
			// var more = document.createElement('button');
			// more.className = "sovMore"; 
			// more.textContent = 'more...';
			// //more.href="#";
			// more.title = "Open complete list of attributes";
			// more.onclick = function() {
// 				
				// if($('#sovAttributeWindow'+filemakerId).length == 0){
					// var attributeWindow = document.createElement('div');
					// attributeWindow.id = 'sovAttributeWindow'+filemakerId;
					// document.body.appendChild(attributeWindow);
					// $(attributeWindow).dialog(	{
													// title:'Complete attribute list of '+filemakerId,
													// close: function(event, ui) {$(this).dialog('destroy').remove();}
												// });
					// $(attributeWindow).html('Loading attributes <img src="./lib/resources/images/maya-spinner.gif" style="vertical-align:middle;">');
				// }
// 				
			// };
			// // $(more).button();
// 			
			// element.appendChild(more);
// 			
// 			
// 			
// 			
			// // element.appendChild(container);
// 			
		// }.bind(this);
		// var onError = function(response) {
			// $(element).removeClass('sovLoading');
			// console.log(response);
			// }.bind(this);
// 			
		// var gs = new MA3D.AttributeService({url:"http://www.mayaarch3d.org/as/"});
		// gs.requestShortAttributes(filemakerId, onSuccess, onSuccess/*onError*/); //should be JSON
		
	};
	
	this.createGui = function(nodes) {
		var self = this;
		
		this.deleteGui();
		
		// selectSegmentedContainer = document.createElement('div');
		// selectSegmentedContainer.setAttribute('class','sovSelectSegmentedContainer');
		// selectSegmentedContainer.innerHTML = "<div class='toolbar-content-box-header'>Segmentation levels:</div>";
		
		selectSegmentedContainer = new MA3D.ToolContainer({
			indent	: false,
			cssText	: "margin-top:5px;",
			appendTo: containerDiv
		});
		selectSegmentedContainer.element.innerHTML = "<div>Segmentation levels:</div>";
		
		var ulElem = document.createElement('ul');
		// ulElem.setAttribute('class','sovSegmentsList');
		ulElem.setAttribute('class','ma3d-selectsegmented-segmentslist');
		
		// Events on the GUI Elements
		var onClick = function(event) {
			
			//don't collapse on more link
			var origTarget = event.srcElement || event.originalTarget; //IE,Chrome || FF
			if(origTarget.tagName.toUpperCase() == "BUTTON")return;
			
			//create, show or hide attributelist
			var element = event.currentTarget; //li element, which has the listener
			var attrId = element.attributes.getNamedItem("ma3d_attr_id").value;
			var object	= this.scene.root.getObjectById( parseInt(element.attributes.getNamedItem("ma3d_obj_id").value), true);
			var attributes = object.userData.ma3dAttributes || {};
			
			
			
			if($(element).children('.ma3d-selectsegmented-shortattributes').length == 0){
				var container = document.createElement('div');
				container.setAttribute("class", "ma3d-selectsegmented-shortattributes");
				container.style.display = 'none';
				//container.className += ' sovLoading';
				element.appendChild(container);
				//this.createAttributeList( container, attrId ); //Request Attributes
				
				// var table = document.createElement('table');
				// don't create Attributelist if there aren't any
				if (Object.keys(attributes).length == 0){
					var noAttrMsg = "No attributes available!";
					container.textContent = noAttrMsg;
				}else{
					for(attribute in attributes){
						if (attribute == "[Datierung]"|| attribute == "Beschreibung" || attribute == "Anlass" || /*attribute == "PS_SteinobjektID"*/attribute == "ma3d_attribute_id" || attribute == "Temp_MajorTheme"){
							
							var attrHeader = document.createElement('h4');
							attrHeader.textContent = MA3D.IdaifieldTranslator.translate(attribute) + ":";
							var attrValue = document.createElement('span');
							attrValue.textContent = attributes[attribute];
							container.appendChild(attrHeader);
							container.appendChild(attrValue);
							//var row = document.createElement('tr');
							//row.innerHTML="<td>"+ attribute + ": </td><td>"+ attributes[attribute]+"</td>";
							//table.appendChild(row);
						}
					}
					//element.appendChild(table);
					
					
					var more = document.createElement('button');
					more.className = "ma3d-selectsegmented-more"; 
					more.textContent = 'more...';
					//more.href="#";
					more.title = "Open complete list of attributes";
					more.onclick = function() {
						
						if($('#ma3d-attributewindow'+sov.id).length == 0){
							var attributeWindow = document.createElement('div');
							attributeWindow.id = 'ma3d-attributewindow' + sov.id;//+object.name;
							$(attributeWindow).addClass('ma3d-attributewindow');
							document.body.appendChild(attributeWindow);
							$(attributeWindow).dialog(	{
															//title:'Complete attribute list of '+attributes["KurzbeschreibungSteinobjekt"],
															title:'Complete attribute list of '+attributes["ma3d_shortName"] + ' (' + attributes["ma3d_attribute_id"] + ')',
															close: function(event, ui) {$(this).dialog('destroy').remove();},
															height:500,
															width:500,
															// position:{ my: "center top+50px", at: "center top", of: this.containerDiv },
															// appendTo: this.containerDiv
														});
							$(attributeWindow).dialog('widget').get(0).style.cssText += "z-index:2000000;top:50px;";
							//$(attributeWindow).html('Loading attributes <img src="./lib/resources/images/maya-spinner.gif" style="vertical-align:middle;">');
							
							var createTable = function(language) {
								var table = document.createElement('table');
								table.className = "ui-widget";
								for(attribute in attributes){	
									var row = document.createElement('tr');
									row.innerHTML="<td>"+ MA3D.IdaifieldTranslator.translate(attribute,language) + ": </td><td>"+ attributes[attribute]+"</td>";
									table.appendChild(row);
								}
								
								return table;
							};
							
							var table = createTable();
							
							//add language buttons
							var en_button = new MA3D.Button({
								behaviour:"radio", 
								style:"text", 
								text: "english",
								name:"ma3d-attributewindow-language-" + ++MA3D.instanceCounter ,
								checked:true, 
								appendTo: $(attributeWindow).dialog('widget').context
							});
							var es_button = new MA3D.Button({
								behaviour:"radio", 
								style:"text", 
								text: "español",
								name:"ma3d-attributewindow-language-" + MA3D.instanceCounter++ ,
								checked:false, 
								appendTo: $(attributeWindow).dialog('widget').context
							});
							
							$($(attributeWindow).dialog('widget').context).buttonset();
							
							$(en_button.buttonElement).on('change', function(e) {
								if(e.target.checked){
									//remove table
									$(attributeWindow).dialog('widget').context.removeChild(table);
									table = createTable('english');
									//add table
									$(attributeWindow).dialog('widget').context.appendChild(table);
								}
							}.bind(this));
							$(es_button.buttonElement).on('change', function(e) {
								if(e.target.checked){
									//remove table
									$(attributeWindow).dialog('widget').context.removeChild(table);
									table = createTable('spanish');
									//add table
									$(attributeWindow).dialog('widget').context.appendChild(table);
								}
							}.bind(this));
							
							//add table
							$(attributeWindow).dialog('widget').context.appendChild(table);
						}
						
					}.bind(this);
					// $(more).button();
					
					container.appendChild(more);
				}
				
			}
			if($(element).children('.ma3d-selectsegmented-shortattributes:first').get(0).style.display == 'none'){
				$(element).children('.ma3d-selectsegmented-shortattributes:first').slideDown();
			}
			else{
				$(element).children('.ma3d-selectsegmented-shortattributes:first').slideUp();
			}	
			
		}.bind(sov);
		
		var onMouseEnter = function(event) {
			var element = event.currentTarget;
			var object	= this.scene.root.getObjectById( parseInt(element.attributes.getNamedItem("ma3d_obj_id").value), true);
			
			// var originalselectColor = this.selectControl.config.selectColor;
			// this.selectControl.config.selectColor = 0xFF3300;
			//highlight recursive
			object.traverse(function(obj){
				if(obj.geometry && !('isGetFeatureInfoClicked' in obj.userData))GIScene.Utils.WorkingMaterial.setSelectColor(obj,new THREE.Color(0xFF3300))/*this.selectControl.highlight(obj)*/;
			}.bind(this));
			// this.selectControl.config.selectColor = originalselectColor;
		}.bind(sov);
		
		var onMouseLeave = function(event) {
			var element = event.currentTarget;
			var object	= this.scene.root.getObjectById( parseInt(element.attributes.getNamedItem("ma3d_obj_id").value), true);
			
			//highlight recursive
			object.traverse(function(obj){
				if(obj.geometry && !('isGetFeatureInfoClicked' in obj.userData))GIScene.Utils.WorkingMaterial.setSelectColor(obj,'default')/*this.selectControl.unhighlight(obj)*/;
			}.bind(this));
			
		}.bind(sov);
		
		//Create List Elements of nodes
		console.log("Create List Elements of nodes", nodes.length);
		for(var i=0,j=nodes.length; i<j; i++){
			
			
			var nodeInfo;
			var objectNameTokens = nodes[i].name.split('_'); //e.g. object_1418_null_1401808805042_0
			var nodeType 	= objectNameTokens[0] || 'unknown';
			//@TODO get correct Id when geometry service is ready
			var geomId = objectNameTokens[1];
			var attrId = objectNameTokens[2]; //"2393";//"2393" is Stela B IdaiField-ID. this is correct: objectNameTokens[2];
			//var attrId 		= objectNameTokens.slice(1,objectNameTokens.length).join('_');//objectNameTokens[1] || '';
			//... 
			
			//find out Kurzbechreibung Attribute
			if(nodes[i].userData.ma3dAttributes){
				var shortName = null;
				var shortKey = null;
				var ma3dAttributes = nodes[i].userData.ma3dAttributes;
				for (key in ma3dAttributes){
					if(key.match(/Kurzbeschreibung\w+/) != null){shortKey = key.match(/Kurzbeschreibung\w+/)[0];break;}
				}
				//if attributes do not contain attributes with Kurzbeschreibung* use object.name
				if(shortKey == null){
						shortName = nodeType + ' ' + geomId + ' ' + attrId;
					}
					else{
						shortName = ma3dAttributes[shortKey];
					}
				ma3dAttributes["ma3d_shortName"] = shortName;
				console.log("shortKey: ", shortKey);
				console.log("shortName: ", shortName);
			}
			
			// if(nodes[i].userData.ma3dAttributes && nodes[i].userData.ma3dAttributes["KurzbeschreibungSteinobjekt"]){
				// nodeInfo = nodes[i].userData.ma3dAttributes["KurzbeschreibungSteinobjekt"];
			// }
			if(nodes[i].userData.ma3dAttributes /*&& nodes[i].userData.ma3dAttributes[shortName]*/){
				nodeInfo = nodes[i].userData.ma3dAttributes["ma3d_shortName"];
			}
			else{
				console.log("Object/Node has no ma3dAttributes");
				nodeInfo = nodeType + ' ' + geomId + ' ' + attrId;
				
				var onSuccess = function(event) {
					console.log("onSuccess");
					try {
						var ma3dAttributes = JSON.parse(event.target.responseText);
						
						//if (Object.keys(ma3dAttributes).length > 0 && ma3dAttributes["PS_SteinobjektID"]){
						if (Object.keys(ma3dAttributes).length > 0 && ma3dAttributes["ma3d_attribute_id"]){
							//iterate throu all objects to find the one with the idfield id and attach attributes to the object
							sov.scene.root.traverse(function(obj) {
								// if (obj.name.split('_')[2] == ma3dAttributes["PS_SteinobjektID"]){
								if (obj.name.split('_')[2] == ma3dAttributes["ma3d_attribute_id"]){
									obj.userData.ma3dAttributes = ma3dAttributes;
								};
							});
						
							//update UI
							var currentlySelected = sov.selectControl.highlightedOnlyObjects[0];//sov.selectControl.selectedObjects[0];
							if(currentlySelected)
							{
								var nodes_ = self.getParentNodes(currentlySelected);
								console.log("update createGUI");
								self.createGui(nodes_);
							}
						}
					}catch(e){alert(e+"\n\nAttributeservice: \n\n"+event.target.responseText);}
				}.bind(sov);
				
				var onError = function(event) {
					console.log("onError");
					alert("Attributeservice Request Status:"+ event.target.status);
				}.bind(sov);
				
				if(attrId != "null"){
					console.log("Just before AttributeService");
					var as = new MA3D.AttributeService({url:"http://www.mayaarch3d.org/as"});
					as.requestAllAttributes(attrId, onSuccess, onError); //should be JSON
				}
			}
			
			
			
			var liElem = document.createElement('li');
			// liElem.setAttribute('id',nodeId);
			liElem.setAttribute("ma3d_obj_name",	nodes[i].name );
			liElem.setAttribute("ma3d_obj_id",		nodes[i].id ); //internal THREE.js Id
			liElem.setAttribute("ma3d_node_type",	nodeType );
			liElem.setAttribute("ma3d_attr_id",		attrId ); //FilemakerId
			liElem.setAttribute("ma3d_geom_id",		geomId ); //PostgresId
			
			var nodeHeader = (i==0)? "You selected:<br>" : "which is part of:<br>";
			liElem.innerHTML = nodeHeader + '<span style="font-weight: bold;">' + nodeInfo + '</span>'; //'<span class="sovBold">' + nodeType + ' ' + geomId + ' ' + attrId + '</span>';
			liElem.addEventListener('click', onClick, false);
			liElem.addEventListener('mouseenter', onMouseEnter, false);
			liElem.addEventListener('mouseleave', onMouseLeave, false);
			
			ulElem.appendChild(liElem);
		};
		
		selectSegmentedContainer.element.appendChild(ulElem);
		
		//$('#select_output_container').append(selectSegmentedContainer);
	};
	
	this.onSelect = function(event) {
		console.log("onSelect");
		console.log(event.content);
		var object = event.content;
		var nodes = this.getParentNodes(object);
		object.userData.isGetFeatureInfoClicked = true;
		console.log(nodes);
		console.log("onSelect:createGUI");
		this.createGui(nodes);
	}.bind(this);
	
	this.onUnselect = function(event) {
		console.log('unselect segmented');
		var object = event.content;
		delete object.userData.isGetFeatureInfoClicked;
		this.deleteGui();
	}.bind(this);
	
	//register events
	// $('#select').on('change', function(e) {
	$(checkboxButton).on('change', function(e) {
		if(e.target.checked){
			
			// var onSelected = function(event) {document.getElementById('select_output').value = event.content.name;};
			// var onUnselected = function(event) {document.getElementById('select_output').value = 'selected object';};
			sov.selectControl.addEventListener('highlighted', this.onSelect);
			sov.selectControl.addEventListener('unhighlighted', this.onUnselect);
		} else {
			sov.selectControl.removeEventListener('highlighted', this.onSelect);
			sov.selectControl.removeEventListener('unhighlighted', this.onUnselect);
		}
	}.bind(this));
	 
};
/**
 * Simple Dialog
 */

MA3D.Dialog = function(title, containerDiv) {
	
	this.id = MA3D.idCounter++;
	this.title = title || "";
	this.containerDiv = containerDiv || document.body;
	
	this.dialogDiv = document.createElement('div');
	this.containerDiv.appendChild(this.dialogDiv);
	
	$(this.dialogDiv).dialog(	{
									title: this.title,
									close: function(event, ui) {$(this).dialog('destroy').remove();},
									height:500,
									width:450,
									// position:{ my: "center top+50px", at: "center top", of: this.containerDiv },
									appendTo: this.containerDiv
								});
	$(this.dialogDiv).dialog('widget').css({boxShadow:'2px 2px 7px rgba(0,0,0,0.5)',"z-index":'2000000', top:"50px"});

};/**
 * 
 */

MA3D.Dialog.ImportGeoJSON = function(scene, containerDiv) {
	
	MA3D.Dialog.apply(this,["Import GeoJSON", containerDiv]);
	
	this.onProgress = function() {};
	this.onError	= function() {};
	
	// this.object = null; //the Object3D from the Loader
	this.filename = "";
	this.geojsonText = "";
	var parser = new GIScene.GeoJSONLoader();
	
	this.onSuccess  = function(geojsonText, filename) {
		
		// TODO find out attributes and choose height
		
		
		var geojson = JSON.parse( geojsonText );
		// this.object = parser.parse( geojson ); 
		this.filename = filename;
		this.geojsonText = geojsonText;
		
		//check for z coordinate
		var hasZ = parser.hasZCoordinates(geojson);
		
		//enable radio
		if(hasZ){
			$("#ma3d-importGeoJSON-useZ-" + this.id).prop("disabled", false);
		}else{
			$("#ma3d-importGeoJSON-useAttr-" + this.id).prop("checked", true);
		}
		$("#ma3d-importGeoJSON-useAttr-" + this.id).prop("disabled", false);
		//fire changed event
		$("#ma3d-importGeoJSON-useAttr-" + this.id).trigger('change');
		
		//if no z coordinate is found
		// message
		// get available attributes with Numbers
		var attributeNames = parser.getAttributeNames(geojson);
		var exampleValues  = parser.getExampleValues(geojson);
		//populate select input
		for(var i=0,j=attributeNames.length; i<j; i++){
		  
		  var option = document.createElement("option");
		  option.textContent = attributeNames[i] + " (e.g. "+ exampleValues[i] +")";
		  option.value =  attributeNames[i];
		  this.attrSelect.appendChild(option);
		  
		};
		
		
	}.bind(this);
	
	//Form
	this.form = document.createElement("form");
	this.form.className = 'ma3d-analysisDialog-form';
	this.dialogDiv.appendChild(this.form);
	
	//File Chooser
	this.fileFieldset = document.createElement("fieldset");
	
	this.fileLegend = document.createElement("legend");
	this.fileLegend.textContent = "Select a GeoJSON file to import:";
		
	this.inputElement = document.createElement("input");
	this.inputElement.type = "file";
	this.inputElement.id = "ma3d-fileinput-"+MA3D.idCounter++;	
	
	this.loader = new GIScene.LocalFileLoader(this.inputElement, "TEXT", this.onSuccess, this.onProgress, this.onError);
	
	this.fileFieldset.appendChild(this.fileLegend);
	this.fileFieldset.appendChild(this.inputElement);	
	this.form.appendChild(this.fileFieldset);	
	
	//radio chooser Z value or attribute field
	//enable when z checked on loading success
	this.zLegend = document.createElement("legend");
	this.zLegend.textContent = "Use Z values of:";
	
	this.useZElement = document.createElement("input");
	this.useZElement.type = "radio";
	this.useZElement.name = "zOrAttr";
	this.useZElement.id = "ma3d-importGeoJSON-useZ-" + this.id;
	this.useZElement.value = "useZ";
	// this.useZElement.disabled = true;
	
	this.useAttrElement = document.createElement("input");
	this.useAttrElement.type = "radio";
	this.useAttrElement.name = "zOrAttr";
	this.useAttrElement.id = "ma3d-importGeoJSON-useAttr-" + this.id;
	this.useAttrElement.value = "useAttr";
	// this.useAttrElement.disabled = true;
	
	
	this.zFieldset = document.createElement("fieldset");
	
	this.zFieldset.appendChild(this.zLegend);
	this.zFieldset.appendChild(this.useZElement);
	this.zFieldset.innerHTML += "coordinates";
	this.zFieldset.appendChild(this.useAttrElement);
	this.zFieldset.innerHTML += "an attribute";
	
	this.form.appendChild(this.zFieldset);
	
	//
	this.attrFieldset = document.createElement("fieldset");
	this.attrLegend = document.createElement("legend");
	this.attrLegend.textContent = "Choose attribute containing the z-value (height):";
	this.attrSelect = document.createElement("select");
	this.attrSelect.id = "ma3d-importGeoJSON-attrSelect-"+this.id; 
	// this.attrSelect.disabled = true;
	
	this.attrFieldset.appendChild(this.attrLegend);
	this.attrFieldset.appendChild(this.attrSelect);
	
	this.form.appendChild(this.attrFieldset);
	
	//set disabled
	$("#ma3d-importGeoJSON-useAttr-"+this.id).prop("disabled",  true);
	$("#ma3d-importGeoJSON-useZ-"+this.id).prop("disabled",  true);
	$("#ma3d-importGeoJSON-attrSelect-"+this.id).prop("disabled",  true);
	
	
	
	//add Form buttons
	var cancelButton = new MA3D.Button({
			text: 'Cancel',
			behaviour : 'button',
			type : 'button',
			appendTo: this.form
		});
	
	
	var executeButton= new MA3D.Button({
			text: 'Import',
			behaviour : 'button',
			type : 'button',
			appendTo: this.form
	});	
	$( executeButton.widgetElement ).button( "option", "disabled", true );	
	
	//Cancel Dialog (close dialog)
	var onCancelClick = function(event) {
		$(this.dialogDiv).dialog('destroy').remove();
	}.bind(this);
	$(cancelButton.buttonElement).on('click', onCancelClick);
	
	var onClickExecute = function(event) {
		console.log("onExeceute");
		
		var heightAttribute = document.getElementById("ma3d-importGeoJSON-attrSelect-"+this.id).value;
		
		var geojson = JSON.parse( this.geojsonText );
		var object = parser.parse( geojson , undefined, heightAttribute); 
		
		var layerConfig = {
		"layerGroup" : "Imported Layers"
		};
		var layer = new GIScene.Layer(this.filename, layerConfig);
		
		layer.root.add(object);
		
		scene.addLayer(layer);
		$(this.dialogDiv).dialog('destroy').remove();
	}.bind(this);
	$(executeButton.buttonElement).on('click', onClickExecute);
	
	//
	var onUseAttr = function(event) {
		console.log("useAttr changed");
		if(event.target.checked){
			//enable attribute selection
			$("#ma3d-importGeoJSON-attrSelect-"+this.id).prop("disabled",  false);
			$( executeButton.widgetElement ).button( "option", "disabled", false );
		}
		else{
			//disable attribute selection
			$("#ma3d-importGeoJSON-attrSelect-"+this.id).prop("disabled",  true);
			
			$( executeButton.widgetElement ).button( "option", "disabled", false );
		}
	}.bind(this);
	$("#ma3d-importGeoJSON-useAttr-"+this.id).on('change', onUseAttr);
	
	
};

MA3D.Dialog.ImportGeoJSON.prototype = Object.create(MA3D.Dialog.prototype);
/**
 * 
 */

MA3D.Dialog.AddAspectMaterial = function(scene, containerDiv) {
	
	MA3D.Dialog.apply(this,["Add Aspect Material", containerDiv]);
	
	
	var selectedLayer;
	
	//defaults
	var maxDeviationDeg = 15, compassDirectionDeg = 0;
	var compassDirectionV3 = this.dirV3FromAspectDeg(compassDirectionDeg);
	
	var aspectMaterial = new GIScene.AspectMaterial(compassDirectionV3, maxDeviationDeg);
	var style = new GIScene.Style({
		title : 'Aspect',
		material : aspectMaterial
	});
	
	var abstract = 	"<h3>Abstract:</h3>"
					+"Visualizes a specified compass direction (aspect) by color coding faces which are perpendicular to that direction within a specified deviation."
					+"<br>"
					+"This is similar to the DirectionMaterial but only considers the horizontal angle of the face normals and not the vertical angle.";
	
	
	

	
	//GUI
	
	this.accordion = new MA3D.Accordion();
	this.dialogDiv.appendChild(this.accordion.div);
	var descItem = new MA3D.AccordionItem(
		{state:'closed', title:'Description'}
	);
	this.accordion.add(descItem);
	
	var processDescriptionDiv = new MA3D.ToolContainer({
		appendTo: descItem.content
	});
	
	processDescriptionDiv.element.innerHTML = abstract;
	
	//SETTINGS											
	var settingsItem = new MA3D.AccordionItem(
		{state:'open', title:'Settings'}
	);
	this.accordion.add(settingsItem);	
	
	
	
	
	var settingsDiv = new MA3D.ToolContainer({
		appendTo: settingsItem.content
	});
	
	var form = document.createElement("form");
	form.className = 'ma3d-analysisDialog-form';
	settingsDiv.element.appendChild(form);
	
	//Layer selection
	var  layerSelectField = new MA3D.LayerSelectfield({
		label	: 'Add Aspect to this layer',
		name 	: 'ma3d-analysis-orientation-aspect-layer',
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		scene	: scene,
		appendTo: form,
		listeners: [{'change': function (event) {
		  							
		  							//old value
		  							var before_change = $(this).data('old');//get the pre data
								  	var old_layer =  scene.getLayerById(before_change);
								    
								    
		  							
		  							
		  							var value = event.target.value;
		  							selectedLayer = scene.getLayerById(value);
		  							
		  							if(old_layer instanceof GIScene.Layer){
		  								old_layer.removeStyle(style);
		  							}
		  							
		  							if(selectedLayer instanceof GIScene.Layer){
		  								selectedLayer.addStyle(style);
		  								selectedLayer.setActiveStyle(style);
		  								$( executeButton.widgetElement ).button( "option", "disabled", false );
		  							}
		  							else {
		  								$( executeButton.widgetElement ).button( "option", "disabled", true );
		  							}
		  							
		  							//set next old value
		  							$(this).data('old', $(this).val());//update the old data
		  							
		}
		}]
	});
	//first time inittialization of storing old data
	$(layerSelectField.element).data('old', "");
	
	var onKeyup_onInput_direction = function (event){
		
		var value = parseFloat( event.target.value );
									
		if( typeof value === 'number' ){
			
			compassDirectionDeg = value;
			compassDirectionV3 = this.dirV3FromAspectDeg(value);
			aspectMaterial.compassDirection = compassDirectionV3;
				
		} 
		
	}.bind(this);	
	
	new MA3D.Numberfield({
		label	: 'Compass direction to highlight',
		value	: "0",
		spinner	: true,
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		appendTo: form,
		listeners: [
						{'keyup': onKeyup_onInput_direction }
						,
						{'input': onKeyup_onInput_direction }
						,
						{
							'change': function(event) {
								var value = parseFloat( event.target.value );
									
								if( typeof value !== 'number' ){
									
									event.target.value = "0";
									
								} 
							}
						}
					]
					
	});
	
	
	var onKeyup_onInput_deviation = function( event ) {
						
		var value = parseFloat( event.target.value );
			
		if( typeof value === 'number' ){
			
			if(value < 0 ){
				value = 0;
				event.target.value = "0";
			}
			
			value =  value % 360 ;
			
			maxDeviationDeg = value;
			aspectMaterial.maxDeviationDeg = maxDeviationDeg;
			
		} 
		
	}.bind(this); 
	
	new MA3D.Numberfield({
		label	: 'Max. deviation (degrees)',
		value	: "15",
		spinner	: true,
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		appendTo: form,
		listeners: [
						{'keyup': onKeyup_onInput_deviation }
						,
						{'input': onKeyup_onInput_deviation }
						,
						{
							'change': function(event) {
								var value = parseFloat( event.target.value );
									
								if( typeof value !== 'number' ){
									
									event.target.value = "15";
									
								} 
							}
						}
					]
					
	});
	
	
	
	//add Form buttons
	var cancelButton = new MA3D.Button({
			text: 'Cancel',
			behaviour : 'button',
			type : 'button',
			appendTo: form
		});
	
	
	var executeButton= new MA3D.Button({
			text: 'Add Aspect to Layer',
			behaviour : 'button',
			type : 'button',
			appendTo: form
	});	
	$( executeButton.widgetElement ).button( "option", "disabled", true );	
	
	//Cancel Dialog (close dialog)
	var onCancelClick = function(event) {
		
		selectedLayer.removeStyle(style);
		
		$(this.dialogDiv).dialog('destroy').remove();
	
	}.bind(this);
	
	$(cancelButton.buttonElement).on('click', onCancelClick);
	
	
	var onClickExecute = function(event) {
		// update text in tree node
		
		style.title = "Aspect (" + compassDirectionDeg + "°, " + maxDeviationDeg +"°)";
		
		selectedLayer.removeStyle(style);
		selectedLayer.addStyle(style);
		selectedLayer.setActiveStyle(style);
		
		$(this.dialogDiv).dialog('destroy').remove();

	}.bind(this);

	$(executeButton.buttonElement).on('click', onClickExecute);
	

	
};

MA3D.Dialog.AddAspectMaterial.prototype = Object.create(MA3D.Dialog.prototype);

MA3D.Dialog.AddAspectMaterial.prototype.dirV3FromAspectDeg = function(deg){

	  var north = new THREE.Vector3(0,0,-1);
	  var axis  = new THREE.Vector3(0,1, 0);
	  
	  var deg = deg % 360 || 0;
	  
	  var rad = THREE.Math.degToRad(deg);
	  
	  north.applyAxisAngle(new THREE.Vector3(0,1,0), -rad);
	  
	  
	  north.x = Math.round(north.x * 10000000000)/10000000000;
	  north.y = Math.round(north.y * 10000000000)/10000000000;
	  north.z = Math.round(north.z * 10000000000)/10000000000;
	  
	  north.normalize();
	  
	  return north;
	
	};
/**
 * 
 */

MA3D.Dialog.AddPointAlignmentMaterial = function(scene, containerDiv) {
	
	MA3D.Dialog.apply(this,["Add Point Alignment Material", containerDiv]);
	
	$(this.dialogDiv).on( "dialogbeforeclose", function( event, ui ) { scene.disposeLayer( layer ); } );
	
	var selectedLayer;
	
	//defaults
	var point = scene.center.clone(); 
	var pointOffset = 0;
	var maxDeviationDeg = 15; 
	var maxUpDeviationDeg = 5;
	
	var pointAlignmentMaterial = new GIScene.PointAlignmentMaterial();
	var style = new GIScene.Style({
		title : 'Point Alignment',
		material : pointAlignmentMaterial
	});
	
	
	//helper
	var layerConfig = {
		"layerGroup" : "User-generated"
	};
	var layer = new GIScene.Layer.Helper("Point Alignment Target Point", layerConfig);
	var pickSymbol = THREE.ImageUtils.loadTexture( GIScene.LIBRARYPATH + GIScene.RESOURCESPATH.replace(/([^\/])$/, "$1/") +"resources/images/particle_x.png");
	
	var observerPointGeom = new THREE.Geometry();
	observerPointGeom.vertices[0]= point;//new THREE.Vector3(0,0,0);
	var observerPointMaterial = new THREE.PointCloudMaterial({
												color:new THREE.Color(0x00ffff),
												sizeAttenuation:false,
												size:32,
												map:pickSymbol,
												alphaTest:0.5	
											});
	var observerPoint   = new THREE.PointCloud(observerPointGeom, observerPointMaterial);
	observerPoint.visible=false;
	
	var obsOffsetLineGeom = new THREE.Geometry();
	obsOffsetLineGeom.vertices = [point, point];//[new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)];
	var obsOffsetLineMaterial = new THREE.LineBasicMaterial({
		color:new THREE.Color(0x00ffff)
	});
	var obsOffsetLine = new THREE.Line(obsOffsetLineGeom, obsOffsetLineMaterial);
	
	
	layer.root.add(observerPoint);
	layer.root.add(obsOffsetLine);
	layer.config.offset = scene.config.offset;
	scene.addLayer(layer);
	
	
	var updateHelpers = function() {
		//update point object
		var obsPoint  = point;
		var obsOffset = pointOffset;
		if(obsPoint){
			observerPointGeom.vertices[0] = obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0));
			observerPointGeom.verticesNeedUpdate = true;
			
			obsOffsetLineGeom.vertices = [obsPoint.clone(), obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0))];
			obsOffsetLineGeom.verticesNeedUpdate = true;
		}
		
	}.bind(this);
	
	
	//Description
	var abstract = 	"<h3>Abstract:</h3>"
					+"Visualizes a the orientation of surfaces towards a selected target point by color coding those faces within a specified horizontal deviation.";
					
					
	
	
	

	
	//GUI
	
	this.accordion = new MA3D.Accordion();
	this.dialogDiv.appendChild(this.accordion.div);
	var descItem = new MA3D.AccordionItem(
		{state:'closed', title:'Description'}
	);
	this.accordion.add(descItem);
	
	var processDescriptionDiv = new MA3D.ToolContainer({
		appendTo: descItem.content
	});
	
	processDescriptionDiv.element.innerHTML = abstract;
	
	//SETTINGS											
	var settingsItem = new MA3D.AccordionItem(
		{state:'open', title:'Settings'}
	);
	this.accordion.add(settingsItem);	
	
	
	
	
	var settingsDiv = new MA3D.ToolContainer({
		appendTo: settingsItem.content
	});
	
	var form = document.createElement("form");
	form.className = 'ma3d-analysisDialog-form';
	settingsDiv.element.appendChild(form);
	
	//Layer selection
	var  layerSelectField = new MA3D.LayerSelectfield({
		label	: 'Add Aspect to this layer',
		name 	: 'ma3d-analysis-orientation-aspect-layer',
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		scene	: scene,
		appendTo: form,
		listeners: [{'change': function (event) {
		  							
		  							//old value
		  							var before_change = $(this).data('old');//get the pre data
								  	var old_layer =  scene.getLayerById(before_change);
								    
								    
		  							
		  							
		  							var value = event.target.value;
		  							selectedLayer = scene.getLayerById(value);
		  							
		  							if(old_layer instanceof GIScene.Layer){
		  								old_layer.removeStyle(style);
		  							}
		  							
		  							if(selectedLayer instanceof GIScene.Layer){
		  								selectedLayer.addStyle(style);
		  								selectedLayer.setActiveStyle(style);
		  								$( executeButton.widgetElement ).button( "option", "disabled", false );
		  							}
		  							else {
		  								$( executeButton.widgetElement ).button( "option", "disabled", true );
		  							}
		  							
		  							//set next old value
		  							$(this).data('old', $(this).val());//update the old data
		  							
		}
		}]
	});
	//first time inittialization of storing old data
	$(layerSelectField.element).data('old', "");
	
	//Target Point
	var targetPointPickfield = new MA3D.Pickfield({
					label: "Target Point",
					name: "ma3d-addPointAligmnet-targetPoint", 
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					scene			: scene,
					appendTo: form,
					listeners : [{'change': function(event) {
						var values = event.target.value.split(",");
						
						if(event.target.name == "ma3d-addPointAligmnet-targetPoint"){
							observerPoint.visible=true;
							var observerPointCoords = new GIScene.Coordinate3(parseFloat(values[0]),parseFloat(values[1]),parseFloat(values[2])).sub(scene.config.offset).toVector3(); 
							
							//set process input
							//this.process.setInput(event.target.name, observerPointCoords);
							point = observerPointCoords;

							pointAlignmentMaterial.point = point.clone().setY(point.y + pointOffset);
							
							updateHelpers();
						
						}
					}.bind(this) }]
				});
	
	
	//Target point vertical offset
	var onKeyup_onInput_offset = function(event) {
		var value = parseFloat( event.target.value );
									
		if( typeof value === 'number' ){
			
			pointOffset = value;
			
			pointAlignmentMaterial.point = point.clone().setY(point.y + pointOffset);
			
			updateHelpers();
				
		} 
	}.bind(this);
	
	new MA3D.Numberfield({
		label	: 'Target Point Offset',
		value	: "0",
		spinner	: true,
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		appendTo: form,
		listeners: [
						{'keyup': onKeyup_onInput_offset }
						,
						{'input': onKeyup_onInput_offset }
						,
						{
							'change': function(event) {
								var value = parseFloat( event.target.value );
									
								if( typeof value !== 'number' ){
									
									event.target.value = "0";
									
								} 
							}
						}
					]
					
	});
	
		
	var onKeyup_onInput_deviation = function( event ) {
						
		var value = parseFloat( event.target.value );
			
		if( typeof value === 'number' ){
			
			if(value < 0 ){
				value = 0;
				event.target.value = "0";
			}
			
			value =  value % 360 ;
			
			if(event.target.name == 'ma3d-addPointAligmnet-maxHorizontalDev'){
				maxDeviationDeg = value;
				pointAlignmentMaterial.maxDeviationDeg = maxDeviationDeg;
			}
			// else{ //ma3d-addPointAligmnet-maxVerticalDev
				// maxUpDeviationDeg = value;
				// pointAlignmentMaterial.maxUpDeviationDeg = maxDeviationDeg;
			// }
			
			
			
		} 
		
	}.bind(this); 
	
	new MA3D.Numberfield({
		label	: 'Max. horizontal deviation (degrees)',
		name	: "ma3d-addPointAligmnet-maxHorizontalDev",
		value	: "15",
		spinner	: true,
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		appendTo: form,
		listeners: [
						{'keyup': onKeyup_onInput_deviation }
						,
						{'input': onKeyup_onInput_deviation }
						,
						{
							'change': function(event) {
								var value = parseFloat( event.target.value );
									
								if( typeof value !== 'number' ){
									
									event.target.value = "15";
									
								} 
							}
						}
					]
					
	});
	
	// new MA3D.Numberfield({
		// label	: 'Max. vertical deviation (degrees)',
		// name	: "ma3d-addPointAligmnet-maxVerticalDev",
		// value	: "5",
		// spinner	: true,
		// cssClass		: "ma3d-analysisDialog-textfield",
		// cssClassLabel	: "ma3d-analysisDialog-label",
		// cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		// appendTo: form,
		// listeners: [
						// {'keyup': onKeyup_onInput_deviation }
						// ,
						// {'input': onKeyup_onInput_deviation }
						// ,
						// {
							// 'change': function(event) {
								// var value = parseFloat( event.target.value );
// 									
								// if( typeof value !== 'number' ){
// 									
									// event.target.value = "5";
// 									
								// } 
							// }
						// }
					// ]
// 					
	// });
	
	//add Form buttons
	var cancelButton = new MA3D.Button({
			text: 'Cancel',
			behaviour : 'button',
			type : 'button',
			appendTo: form
		});
	
	
	var executeButton= new MA3D.Button({
			text: 'Add Aspect to Layer',
			behaviour : 'button',
			type : 'button',
			appendTo: form
	});	
	$( executeButton.widgetElement ).button( "option", "disabled", true );	
	
	//Cancel Dialog (close dialog)
	var onCancelClick = function(event) {
		
		selectedLayer.removeStyle(style);
		
		scene.disoseLayer(layer);
		
		$(this.dialogDiv).dialog('destroy').remove();
	
	}.bind(this);
	
	$(cancelButton.buttonElement).on('click', onCancelClick);
	
	
	var onClickExecute = function(event) {
		// update text in tree node
		
		var targetPointStringTokens = targetPointPickfield.element.value.split(',');
		targetPointStringTokens[2] += pointOffset;
		
		var targetPointString = targetPointStringTokens.join(',');
		
		
		style.title = "Point Alignment ([" + targetPointString + "], " + maxDeviationDeg + "°)";
		
		selectedLayer.removeStyle(style);
		selectedLayer.addStyle(style);
		selectedLayer.setActiveStyle(style);
		
		$(this.dialogDiv).dialog('destroy').remove();

	}.bind(this);

	$(executeButton.buttonElement).on('click', onClickExecute);
	

	
};

MA3D.Dialog.AddPointAlignmentMaterial.prototype = Object.create(MA3D.Dialog.prototype);

/**
 * 
 */

MA3D.Dialog.AddRasterOverlay = function(scene, containerDiv) {
	
	MA3D.Dialog.apply(this,["Add Raster Overlay", containerDiv]);
	
	
	var selectedLayer;
	var numFilesSelected = 0;
	var filename = "";
	var style = null;
	
	var overlay = {img:{},worldFile:{}, bbox:{}};
	
	//defaults
	
	
	// var rasterOverlayMaterial = new GIScene.RasterOverlayMaterial();
	// var style = new GIScene.Style({
		// title : 'Raster',
		// material : rasterOverlayMaterial
	// });
	
	var abstract = 	"<h3>Abstract:</h3>"
					+"Drapes a local raster file (png or jpeg) over a 3D layer (e.g. terrain). You must provide a <a href='http://en.wikipedia.org/wiki/World_file' target='_blank'>worldfile</a> for georeferencing.";
	
	
	

	
	//GUI
	
	this.accordion = new MA3D.Accordion();
	this.dialogDiv.appendChild(this.accordion.div);
	var descItem = new MA3D.AccordionItem(
		{state:'closed', title:'Description'}
	);
	this.accordion.add(descItem);
	
	var processDescriptionDiv = new MA3D.ToolContainer({
		appendTo: descItem.content
	});
	
	processDescriptionDiv.element.innerHTML = abstract;
	
	//SETTINGS											
	var settingsItem = new MA3D.AccordionItem(
		{state:'open', title:'Settings'}
	);
	this.accordion.add(settingsItem);	
	
	
	
	
	var settingsDiv = new MA3D.ToolContainer({
		appendTo: settingsItem.content
	});
	
	var form = document.createElement("form");
	form.className = 'ma3d-analysisDialog-form';
	settingsDiv.element.appendChild(form);
	
	//Layer selection
	var  layerSelectField = new MA3D.LayerSelectfield({
		label	: 'Add Rasteroverlay to this layer',
		name 	: 'ma3d-analysis-orientation-aspect-layer',
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		scene	: scene,
		appendTo: form,
		listeners: [{'change': function (event) {
		  							
		  							// //old value
		  							// var before_change = $(this).data('old');//get the pre data
								  	// var old_layer =  scene.getLayerById(before_change);
// 								    
								    
		  							
		  							
		  							var value = event.target.value;
		  							selectedLayer = scene.getLayerById(value);
		  							
		  							// if(old_layer instanceof GIScene.Layer){
		  								// old_layer.removeStyle(style);
		  							// }
		  							
		  							// if(selectedLayer instanceof GIScene.Layer){
		  								// selectedLayer.addStyle(style);
		  								// selectedLayer.setActiveStyle(style);
		  								// $( executeButton.widgetElement ).button( "option", "disabled", false );
		  							// }
		  							// else {
		  								// $( executeButton.widgetElement ).button( "option", "disabled", true );
		  							// }
// 		  							
		  							// //set next old value
		  							// $(this).data('old', $(this).val());//update the old data
		  							
		}
		}]
	});
	//first time inittialization of storing old data
	$(layerSelectField.element).data('old', "");
	
	
	
	var onSuccessRaster = function(result, rasterFilename) {
		var dataURL = result;
		overlay.img.img = new Image();
		overlay.img.img.onload = function(event) {
			
			overlay.img.numPxX = event.target.naturalWidth;
			overlay.img.numPxY = event.target.naturalHeight;
			
			numFilesSelected++;
			
			if(numFilesSelected>1){
				createStyle();	
			}
		}.bind(this);
		overlay.img.img.src = dataURL;
		
		filename = rasterFilename;
				
		
	}.bind(this);
	
	var onSuccessWorldfile = function(result, worldfilename) {
		var txt = result;
		var lines = txt.split('\n');
		overlay.worldFile.pxSizeX = parseFloat(lines[0]);
		overlay.worldFile.pxSizeY = parseFloat(lines[3]);
		overlay.worldFile.topLeftPxCenterX = parseFloat(lines[4]);
		overlay.worldFile.topLeftPxCenterY = parseFloat(lines[5]);
		
		//compute bbox
		overlay.bbox.left = overlay.worldFile.topLeftPxCenterX - overlay.worldFile.pxSizeX/2;
		overlay.bbox.top = overlay.worldFile.topLeftPxCenterY + overlay.worldFile.pxSizeX/2;
		overlay.bbox.right = overlay.bbox.left + overlay.img.numPxX * overlay.worldFile.pxSizeX;
		overlay.bbox.bottom = overlay.bbox.top + overlay.img.numPxY * overlay.worldFile.pxSizeY; 
		
		
		numFilesSelected++;
		if(numFilesSelected>1){
			createStyle();	
		}
	};
	
	
	var createStyle = function() {
		console.log('numFilesSelected', numFilesSelected);
		
		var texture = new THREE.Texture(overlay.img.img);
		var rasterOverlayMaterial = new GIScene.RasterOverlayMaterial({
	            lowerLeft:  new GIScene.Coordinate2(overlay.bbox.left,overlay.bbox.bottom), //the lower left coordinate of the image boundingBox
	            upperRight: new GIScene.Coordinate2(overlay.bbox.right, overlay.bbox.top), //the upper right coordinate of the image boundingBox
	            offset2:    new GIScene.Coordinate2(scene.config.offset.x,scene.config.offset.y), //optional
	            // url:"http://www.example.com/rasterimage.jpg",
	            // crossOrigin:"anonymous" 
	            texture: texture //instead of url you can also pass an existing texture  
	    });
	    rasterOverlayMaterial.uniforms.tOverlay.value.needsUpdate=true;
	    
	    //find color params of default material
	    var color, ambient;
	    var defaultMaterial = selectedLayer.styles[0].material;
	    
	    if(defaultMaterial){
	    	if(defaultMaterial.color){
	    		color = defaultMaterial.color.clone();
		    }
		    if(defaultMaterial.ambient){
		    	ambient = defaultMaterial.ambient.clone();
		    }
		    if(!!color && !!ambient){
		    	rasterOverlayMaterial.uniforms.diffuse.value = color;
		    	rasterOverlayMaterial.uniforms.ambient.value = ambient;
		    }
		    if(!!color && !ambient){
		    	rasterOverlayMaterial.uniforms.diffuse.value = color;
		    	rasterOverlayMaterial.uniforms.ambient.value = color;
		    }
	    }else{
	    	//no overrideMaterial has been set --> use default colors
	    	rasterOverlayMaterial.uniforms.diffuse.value = new THREE.Color(0xCCCCCC);
		    rasterOverlayMaterial.uniforms.ambient.value = new THREE.Color(0xCCCCCC);
	    }
	    
	    
		
		style = new GIScene.Style({
			title : 'Raster ('+ filename +')',
			material : rasterOverlayMaterial
		});
		
		$( executeButton.widgetElement ).button( "option", "disabled", false );
	}.bind(this);
	
	
	var rasterfile = new MA3D.Textfield({
		label	: 'Rasterfile',
		name 	: "ma3d-fileinput-"+MA3D.idCounter++,
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		appendTo: form
	});
	rasterfile.element.type = "file";
	
	this.rasterloader = new GIScene.LocalFileLoader(rasterfile.element, "DATAURL", onSuccessRaster, null, this.onError);
	
	var worldfile = new MA3D.Textfield({
		label	: 'Worldfile',
		name 	: "ma3d-fileinput-"+MA3D.idCounter++,
		cssClass		: "ma3d-analysisDialog-textfield",
		cssClassLabel	: "ma3d-analysisDialog-label",
		cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
		appendTo: form
	});
	worldfile.element.type = "file";
	
	this.worldfileLoader = new GIScene.LocalFileLoader(worldfile.element, "TEXT", onSuccessWorldfile, null, this.onError);
	
	//add Form buttons
	var cancelButton = new MA3D.Button({
			text: 'Cancel',
			behaviour : 'button',
			type : 'button',
			appendTo: form
		});
	
	
	var executeButton= new MA3D.Button({
			text: 'Add Raster to Layer',
			behaviour : 'button',
			type : 'button',
			appendTo: form
	});	
	$( executeButton.widgetElement ).button( "option", "disabled", true );	
	
	//Cancel Dialog (close dialog)
	var onCancelClick = function(event) {
		
		//selectedLayer.removeStyle(style);
		
		$(this.dialogDiv).dialog('destroy').remove();
	
	}.bind(this);
	
	$(cancelButton.buttonElement).on('click', onCancelClick);
	
	
	var onClickExecute = function(event) {
		// update text in tree node
		
		// selectedLayer.removeStyle(style);
		selectedLayer.addStyle(style);
		selectedLayer.setActiveStyle(style);
		
		$(this.dialogDiv).dialog('destroy').remove();

	}.bind(this);

	$(executeButton.buttonElement).on('click', onClickExecute);
	

	
};

MA3D.Dialog.AddRasterOverlay.prototype = Object.create(MA3D.Dialog.prototype);

MA3D.Dialog.AddRasterOverlay.prototype.onError = function(error, filename) {
	alert(filename + ': '+ error);
};

/**
 * Analysis Dialog 
 */

MA3D.AnalysisDialog = function(process, containerDiv) {
	
	this.process = process || {};
	this.containerDiv = containerDiv || document.body;
	
	this.dialogDiv = document.createElement('div');
	this.containerDiv.appendChild(this.dialogDiv);
	
	
	
	this.accordion = new MA3D.Accordion();
	this.dialogDiv.appendChild(this.accordion.div);
	var descItem = new MA3D.AccordionItem(
		{state:'closed', title:'Description'}
	);
	this.accordion.add(descItem);
	
	var processDescriptionDiv = new MA3D.ToolContainer({
		appendTo: descItem.content
	});
	
	var inputParams = "";
	var inputs = this.process.description.inputs;
	inputs.forEach(function(e,i,a){inputParams+="<tr><td>"+e.title+"</td><td>"+e.abstract+"</td></tr>";});
	
	var outputParams = "";
	var outputs = this.process.description.outputs;
	outputs.forEach(function(e,i,a){outputParams+="<tr><td>"+e.title+"</td><td>"+e.abstract+"</td></tr>";});
	
	
	processDescriptionDiv.element.innerHTML = 	"<p>Process Version: "+ this.process.processVersion +"</p>"
												+"<h3>Abstract:</h3>"
												+"<p>"
												+this.process.abstract
												+"</p>"
												+"<h3>Input Parameters:</h3>"
												+"<table class='ma3d-analysisDialog-table'>"
												+inputParams
												+"</table>"
												+"<h3>Output Values:</h3>"
												+"<table class='ma3d-analysisDialog-table'>"
												+outputParams
												+"</table>"
												;
	
	
	
	$(this.dialogDiv).dialog(	{
									title: this.process.title,
									close: function(event, ui) {$(this).dialog('destroy').remove();},
									height:500,
									width:450,
									// position:{ my: "center top+50px", at: "center top", of: this.containerDiv },
									appendTo: this.containerDiv
								});
	$(this.dialogDiv).dialog('widget').css({boxShadow:'2px 2px 7px rgba(0,0,0,0.5)',"z-index":'2000000', top:"50px"});

};/**
 * Analysis Dialog 
 */

MA3D.AnalysisDialog = function(process, containerDiv) {
	
	this.process = process || {};
	this.containerDiv = containerDiv || document.body;
	
	this.dialogDiv = document.createElement('div');
	this.containerDiv.appendChild(this.dialogDiv);
	
	
	
	this.accordion = new MA3D.Accordion();
	this.dialogDiv.appendChild(this.accordion.div);
	var descItem = new MA3D.AccordionItem(
		{state:'closed', title:'Description'}
	);
	this.accordion.add(descItem);
	
	var processDescriptionDiv = new MA3D.ToolContainer({
		appendTo: descItem.content
	});
	
	var inputParams = "";
	var inputs = this.process.description.inputs;
	inputs.forEach(function(e,i,a){inputParams+="<tr><td>"+e.title+"</td><td>"+e.abstract+"</td></tr>";});
	
	var outputParams = "";
	var outputs = this.process.description.outputs;
	outputs.forEach(function(e,i,a){outputParams+="<tr><td>"+e.title+"</td><td>"+e.abstract+"</td></tr>";});
	
	
	processDescriptionDiv.element.innerHTML = 	"<p>Process Version: "+ this.process.processVersion +"</p>"
												+"<h3>Abstract:</h3>"
												+"<p>"
												+this.process.abstract
												+"</p>"
												+"<h3>Input Parameters:</h3>"
												+"<table class='ma3d-analysisDialog-table'>"
												+inputParams
												+"</table>"
												+"<h3>Output Values:</h3>"
												+"<table class='ma3d-analysisDialog-table'>"
												+outputParams
												+"</table>"
												;
	
	
	
	$(this.dialogDiv).dialog(	{
									title: this.process.title,
									close: function(event, ui) {$(this).dialog('destroy').remove();},
									height:500,
									width:450,
									// position:{ my: "center top+50px", at: "center top", of: this.containerDiv },
									appendTo: this.containerDiv
								});
	$(this.dialogDiv).dialog('widget').css({boxShadow:'2px 2px 7px rgba(0,0,0,0.5)',"z-index":'2000000', top:"50px"});

};/**
 * 
 */

MA3D.AnalysisDialog.LineOfSight = function(scene, containerDiv) {
	
	MA3D.AnalysisDialog.apply(this,[new GIScene.Process.LineOfSight(), containerDiv]);
	
	$(this.dialogDiv).on( "dialogbeforeclose", function( event, ui ) {if(!(this.process.getOutput('GIScene:lineOfSight:lineOfSight'))){scene.removeLayer(layer);}}.bind(this) );
	
	var layerConfig = {
		"layerGroup" : "User-generated"
	};
	var layer = new GIScene.Layer.Helper("Line of Sight", layerConfig);
	var pickSymbol = THREE.ImageUtils.loadTexture( GIScene.LIBRARYPATH + GIScene.RESOURCESPATH.replace(/([^\/])$/, "$1/") +"resources/images/particle_x.png");
	
	var observerPointGeom = new THREE.Geometry();
	observerPointGeom.vertices[0]=new THREE.Vector3(0,0,0);
	var observerPointMaterial = new THREE.PointCloudMaterial({
												color:new THREE.Color(0xffff00),
												sizeAttenuation:false,
												size:32,
												map:pickSymbol,
												alphaTest:0.5	
											});
	var observerPoint   = new THREE.PointCloud(observerPointGeom, observerPointMaterial);
	observerPoint.visible=false;
	
	var targetPointGeom = new THREE.Geometry();
	targetPointGeom.vertices[0]=new THREE.Vector3(0,0,0);
	var targetPointMaterial = new THREE.PointCloudMaterial({
												color:new THREE.Color(0x00ffff),
												sizeAttenuation:false,
												size:32,
												map:pickSymbol,
												alphaTest:0.5	
											});
	var targetPoint   = new THREE.PointCloud(targetPointGeom, targetPointMaterial);
	targetPoint.visible=false;
	
	var obsOffsetLineGeom = new THREE.Geometry();
	obsOffsetLineGeom.vertices = [new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)];
	var obsOffsetLineMaterial = new THREE.LineBasicMaterial({
		color:new THREE.Color(0xffff00)
	});
	var obsOffsetLine = new THREE.Line(obsOffsetLineGeom, obsOffsetLineMaterial);
	
	var targetOffsetLineGeom = new THREE.Geometry();
	targetOffsetLineGeom.vertices = [new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)];
	var targetOffsetLineMaterial = new THREE.LineBasicMaterial({
		color:new THREE.Color(0x00ffff)
	});
	var targetOffsetLine = new THREE.Line(targetOffsetLineGeom, targetOffsetLineMaterial);
	
	var lineOfSightObject = null;
	
	layer.root.add(observerPoint);
	layer.root.add(targetPoint);
	layer.root.add(obsOffsetLine);
	layer.root.add(targetOffsetLine);
	
	layer.config.offset = scene.config.offset;
	scene.addLayer(layer);
	
	
	var updateHelpers = function() {
		//update point objects
		var obsPoint  = this.process.data.inputs["GIScene:lineOfSight:observerPoint"];
		var obsOffset = this.process.data.inputs["GIScene:lineOfSight:observerOffset"] || 0;
		if(obsPoint){
			observerPointGeom.vertices[0] = obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0));
			observerPointGeom.verticesNeedUpdate = true;
			
			obsOffsetLineGeom.vertices = [obsPoint.clone(), obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0))];
			obsOffsetLineGeom.verticesNeedUpdate = true;
		}
		
		var tarPoint  = this.process.data.inputs["GIScene:lineOfSight:targetPoint"];
		var tarOffset = this.process.data.inputs["GIScene:lineOfSight:targetOffset"] || 0;
		if(tarPoint){
			targetPointGeom.vertices[0] = tarPoint.clone().add(new THREE.Vector3(0,tarOffset,0));
			targetPointGeom.verticesNeedUpdate = true;
			
			targetOffsetLineGeom.vertices = [tarPoint.clone(), tarPoint.clone().add(new THREE.Vector3(0,tarOffset,0))];
			targetOffsetLineGeom.verticesNeedUpdate = true;
		}					
		
		
	}.bind(this);
	
	//SETTINGS											
	var settingsItem = new MA3D.AccordionItem(
		{state:'open', title:'Settings'}
	);
	this.accordion.add(settingsItem);	
	
	
	
	
	var settingsDiv = new MA3D.ToolContainer({
		appendTo: settingsItem.content
	});
	
	var form = document.createElement("form");
	form.className = 'ma3d-analysisDialog-form';
	settingsDiv.element.appendChild(form);
	
	for (var i=0; i<this.process.description.inputs.length; i++){
		var identifier 		= this.process.description.inputs[i]['identifier'];
		var fieldLabel 		= this.process.description.inputs[i]['title'];
		var dataType 		= this.process.description.inputs[i]['dataType'];
		var defaultValue 	= this.process.description.inputs[i]['defaultValue'];
		
		switch (dataType){
			case "Number": 
			
				new MA3D.Numberfield({
					label: fieldLabel,
					value: String(defaultValue || 0),
					name: identifier, 
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					appendTo: form,
					listeners : [
						{'keyup': function( event ) {
						
								var value = parseFloat( event.target.value );
									
								if( typeof value === 'number' ){
									
									//set process input
									this.process.setInput(event.target.name, value);
									
									updateHelpers();
									
								} 
								
							}.bind(this) 
						}
						,
						{
							'change': function(event) {
								var value = parseFloat( event.target.value );
									
								if( typeof value !== 'number' ){
									
									this.target.value = defaultValue || "0";
									
									//set process input
									this.process.setInput(event.target.name, defaultValue || 0);
									
									updateHelpers();
									
								} 
							}
						}
					]
				});
				break;
			case "THREE.Vector3":
				new MA3D.Pickfield({
					label: fieldLabel,
					name: identifier, 
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					scene			: scene,
					appendTo: form,
					listeners : [{'change': function(event) {
						var values = event.target.value.split(",");
						
						if(event.target.name == "GIScene:lineOfSight:observerPoint"){
							observerPoint.visible=true;
							var observerPointCoords = new GIScene.Coordinate3(parseFloat(values[0]),parseFloat(values[1]),parseFloat(values[2])).sub(scene.config.offset).toVector3(); 
							
							//set process input
							this.process.setInput(event.target.name, observerPointCoords);
							
							updateHelpers();
						
						}else{
							targetPoint.visible=true;
							var targetPointCoords = new GIScene.Coordinate3(parseFloat(values[0]),parseFloat(values[1]),parseFloat(values[2])).sub(scene.config.offset).toVector3();
							
							//set process input
							this.process.setInput(event.target.name, targetPointCoords);
							
							updateHelpers();
						}
					}.bind(this) }]
				});
				break;
			default:
				new MA3D.Textfield({
					label: fieldLabel,
					value: "All visible Objects in the Scene.",
					placeholder: "All visible Objects in the Scene.",
					name: identifier, 
					disabled : true,
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					appendTo: form
				});
		}
		
	}	
	
	//add Form buttons
	var cancelButton = new MA3D.Button({
			text: 'Cancel',
			behaviour : 'button',
			type : 'button',
			appendTo: form
		});
	
	
	var executeButton= new MA3D.Button({
			text: 'Execute',
			behaviour : 'button',
			type : 'button',
			appendTo: form
	});								
	
	//Cancel Process (remove layers and close dialog)
	var onCancelClick = function(event) {
		scene.removeLayer(layer);
		$(this.dialogDiv).dialog('destroy').remove();
	}.bind(this);
	$(cancelButton.buttonElement).on('click', onCancelClick);
	
	//Display results after process execution

	var resultsItem = null;
	var onExecute = function(event) {
		
		var outputs = event.content.outputs;
		
		//Results	
		
		//Scene
		// clear old results
		if(lineOfSightObject){layer.root.remove(lineOfSightObject);}
		//get the results and store in global
		lineOfSightObject = outputs['GIScene:lineOfSight:lineOfSight'];
		//display the results
		layer.root.add(lineOfSightObject);
		
		//GUI
		if(resultsItem){
			$(resultsItem.div).remove();
		}
			
		resultsItem = new MA3D.AccordionItem(
			{state:'open', title:'Results'}
		);
		this.accordion.add(resultsItem);	
	
		var resultsDiv = new MA3D.ToolContainer({
			appendTo: resultsItem.content
		});
		
		
		var results = "";
		
		for(result in outputs){
			results+="<tr><td>"+this.process.getParamDescriptionById(result).title+"</td><td>"+outputs[result]+"</td></tr>";
		}
		
		resultsDiv.element.innerHTML = "<table class='ma3d-analysisDialog-table'>"
								+results
								+"</table>";
			
											
			
	}.bind(this);
	//register event  
	this.process.addEventListener('execute', onExecute);
	
	var onClickExecute = function(event) {
		//
		this.process.setInput('GIScene:lineOfSight:obstacles', scene.getLayerDescendants(function(e,i,a){return !(e instanceof GIScene.Layer.Helper);}));
		
		//do the processing
		this.process.execute();
		
		// //get the results
		// var outputs = this.process.getOutputs();
		// var isVisible = outputs['GIScene:lineOfSight:isVisible'];
		// var lineOfSightObject = outputs['GIScene:lineOfSight:lineOfSight'];
// 		
		// //display the results
// 		
		// layer.root.add(lineOfSightObject);
		
	}.bind(this);
	
	$(executeButton.buttonElement).on('click', onClickExecute);
	
};

MA3D.AnalysisDialog.LineOfSight.prototype = Object.create(MA3D.AnalysisDialog.prototype);
/**
 * 
 */

MA3D.AnalysisDialog.LineOfSight_simpleClient = function(scene, containerDiv) {
	
	MA3D.AnalysisDialog.apply(this,[new GIScene.Process.LineOfSight_simpleClient(), containerDiv]);
	
	$(this.dialogDiv).on( "dialogbeforeclose", function( event, ui ) {if(!(this.process.getOutput('GIScene:lineOfSight:lineOfSight'))){scene.removeLayer(layer);}}.bind(this) );
	
	var process_start, process_end, process_duration;
	
	var layerConfig = {
		"layerGroup" : "User-generated"
	};
	var layer = new GIScene.Layer.Helper("Line of Sight - Simple Client", layerConfig);
	var pickSymbol = THREE.ImageUtils.loadTexture( GIScene.LIBRARYPATH + GIScene.RESOURCESPATH.replace(/([^\/])$/, "$1/") +"resources/images/particle_x.png");
	
	var observerPointGeom = new THREE.Geometry();
	observerPointGeom.vertices[0]=new THREE.Vector3(0,0,0);
	var observerPointMaterial = new THREE.PointCloudMaterial({
												color:new THREE.Color(0xffff00),
												sizeAttenuation:false,
												size:32,
												map:pickSymbol,
												alphaTest:0.5	
											});
	var observerPoint   = new THREE.PointCloud(observerPointGeom, observerPointMaterial);
	observerPoint.visible=false;
	
	var targetPointGeom = new THREE.Geometry();
	targetPointGeom.vertices[0]=new THREE.Vector3(0,0,0);
	var targetPointMaterial = new THREE.PointCloudMaterial({
												color:new THREE.Color(0x00ffff),
												sizeAttenuation:false,
												size:32,
												map:pickSymbol,
												alphaTest:0.5	
											});
	var targetPoint   = new THREE.PointCloud(targetPointGeom, targetPointMaterial);
	targetPoint.visible=false;
	
	var obsOffsetLineGeom = new THREE.Geometry();
	obsOffsetLineGeom.vertices = [new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)];
	var obsOffsetLineMaterial = new THREE.LineBasicMaterial({
		color:new THREE.Color(0xffff00)
	});
	var obsOffsetLine = new THREE.Line(obsOffsetLineGeom, obsOffsetLineMaterial);
	
	var targetOffsetLineGeom = new THREE.Geometry();
	targetOffsetLineGeom.vertices = [new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)];
	var targetOffsetLineMaterial = new THREE.LineBasicMaterial({
		color:new THREE.Color(0x00ffff)
	});
	var targetOffsetLine = new THREE.Line(targetOffsetLineGeom, targetOffsetLineMaterial);
	
	var lineOfSightObject = null;
	
	layer.root.add(observerPoint);
	layer.root.add(targetPoint);
	layer.root.add(obsOffsetLine);
	layer.root.add(targetOffsetLine);
	
	layer.config.offset = scene.config.offset;
	scene.addLayer(layer);
	
	
	var updateHelpers = function() {
		//update point objects
		var obsPointC3  = this.process.data.inputs["GIScene:lineOfSight:observerPoint"];
		var obsOffset = this.process.data.inputs["GIScene:lineOfSight:observerOffset"] || 0;
		
		
		if(obsPointC3){
			var obsPoint  = obsPointC3.clone().sub(scene.config.offset).toVector3();
			observerPointGeom.vertices[0] = obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0));
			observerPointGeom.verticesNeedUpdate = true;
			
			obsOffsetLineGeom.vertices = [obsPoint.clone(), obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0))];
			obsOffsetLineGeom.verticesNeedUpdate = true;
		}
		
		var tarPointC3  = this.process.data.inputs["GIScene:lineOfSight:targetPoint"];
		var tarOffset = this.process.data.inputs["GIScene:lineOfSight:targetOffset"] || 0;
		
		
		if(tarPointC3){
			var tarPoint  = tarPointC3.clone().sub(scene.config.offset).toVector3();
			targetPointGeom.vertices[0] = tarPoint.clone().add(new THREE.Vector3(0,tarOffset,0));
			targetPointGeom.verticesNeedUpdate = true;
			
			targetOffsetLineGeom.vertices = [tarPoint.clone(), tarPoint.clone().add(new THREE.Vector3(0,tarOffset,0))];
			targetOffsetLineGeom.verticesNeedUpdate = true;
		}					
		
		
	}.bind(this);
	
	//SETTINGS											
	var settingsItem = new MA3D.AccordionItem(
		{state:'open', title:'Settings'}
	);
	this.accordion.add(settingsItem);	
	
	
	
	
	var settingsDiv = new MA3D.ToolContainer({
		appendTo: settingsItem.content
	});
	
	var form = document.createElement("form");
	form.className = 'ma3d-analysisDialog-form';
	settingsDiv.element.appendChild(form);
	
	for (var i=0; i<this.process.description.inputs.length; i++){
		var identifier 		= this.process.description.inputs[i]['identifier'];
		var fieldLabel 		= this.process.description.inputs[i]['title'];
		var dataType 		= this.process.description.inputs[i]['dataType'];
		var defaultValue 	= this.process.description.inputs[i]['defaultValue'];
		
		switch (dataType){
			case "Number": 
			
				new MA3D.Numberfield({
					label: fieldLabel + " [m]",
					value: String(defaultValue || 0),
					name: identifier, 
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					appendTo: form,
					listeners : [
						{'keyup': function( event ) {
						
								var value = parseFloat( event.target.value );
									
								if( typeof value === 'number' ){
									
									//set process input
									this.process.setInput(event.target.name, value);
									
									updateHelpers();
									
								} 
								
							}.bind(this) 
						}
						,
						{
							'change': function(event) {
								var value = parseFloat( event.target.value );
									
								if( typeof value !== 'number' ){
									
									this.target.value = defaultValue || "0";
									
									//set process input
									this.process.setInput(event.target.name, defaultValue || 0);
									
									updateHelpers();
									
								} 
							}
						}
					]
				});
				break;
			case "GIScene.Coordinate3":
				new MA3D.Pickfield({
					label: fieldLabel,
					name: identifier, 
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					scene			: scene,
					appendTo: form,
					listeners : [{'change': function(event) {
						var values = event.target.value.split(",");
						
						if(event.target.name == "GIScene:lineOfSight:observerPoint"){
							observerPoint.visible=true;
							var observerPointCoords = new GIScene.Coordinate3(parseFloat(values[0]),parseFloat(values[1]),parseFloat(values[2]));//.sub(scene.config.offset).toVector3(); 
							
							//set process input
							this.process.setInput(event.target.name, observerPointCoords);
							
							updateHelpers();
						
						}else{
							targetPoint.visible=true;
							var targetPointCoords = new GIScene.Coordinate3(parseFloat(values[0]),parseFloat(values[1]),parseFloat(values[2]));//.sub(scene.config.offset).toVector3();
							
							//set process input
							this.process.setInput(event.target.name, targetPointCoords);
							
							updateHelpers();
						}
					}.bind(this) }]
				});
				break;
			default:
				new MA3D.Textfield({
					label: fieldLabel,
					value: "All LAYERS in the Scene.",
					placeholder: "All LAYERS in the Scene.",
					name: identifier, 
					disabled : true,
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					appendTo: form
				});
		}
		
	}	
	
	//add Form buttons
	var cancelButton = new MA3D.Button({
			text: 'Cancel',
			behaviour : 'button',
			type : 'button',
			appendTo: form
		});
	
	
	var executeButton= new MA3D.Button({
			text: 'Execute',
			behaviour : 'button',
			type : 'button',
			appendTo: form
	});								
	
	//Cancel Process (remove layers and close dialog)
	var onCancelClick = function(event) {
		scene.removeLayer(layer);
		$(this.dialogDiv).dialog('destroy').remove();
	}.bind(this);
	$(cancelButton.buttonElement).on('click', onCancelClick);
	
	//Display results after process execution

	var resultsItem = null;
	var onExecute = function(event) {
		
		process_end = new Date().valueOf();
		process_duration = process_end - process_start;
		console.log('process_duration', process_duration);
		
		var outputs = event.content.outputs;
		
		//Results	
		
		//Scene
		// clear old results
		if(lineOfSightObject){layer.root.remove(lineOfSightObject);}
		//get the results and store in global
		lineOfSightObject = outputs['GIScene:lineOfSight:lineOfSight'];
		//display the results
		layer.root.add(lineOfSightObject);
		
		//GUI
		if(resultsItem){
			$(resultsItem.div).remove();
		}
			
		resultsItem = new MA3D.AccordionItem(
			{state:'open', title:'Results ('+process_duration+'ms)'}
		);
		this.accordion.add(resultsItem);	
	
		var resultsDiv = new MA3D.ToolContainer({
			appendTo: resultsItem.content
		});
		
		
		var results = "";
		
		for(result in outputs){
			results+="<tr><td>"+this.process.getParamDescriptionById(result).title+"</td><td>"+outputs[result]+"</td></tr>";
		}
		
		resultsDiv.element.innerHTML = "<table class='ma3d-analysisDialog-table'>"
								+results
								+"</table>";
			
											
		$(executeButton.buttonElement).button('enable');	
	}.bind(this);
	//register event  
	this.process.addEventListener('execute', onExecute);
	
	var onClickExecute = function(event) {
		
		process_start = new Date().valueOf();
		
		$(executeButton.buttonElement).button('disable');
		//TODO Layers should be selectable in the dialog form
		this.process.setInput('GIScene:lineOfSight:obstacleLayers', scene.layers.filter(function(e,i,a){return !(e instanceof GIScene.Layer.Helper);}) );
		
		//do the processing
		this.process.execute();
		
		// //get the results
		// var outputs = this.process.getOutputs();
		// var isVisible = outputs['GIScene:lineOfSight:isVisible'];
		// var lineOfSightObject = outputs['GIScene:lineOfSight:lineOfSight'];
// 		
		// //display the results
// 		
		// layer.root.add(lineOfSightObject);
		
	}.bind(this);
	
	$(executeButton.buttonElement).on('click', onClickExecute);
	
};

MA3D.AnalysisDialog.LineOfSight_simpleClient.prototype = Object.create(MA3D.AnalysisDialog.prototype);
/**
 * 
 */

MA3D.AnalysisDialog.LineOfSightNetwork_allToAll = function(scene, containerDiv) {
	
	MA3D.AnalysisDialog.apply(this,[new GIScene.Process.LineOfSightNetwork_allToAll(), containerDiv]);
	
	$(this.dialogDiv).on( "dialogbeforeclose", function( event, ui ) {if(!(this.process.getOutput('GIScene:lineOfSight:network:intervisibilityNetwork'))){scene.removeLayer(layer);}}.bind(this) );
	
	var process_start, process_end, process_duration;
	var intervisibilityNetwork = null;
	
	var layerConfig = {
		"layerGroup" : "User-generated"
	};
	var layer = new GIScene.Layer.Helper("Line of Sight Network", layerConfig);
	// var pickSymbol = THREE.ImageUtils.loadTexture( GIScene.LIBRARYPATH + GIScene.RESOURCESPATH.replace(/([^\/])$/, "$1/") +"resources/images/particle_x.png");
// 	
	// var observerPointGeom = new THREE.Geometry();
	// observerPointGeom.vertices[0]=new THREE.Vector3(0,0,0);
	// var observerPointMaterial = new THREE.PointCloudMaterial({
												// color:new THREE.Color(0xffff00),
												// sizeAttenuation:false,
												// size:32,
												// map:pickSymbol,
												// alphaTest:0.5	
											// });
	// var observerPoint   = new THREE.PointCloud(observerPointGeom, observerPointMaterial);
	// observerPoint.visible=false;
// 	
	// var targetPointGeom = new THREE.Geometry();
	// targetPointGeom.vertices[0]=new THREE.Vector3(0,0,0);
	// var targetPointMaterial = new THREE.PointCloudMaterial({
												// color:new THREE.Color(0x00ffff),
												// sizeAttenuation:false,
												// size:32,
												// map:pickSymbol,
												// alphaTest:0.5	
											// });
	// var targetPoint   = new THREE.PointCloud(targetPointGeom, targetPointMaterial);
	// targetPoint.visible=false;
// 	
	// var obsOffsetLineGeom = new THREE.Geometry();
	// obsOffsetLineGeom.vertices = [new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)];
	// var obsOffsetLineMaterial = new THREE.LineBasicMaterial({
		// color:new THREE.Color(0xffff00)
	// });
	// var obsOffsetLine = new THREE.Line(obsOffsetLineGeom, obsOffsetLineMaterial);
// 	
	// var targetOffsetLineGeom = new THREE.Geometry();
	// targetOffsetLineGeom.vertices = [new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)];
	// var targetOffsetLineMaterial = new THREE.LineBasicMaterial({
		// color:new THREE.Color(0x00ffff)
	// });
	// var targetOffsetLine = new THREE.Line(targetOffsetLineGeom, targetOffsetLineMaterial);
// 	
	// var lineOfSightObject = null;
// 	
	// layer.root.add(observerPoint);
	// layer.root.add(targetPoint);
	// layer.root.add(obsOffsetLine);
	// layer.root.add(targetOffsetLine);
	
	// layer.config.offset = scene.config.offset;
	scene.addLayer(layer);
	
	
	// var updateHelpers = function() {
		// //update point objects
		// var obsPoint  = this.process.data.inputs["GIScene:lineOfSight:observerPoint"];
		// var obsOffset = this.process.data.inputs["GIScene:lineOfSight:observerOffset"] || 0;
		// if(obsPoint){
			// observerPointGeom.vertices[0] = obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0));
			// observerPointGeom.verticesNeedUpdate = true;
// 			
			// obsOffsetLineGeom.vertices = [obsPoint.clone(), obsPoint.clone().add(new THREE.Vector3(0,obsOffset,0))];
			// obsOffsetLineGeom.verticesNeedUpdate = true;
		// }
// 		
		// var tarPoint  = this.process.data.inputs["GIScene:lineOfSight:targetPoint"];
		// var tarOffset = this.process.data.inputs["GIScene:lineOfSight:targetOffset"] || 0;
		// if(tarPoint){
			// targetPointGeom.vertices[0] = tarPoint.clone().add(new THREE.Vector3(0,tarOffset,0));
			// targetPointGeom.verticesNeedUpdate = true;
// 			
			// targetOffsetLineGeom.vertices = [tarPoint.clone(), tarPoint.clone().add(new THREE.Vector3(0,tarOffset,0))];
			// targetOffsetLineGeom.verticesNeedUpdate = true;
		// }					
// 		
// 		
	// }.bind(this);
	
	//SETTINGS											
	var settingsItem = new MA3D.AccordionItem(
		{state:'open', title:'Settings'}
	);
	this.accordion.add(settingsItem);	
	
	
	
	
	var settingsDiv = new MA3D.ToolContainer({
		appendTo: settingsItem.content
	});
	
	var form = document.createElement("form");
	form.className = 'ma3d-analysisDialog-form';
	settingsDiv.element.appendChild(form);
	
	for (var i=0; i<this.process.description.inputs.length; i++){
		var identifier 		= this.process.description.inputs[i]['identifier'];
		var fieldLabel 		= this.process.description.inputs[i]['title'];
		var dataType 		= this.process.description.inputs[i]['dataType'];
		var defaultValue 	= this.process.description.inputs[i]['defaultValue'];
		
		switch (dataType){
			case "Number": 
			
				new MA3D.Numberfield({
					label: fieldLabel,
					value: String(defaultValue || 0),
					name: identifier, 
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					appendTo: form,
					listeners : [
						{'keyup': function( event ) {
						
								var value = parseFloat( event.target.value );
									
								if( typeof value === 'number' ){
									
									//set process input
									this.process.setInput(event.target.name, value);
									
									updateHelpers();
									
								} 
								
							}.bind(this) 
						}
						,
						{
							'change': function(event) {
								var value = parseFloat( event.target.value );
									
								if( typeof value !== 'number' ){
									
									this.target.value = defaultValue || "0";
									
									//set process input
									this.process.setInput(event.target.name, defaultValue || 0);
									
									updateHelpers();
									
								} 
							}
						}
					]
				});
				break;
			case "THREE.Vector3":
				new MA3D.Pickfield({
					label: fieldLabel,
					name: identifier, 
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					scene			: scene,
					appendTo: form,
					listeners : [{'change': function(event) {
						var values = event.target.value.split(",");
						
						if(event.target.name == "GIScene:lineOfSight:observerPoint"){
							observerPoint.visible=true;
							var observerPointCoords = new GIScene.Coordinate3(parseFloat(values[0]),parseFloat(values[1]),parseFloat(values[2])).sub(scene.config.offset).toVector3(); 
							
							//set process input
							this.process.setInput(event.target.name, observerPointCoords);
							
							updateHelpers();
						
						}else{
							targetPoint.visible=true;
							var targetPointCoords = new GIScene.Coordinate3(parseFloat(values[0]),parseFloat(values[1]),parseFloat(values[2])).sub(scene.config.offset).toVector3();
							
							//set process input
							this.process.setInput(event.target.name, targetPointCoords);
							
							updateHelpers();
						}
					}.bind(this) }]
				});
				break;
			case "GIScene.Layer" :
				new MA3D.LayerSelectfield({
					label	: fieldLabel,
					name 	: identifier,
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					scene	: scene,
					appendTo: form,
					listeners: [{'change': function (event) {
					  							var value = event.target.value;
					  							var identifier = event.target.name;
					  							
					  							var layer = scene.getLayerById(value);
					  							
					  							if(value == ""){
					  								delete this.process.data.inputs[identifier];
					  							}
					  							else{
					  								this.process.setInput(identifier, layer);
					  							}
					  							
					  							var attributeNames = layer.getAttributeNames();
					  							
					  							this['GIScene:lineOfSight:network:observerOffsetAttribute'].element.innerHTML="";
					  							this['GIScene:lineOfSight:network:targetOffsetAttribute'].element.innerHTML="";
					  							
					  							for(var i=0,j=attributeNames.length; i<j; i++){
													this['GIScene:lineOfSight:network:observerOffsetAttribute'].addOption(attributeNames[i]);
													this['GIScene:lineOfSight:network:observerOffsetAttribute'].element.disabled = false;
													this['GIScene:lineOfSight:network:targetOffsetAttribute'].addOption(attributeNames[i]);
													this['GIScene:lineOfSight:network:targetOffsetAttribute'].element.disabled = false;
												  };
					}.bind(this)
					}]
				});
				break;
			case "String":
				this[identifier] = new MA3D.Selectfield({
					label	: fieldLabel,
					name 	: identifier,
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					disabled : true,
					appendTo: form,
					listeners: [{'change': function(event) {
					  							var value = event.target.value;
					  							var identifier = event.target.name;
					  							
					  							if(value == ""){
					  								delete this.process.data.inputs[identifier];
					  							}
					  							else{
					  								this.process.setInput(identifier, value);
					  							}
					}.bind(this)
					
					}]
				});
				break;
			default:
				new MA3D.Textfield({
					label: fieldLabel,
					value: "All LAYERS in the Scene.",
					placeholder: "All LAYERS in the Scene.",
					name: identifier, 
					disabled : true,
					cssClass		: "ma3d-analysisDialog-textfield",
					cssClassLabel	: "ma3d-analysisDialog-label",
					cssClassContainer:"ma3d-analysisDialog-textfieldContainer",
					appendTo: form
				});
		}
		
	}	
	//add progress bar
	$(form).append('<div id="'+'ma3d-'+ (MA3D.idCounter++) +'-'+this.process.identifier+'-progressbar'+'" class="ma3d-progressbar"></div>');
	var progressbar = $(form).find(".ma3d-progressbar");
	progressbar.progressbar();
	
	var progressLabel;
	progressbar.progressbar({
		value:0,
		change: function(event) {
			progressLabel.text( progressbar.progressbar( "value" ) + "%" );
		}.bind(this),
		complete: function() {
			progressLabel.text( "Done!" );
		}.bind(this)
	});
	
	progressbar.append('<div class="ma3d-progressbar-label">0%</div>');
	progressLabel = $(form).find(".ma3d-progressbar-label");
	
	this.process.addEventListener('progress', function (event) {
		var total = event.content.total;
		var finished = event.content.finished;
		var progress = Math.round((finished / total)*100);
		progressbar.progressbar('value', progress);
	});
	
	
	//add Form buttons
	var cancelButton = new MA3D.Button({
			text: 'Cancel',
			behaviour : 'button',
			type : 'button',
			appendTo: form
		});
	
	
	var executeButton= new MA3D.Button({
			text: 'Execute',
			behaviour : 'button',
			type : 'button',
			appendTo: form
	});								
	
	//Cancel Process (remove layers and close dialog)
	var onCancelClick = function(event) {
		scene.removeLayer(layer);
		$(this.dialogDiv).dialog('destroy').remove();
	}.bind(this);
	$(cancelButton.buttonElement).on('click', onCancelClick);
	
	//Display results after process execution

	var resultsItem = null;
	var onExecute = function(event) {
		
		process_end = new Date().valueOf();
		process_duration = process_end - process_start;
		console.log('process_duration', process_duration);
		
		var outputs = event.content.outputs;
		
		//Results	
		
		//Scene
		// clear old results
		if(intervisibilityNetwork){layer.root.remove(intervisibilityNetwork);}
		//get the results and store in global
		intervisibilityNetwork = outputs['GIScene:lineOfSight:network:intervisibilityNetwork'];
		//display the results
		layer.root.add(intervisibilityNetwork);
		
		//GUI
		if(resultsItem){
			$(resultsItem.div).remove();
		}
			
		resultsItem = new MA3D.AccordionItem(
			{state:'open', title:'Results ('+process_duration+'ms)'}
		);
		this.accordion.add(resultsItem);	
	
		var resultsDiv = new MA3D.ToolContainer({
			appendTo: resultsItem.content
		});
		
		
		var results = "";
		
		for(result in outputs){
			if(this.process.getParamDescriptionById(result).dataType == "GeoJSON"){
				var geoJSON = outputs[result];
				
				results+="<tr><td>"+this.process.getParamDescriptionById(result).title+"</td><td><a href='data:application/json;charset=utf-8,"+geoJSON+"' download='IntervisibilityLines.geojson'>Save as GeoJSON</a></td></tr>";
			}
			else{
				results+="<tr><td>"+this.process.getParamDescriptionById(result).title+"</td><td>"+outputs[result]+"</td></tr>";
			}
			
		}
		
		resultsDiv.element.innerHTML = "<table class='ma3d-analysisDialog-table'>"
								+results
								+"</table>";
			
											
		$(executeButton.buttonElement).button('enable');	
	}.bind(this);
	//register event  
	this.process.addEventListener('execute', onExecute);
	
	var onClickExecute = function(event) {
		
		process_start = new Date().valueOf();
		
		$(executeButton.buttonElement).button('disable');
		//TODO Layers should be selectable in the dialog form
		this.process.setInput('GIScene:lineOfSight:obstacleLayers', scene.layers.filter(function(e,i,a){return !(e instanceof GIScene.Layer.Helper);}) );
		
		//do the processing
		this.process.execute();
		
		// //get the results
		// var outputs = this.process.getOutputs();
		// var isVisible = outputs['GIScene:lineOfSight:isVisible'];
		// var lineOfSightObject = outputs['GIScene:lineOfSight:lineOfSight'];
// 		
		// //display the results
// 		
		// layer.root.add(lineOfSightObject);
		
	}.bind(this);
	
	$(executeButton.buttonElement).on('click', onClickExecute);
	
};

MA3D.AnalysisDialog.LineOfSightNetwork_allToAll.prototype = Object.create(MA3D.AnalysisDialog.prototype);
MA3D.AttributeService = function(config) {
	
	if(config){
		this.url = config.url || null;
	}
	 
	
	var request = function(config) {
		if(this.url){
			var requestType = config.requestType; //short, more, all
		
			var url = this.url.trim().replace(/\/*$/,"/") /*+ requestType + "/"*/ + config.id; //@TODO currently no different request types are supported by the service
			console.log("Before AttributeService:XHRRequest");
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('GET',url,true);
				xhr.onload = config.onSuccess;
				xhr.onerror = config.onError;
				xhr.send(null);
			}
			catch(e){
				console.log("AttributeService XHR failed.");
				console.log(e);
			}
			
			
		}
		else{
			console.log("No url specified for attribute service.");
		}
		
	}.bind(this);
	
	this.requestShortAttributes = function(id, onSuccess, onError) {
		var config = {
			requestType:'short',
			id:id,
			onSuccess:onSuccess,
			onError:onError
		};
		
		request(config);
	};
	
	this.requestMoreAttributes = function(id, onSuccess, onError) {
		var config = {
			requestType:'more',
			id:id,
			onSuccess:onSuccess,
			onError:onError
		};
		
		request(config);
	};
	
	this.requestAllAttributes = function(id, onSuccess, onError) {
		var config = {
			requestType:'all',
			id:id,
			onSuccess:onSuccess,
			onError:onError
		};
		console.log("requestAllAttributes", config);
		request(config);
	};
	
};
MA3D.NavigationControl = function(camera, domElement, scene, config) {
		
	// GIScene.Control.call( this );
	var defaults = {
						modes 		: ["OrbitZoomPan", "Trackball"],
						activeMode  : "OrbitZoomPan"
				};
	
	this.config = $().extend({},defaults, config);
	
	var modes= this.config.modes ;//["OrbitZoomPan", "Trackball"];
	var activeMode = this.config.activeMode; //"OrbitZoomPan";
	var isActive = false;
	this.controls = [];
	
	
	this.addControls = function() {
		for (var i=0,l=modes.length;i<l;i++){
			this.controls[i] = new GIScene.Control[modes[i]](camera, domElement);
			scene.addControl(this.controls[i]);
		}
	};

	this.setMode = function(mode) {
		if(isActive){
			this.deactivate();
			activeMode = mode;
			this.activate();
		}
		else {
			activeMode = mode;
		}		
	};
	
	this.getMode = function(){
		return activeMode;
	};
	
	this.activate = function() {
		isActive = true;
		var modeIndex = modes.indexOf(activeMode);
		this.controls[modeIndex].activate();
	};
	this.deactivate = function() {
		isActive = false;
		var modeIndex = modes.indexOf(activeMode);
		this.controls[modeIndex].deactivate();
	};
	
	//init
	this.addControls();
	this.setMode(activeMode);
};
/**
 * sceneViewer will define all functions for the MayaArch3D 3D scene.
 * 
 */

MA3D.SceneViewer = function(containerDiv) {
	
	this.containerDiv = containerDiv;
	this.id = MA3D.instanceCounter++;
	this.scene = null;
	
	/**
	 * removes the viewer and its data properly from memory and DOM
	 * @method unload 
	 */
	this.unload = function() {
		
			this.scene.onUnload(); //better dispatch
			this.containerDiv.innerHTML="";
		
		};
	
	
	var initLayout = function() {
		$(this.containerDiv).addClass('ma3d-sv-container');
		
		//split containerDiv into toolbar and canvascontainer
		var toolbarDiv = document.createElement('div');
		toolbarDiv.setAttribute('class', 'ma3d-toolbar');
		toolbarDiv.setAttribute('id', 'ma3d-toolbar-'+this.id);
		var canvascontainerDiv = document.createElement('div');
		canvascontainerDiv.setAttribute('class', 'ma3d-canvascontainer');
		canvascontainerDiv.setAttribute('id', 'ma3d-canvascontainer-'+this.id);
		this.containerDiv.appendChild(toolbarDiv);
		this.containerDiv.appendChild(canvascontainerDiv);
	}.bind(this);
	
	var initScene = function() {
		
		var scene_config = {
			
			
			projection: "EPSG:32616", //( UTM16N / WGS84 )
			units: "m",
			offset:new GIScene.Coordinate3(264495.0,1639108.0,600),
			
			//camera params
			near:1,
			far:15000,
			center : new THREE.Vector3(5000, 0, -2300),
			positionFromCenter : new THREE.Vector3(0, 500, 500),
			
			
			skyColor : new THREE.Color().setStyle('skyblue'),
			fog : new THREE.Fog('lightblue', 1,7500)
		};
		this.scene = new GIScene.Scene('ma3d-canvascontainer-'+this.id, scene_config);
		
		//initial light configuration
		this.scene.directionalLight.position.set(-0.3,1,0.4);
		
		//fog experimental
		// var fog = new THREE.Fog('lightblue', 1,7500);
		// this.scene.root.fog = fog;
		
		/*layer config
			
			DEM
				Auto
				LOD1
				Styles
					Intensity
					DEM.....
			Structures
				Auto
				LOD1
				LOD2
				LOD3
			Sky
				Styles
					Color
					Texture
			User-generated
			
		*/
		
		//xhr override hack (for development only)
			// var xhr_open = XMLHttpRequest.prototype.open;
			// XMLHttpRequest.prototype.open = function() {
				// this.withCredentials = true;
				// return xhr_open.apply(this, [].slice.call(arguments));
			// };
		
		var layer_demLOD_config = {
			 url:"http://www.mayaarch3d.org/w3ds",  
			 withCredentials:false,
			 layer:"DTMCopan", //"DEM",
			 crs:"EPSG:32616", //"EPSG:900913",//
			 offset:new GIScene.Coordinate3(264495.0,1639108.0,600), //??? w3ds param from this
			 format:GIScene.Format.Scene,
			 
			 //grid params
			 origin:new GIScene.Coordinate2(264495.0,1639108.0),		 
			 tileSizes:[1024,512,256,128], //[1.0018754171394622E7]
			 terrainHeight:600,
			 maxExtent: new GIScene.Extent2(new GIScene.Coordinate2(264495.0, 1639108.0), new GIScene.Coordinate2(274495.0, 1649108.0)),
			 maxDistance: 10000,
			 lodDistanceFactor :1.5,
			 overrideMaterial:  new THREE.MeshLambertMaterial({color:0x36421E, ambient: 0x36421E, shading: THREE.SmoothShading}),
			 
			 styles : [
			 			// {
			 				// name: 'osm-wms',
			 				// title:'OpenStreetMap (osm-wms.de)',
			 				// material:new GIScene.WMSOverlayMaterial(
				 				// {
				 					// wmsServiceUrl:"http://129.206.228.72/ows-3/wms?",
									// crossOrigin:"anonymous",
									// offset2:	new GIScene.Coordinate2(264495.0,1639108.0) // scene offset
				 				// },
				 				// {
				 					// layers: "osm_auto:all",
									// srs: "EPSG:32616",
									// format: "image/jpeg",
									// // bbox: bbox,
									// width : "256", //"128", 
									// height: "256" //"128", 
				 				// }
				 				// )
				 		// },
				 		{
			 				name: 'copan_colorshade_ground_extended',
			 				title:'Colorshade (Ground only)',
			 				material:new GIScene.WMSOverlayMaterial(
				 				{
				 					wmsServiceUrl:"http://www.mayaarch3d.org/geoserver/maya/wms?",
									crossOrigin:"use-credentials",
									offset2:	new GIScene.Coordinate2(264495.0,1639108.0) // scene offset
				 				},
				 				{
				 					layers: "copan_colorshade_ground_extended",
									srs: "EPSG:32616",
									format: "image/jpeg",
									// bbox: bbox,
									width : "256", //"128", 
									height: "256" //"128", 
				 				}
				 				)
				 		},
			 			{
			 				name: 'copan_colorshade_ground_structures',
			 				title:'Colorshade (Ground+Structures)',
			 				material:new GIScene.WMSOverlayMaterial(
				 				{
				 					wmsServiceUrl:"http://www.mayaarch3d.org/geoserver/maya/wms?",
									crossOrigin:"use-credentials",
									offset2:	new GIScene.Coordinate2(264495.0,1639108.0) // scene offset
				 				},
				 				{
				 					layers: "copan_colorshade_ground_structures",
									srs: "EPSG:32616",
									format: "image/jpeg",
									// bbox: bbox,
									width : "256", //"128", 
									height: "256" //"128", 
				 				}
				 				)
				 		},
				 		{
			 				name: 'int_Copan',
			 				title:'LiDAR intensity',
			 				material:new GIScene.WMSOverlayMaterial(
				 				{
				 					wmsServiceUrl:"http://www.mayaarch3d.org/geoserver/maya/wms?",
									crossOrigin:"use-credentials",
									offset2:	new GIScene.Coordinate2(264495.0,1639108.0) // scene offset
				 				},
				 				{
				 					layers: "int_Copan",
									srs: "EPSG:32616",
									format: "image/jpeg",
									// bbox: bbox,
									width : "256", //"128", 
									height: "256" //"128", 
				 				}
				 				)
				 		}
			 		],
			 layerGroup:'Terrain'
			 
		};
		
		var layer_demLOD = new GIScene.Layer.W3DS_0_4_0("DEM LOD1 - LOD4",layer_demLOD_config);
		this.scene.addLayer(layer_demLOD);
		
		
		
		// var layer_structuresLOD2_config = {
			// url:"http://www.mayaarch3d.org/protected/models/heather/structuresLOD2_old.json",
			// format: GIScene.Format.JSON,
			// offset:new GIScene.Coordinate3(269596.77, 1641697.72,-3.0),
// 			
			// layerGroup:'Structures'
		// };
// 		
		// var layer_structuresLOD2 = new GIScene.Layer.Fixed("Structures LOD2", layer_structuresLOD2_config);
		// this.scene.addLayer(layer_structuresLOD2);
		
		var layer_buildingsLOD1_config = {
			id: "structures_lod1",
			verticalAxis:"Z",
			 url:"http://www.mayaarch3d.org/w3ds", 
			 //tileSizes:[1024,512], 
			 withCredentials:true,
			 layer:"Segmented",//"DTMCopan", 
			 crs:"EPSG:32616", //"EPSG:900913",// "EPSG:26916",//
			 lods : "1",
			 origin:new GIScene.Coordinate2(264495.0,1639108.0),
			 offset:new GIScene.Coordinate3(264500.0,1638500.0,0), //copan db offset
			 tileSizes:[1024],//[1024,512,256,128], //[1.0018754171394622E7]
			 terrainHeight:600,
			 maxExtent: new GIScene.Extent2(new GIScene.Coordinate2(264495.0, 1639108.0), new GIScene.Coordinate2(274495.0, 1649108.0)),
			 maxDistance: 10000,
			 lodDistanceFactor :1.5,
			 format:GIScene.Format.Scene,
			 overrideMaterial:  new THREE.MeshLambertMaterial({color:0xd2b48c, ambient: 0x8b7355, shading: THREE.SmoothShading}),
			 attributeReader:
					{
						'geom_id' : function(object){return ( parseInt(object.name.split('_')[1] ) || null);},
						'attr_id' : function(object){return ( parseInt(object.name.split('_')[2] ) || null);},
						'nodetype': function(object){return (   String(object.name.split('_')[0] ) || null);},
					
					},
			 virtualSelectionAccessor : function(obj) { return obj.userData.gisceneAttributes.attr_id || null; },
			 
			 layerGroup:"Structures"
		};
		
		this.layer_buildingsLOD1 = new GIScene.Layer.W3DS_0_4_1("Structures LOD1",layer_buildingsLOD1_config);
		this.scene.addLayer(this.layer_buildingsLOD1);
		
		var layer7_config = {
			url:"http://www.mayaarch3d.org/protected/models/stelas_ruler12/stela_titoror_LOD1_addOffset.json",
			format: GIScene.Format.JSON,
			offset:new GIScene.Coordinate3(264495.0,1639108.0,600),
			layerGroup:'Structures'
		};
		// var layer7 = new GIScene.Layer.Fixed("Stela Titoror", layer7_config);
		// this.scene.addLayer(layer7);
		
		var layer8_config = {
			url:"http://www.mayaarch3d.org/protected/models/stelas_ruler12/stela_13_LOD1_addOffset.json",
			format: GIScene.Format.JSON,
			offset:new GIScene.Coordinate3(264495.0,1639108.0,600),
			layerGroup:'Structures'
		};
		// var layer8 = new GIScene.Layer.Fixed("Stela 13", layer8_config);
		// this.scene.addLayer(layer8);
		
		//controls
		//loadIndicaor
		var loadIndicator = new GIScene.Control.LoadIndicator();
		this.scene.addControl(loadIndicator);
		loadIndicator.activate();
		//cameraCoords
		var camCoordsControl = new GIScene.Control.ObjectPosition(this.scene.camera);
		this.scene.addControl(camCoordsControl);
		camCoordsControl.activate();
		//compass
		var compassControl = new GIScene.Control.Compass(this.scene.camera);
		this.scene.addControl(compassControl);
		compassControl.activate();
		//navigation
		var navigationControl_config = {
			modes:["PanOrbitZoomCenter", "Walk"],
			activeMode:"PanOrbitZoomCenter"
		};
		this.navigationControl = new MA3D.NavigationControl(this.scene.camera,this.scene.containerDiv, this.scene, navigationControl_config);
		this.navigationControl.activate();
		
		//camera light - interactive illumination
		this.cameraLightControl = new GIScene.Control.CameraLight(this.scene.camera, this.scene.directionalLight);
		this.scene.addControl(this.cameraLightControl);
		this.cameraLightControl.addEventListener("panstart", function() {
			this.navigationControl.deactivate();
		}.bind(this));
		this.cameraLightControl.addEventListener("panend", function() {
			this.navigationControl.activate();
		}.bind(this));
		
		//select
		this.selectControl = new GIScene.Control.Select([], this.scene.camera, {hover:false,highlightOnly:true,toggle:true});
		this.scene.addControl(this.selectControl);
		
		//pick
		//pick coordinate
		this.pickControl = new GIScene.Control.Pick(this.scene.camera);
		this.scene.addControl(this.pickControl);
		
		//measure distance
		this.measureControl = new GIScene.Control.Measure(this.scene.camera, {color: new THREE.Color(0xff7700)});
		this.scene.addControl(this.measureControl);
	}.bind(this);
	
var initGUI = function() {
	
	var toolbarDiv = document.getElementById('ma3d-toolbar-'+this.id);		
	
	//ACCORDION on the right side
	var accordion = new MA3D.Accordion();
	toolbarDiv.appendChild(accordion.div);
	
	//NAVIGATION
	
	var navigationControlGUI = new MA3D.AccordionItem( {title:"Navigation",	state:'closed'} );
	accordion.add(navigationControlGUI);
	
	var navigationControlGUIContent = navigationControlGUI.content;
	
	var navigationControlExamine = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Examine", 
		name:"ma3d-navigation" + MA3D.instanceCounter ,
		checked:true, 
		appendTo: navigationControlGUIContent
		});
	
	var navigationControlWalk = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Walk", 
		name:"ma3d-navigation" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: navigationControlGUIContent
		});
	
	$(navigationControlGUIContent).buttonset();
	
	$(navigationControlExamine.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.navigationControl.setMode("PanOrbitZoomCenter");
			this.scene.camera.cameraP.near = this.scene.camera.cameraO.near = this.scene.config.near || 1.0;//1.0;
			this.scene.camera.updateProjectionMatrix();
		}
	}.bind(this));
	
	$(navigationControlWalk.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.navigationControl.setMode("Walk");
			this.scene.containerDiv.focus();
			this.scene.camera.cameraP.near = this.scene.camera.cameraO.near = 0.1;
			this.scene.camera.updateProjectionMatrix();
		}
	}.bind(this));
	
	var onNavigationControlHelp = function(event) {
		if($('#'+'ma3d-navigation-help-' + MA3D.instanceCounter).length == 0){
			var dialog = document.createElement('div');
			dialog.title = "Navigation Help";
			dialog.id = 'ma3d-navigation-help-' + MA3D.instanceCounter; 
			
			var helpImg = document.createElement('img');
			helpImg.onload = function() {
				$(dialog).dialog({
					width:    Math.min( parseInt(helpImg.width)+30, this.containerDiv.offsetWidth-40),
					maxHeight: this.containerDiv.offsetHeight-40,
					// position: {my: "center", at: "center", of: this.containerDiv},
					close:    function(event, ui) {$(dialog).dialog('destroy').remove();}.bind(this),
					// appendTo: this.containerDiv
					});
				$(dialog).dialog('widget').get(0).style.cssText += "z-index:2000000;top:5px;";
			}.bind(this);
			dialog.appendChild(helpImg);
			//navigationHelp.png
			helpImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzUAAAI8CAYAAADIlIWQAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N13XFNX/zjwz80OIZBA2HsFAoiioIIgKLgHreLGCWpFravW8Wgd7VO3dWvrrGLFVhx1gxNRK4LKNOy9DQmQQeb9/eFz+SJDrdZa+zvv1ysv5a5z7si593PPCIbj+DNAEARBEARBEAT5RJE+dgYQBEEQBEEQBEHeBwpqEARBEARBEAT5pKGgBkEQBEEQBEGQTxoKahAEQRAEQRAE+aShoAZBEARBEARBkE9ah0HN3r17jQQCAX/VqlWmf3eGPqb6+npyXl4e7UNsu2/fvo4CgYC/Y8cOo9ctN3bsWBuBQMDPysqif4h8tKZUKjGBQMAPDg52/NBptZWcnMz4u9NEEARBEARB/p06DGpqa2vJQqGQWVFRQf27M/SxnDt3js3n892SkpL0PsT28/LyGEKhkLly5UqrnJycTgOnoqIiulAoZMrlcuxD5KM1nU4HQqGQmZeX98EDKIJMJiOFhIQ4zJ492+bvShNBEARBEAT5d0PNz/4nPj5eXyQSUT50OgqFgjR16lQbHMc/dFJvRKfT8YMHD5Zs27at4u9Ks76+nnTr1i2Dvys9BEEQBEEQ5N8PBTV/Mx6Pp3n06JH+pk2beB87LyQSCaKioiTjx49v/Nh5QRAEQRAEQZB39ZcGNefPn2dPmjTJ2tvb2zkwMNAxOjraori4uMMmbAqFAlu/fr3JqFGjbLt16+bSs2dP5wkTJtjExsa2e4s/Z84cixUrVphWVVVRxowZY+Pv7++0fv16E5VKhX333Xe8GTNmWAEAnDhxwnDcuHE2Xl5eLiNHjrQ7fPgw523y/cUXX1jeuXOHDQBw+PBho4iICOvWfVpUKhW2ceNG3tChQ+09PDz4Q4YMsV+9erWpTCb708fvhx9+KMcwDNavX2/xumZobeE4Drt27TIaP368ja+vr7O3t7dzeHi4zZ49e4xa1/p8++23JhEREdadbXvDhg28iIgI66KiIqparcYiIiKsv/zyS4u2y92+fVtv9OjRtl26dHEZMGCA/caNG3k6nQ6++OILy5UrV7bra3X9+nXWjBkzrIKCghw9PDz4Q4cOtf/666/NxGIxmVjm7Nmz7AULFlgCAJSVldEiIiKst27datx6OykpKYzIyEgrPz8/J19fX+fp06db3b9/n9k2PZlMRoqIiLCOiIiwfpfzgCAIgiAIgvx7YDiOP2s7cc2aNSbr16+3nDZt2oujR4++VdOk6dOnWx07dozHZDJ1Hh4eisbGRnJ+fj5DX19fe+TIkZLRo0c3EctmZ2fTwsLCHPLz8xl0Oh13dXVVFBQUMIiH0+jo6Nq9e/dWEcvzeDwPHo+n4fF46vv377MBAOzs7JTFxcXCPn36OD558oQ1a9asul27dpkxmUydoaGhtrq6mgoAMG/evNrdu3dXtc1vax4eHvzS0lKaVColc7lcDZPJ1J06daqkb9++8srKSkpgYKBzYWEhncPhaBwdHZWlpaX0Fy9eUOzt7ZVnzpwp7tGjR/Objo+FhYV7dXU1VSwWZ3z55ZeWJ06cMO7Vq5f04cOHBRj2f91nfH19nVNSUljJyck5vr6+zQAAdXV15OHDh9snJyfrk8lk3M3NrbmyspIqFospAAADBw5suH79ejEAwHfffcdbvXq11aJFi2q2b99e3ToPTU1NJDMzMw8Oh6MpLy9/rlQqMT09PS9LS0tVRUXFc2K57du3Gy9dutQaAMDFxaVZo9FAYWEhIygoqDElJYVlZ2enyszMzCWWj46Otjhw4IApjuNga2urpFAoUFhYSAcAMDU1Vaenp+eamZlpNm/ebLx9+3azmpoaKo1Gw3k8njo4OLjp5MmT5QAAmzdvNl69erWVTqcDgUCgIJPJkJWVxcRxHNauXVv5n//85wWRpkgkIvN4PM///T/TyMhI+6ZzgCAIgiAIgvw7/SVvuA8ePMg5duwYr1u3bvKcnJznjx8/zs/Jycm5fPlyPgDArFmzbOvr61ve2K9evdo8Pz+fMWfOnNqGhoaMtLS0vPr6+swjR46UAAAcOnTIRCQSkVunkZOTw8jJyWGeOnWq6O7du3l79+4tJ+Y1NzeTjhw5wjtw4EBpTU1NVlVVVfapU6eKSCQSfvDgQV7bbbWVlZWVGxERIQIA2LZtW0VFRcXzvn37ygEApkyZYlNYWEifPn36i5qamuzU1NT82trarK+//rq6uLiYPnnyZFuNRvOnOvXv3r270traWvXo0SP9jRs3vrEZ2rZt23jJycn6Q4cOlYjF4szMzMzcFy9eZCUkJOTTaDQ8Pj7e8NGjR0wAgKioKAmFQsHPnDnDbbudmJgYQ4VCQRo7dqyYROr41KelpdGXLVtmZWhoqLlx40aeUCjMyc/Pz/n9998LUlJSWFKp9JVjef/+feb+/ftNTUxM1EVFRdklJSXCgoIC4fPnz597eXnJa2trqTt37jQCAPj6669Fjx8/zgUAcHd3V1RUVDwnAprU1FTGihUrrLhcrub+/fu56enpeU+fPs179uyZ0NbWVvXNN99Yth4xjclk6qKjo2ujo6NrGQyG7k8cfgRBEARBEORf5i8JatauXWtBIpHw06dPl9jY2GiI6YMHD5aNHz++vr6+nrJhwwYeAIBGo8HIZDLet2/fpi1bttTQ6XQcAIBGo+HTp0+X2NvbK1UqFVZSUtKu2dratWurxo8f39i3b1/5sGHDpK3nzZ07t2727NliNputAwAYP358Y48ePeRKpZKUnp7+TqN7Xbt2jXXz5k0DPp/ffOjQoQoajYYDAGAYBps2barp06dP0/Pnz5lv28yNYGhoqPvxxx/LMAyDb7/91kIoFL62GZpMJiP16tVLumfPnkpi/0gkEoSGhsoCAgKaAACIoajNzc01ISEhjWVlZbTbt2+/MpLbyZMnuQAAs2bNqu8srcOHDxtpNBrsq6++qunXr5+cmD58+HDp4sWLa9oun5ubSw8MDGzauHFjpb29vZqY7ubmppo0aVI9AEBxcfEbm9mtXLnSXKfTYdu2bavo2bNnS82Xu7u7atmyZTU6nQ77z3/+Y05M19PTw/fu3Vu1d+/eKj09vY8/6gKCIAiCIAjy0bx3UFNWVkaprKyk2djYqAAAcnNzaa0/ffr0kQEAPHv2jAkAQKFQ8F9//bXs7t27hSwWSwfw8vdSHjx4wNy1a1fLb7h01E/Cz89P3nYaISAgQNZ2moODgxLg5e/PvMu+EXkODw/vsGZj0qRJYgCAJ0+etOvz8SZDhw6VTp069cXbjIa2e/fuqj/++KPAwcFBDfAyMHzy5Anjp59+4kokEjLAq8drxowZ9QAAx48fb6mtKSkpoT58+JDt6+src3d3V3WWVlpaGhMAYMKECQ1t502bNk3Sdtr06dMliYmJhdOnT2+ZV1RURD19+rQBsS25XP7G6+zp06d6JBIJPD09m9teQ927d1dQKBQ8MzPzgwy3jSAIgiAIgnza3nsIY6JDfUlJCd3V1VXQ2XLFxcWv1JZcuHCBfeTIEaPs7GxGcXExnWjCRQQPHT3ku7m5KTvbvq2trbrtND09PR3AyyDg7fbmVbm5uXQAADs7u3bbBgDg8/kqAIDCwsJ3+sHOXbt2Vd28edMgOTlZf+PGjbwVK1a86GzZ+/fvM3fv3s3LyMhgFhQUMJRKZafHa9SoUU0mJibqCxcucNRqdSWVSsUPHz7M1el0EBER0WktDQBAVlYWk0wm4x3ts52dnZpMJrc7MeXl5ZStW7fyHjx4oJ+bm8toaGggt87bm0gkElJdXR0VAKBbt25unS1XU1NDlcvlGKqZQRAEQRAEQVp776CGCBgEAoFiwoQJ4s6WY7PZLR25Fy5caL5z504zEokEzs7OzePGjasPCAiQ9e/fXzZ79myrO3fudPg7Jq97mCWT36ky5rVIJBIOAKDVdtwHnQgs3jVtNput++mnn0qHDh3q/O2331p8/vnnHQ6tvG/fPu7cuXNtAQBsbW2Vw4YNk/Tp00fWr18/2d69e40OHz5s0np5CoWCh4eHi/fv3296/vx59pgxYxpPnz7NZTKZuqlTp7arbWmNTCbjWq0Wk8vlJH19/Vf6qigUCpJWq30lQExPT6cHBQU5SyQSCpfL1fj4+Mj8/PxkQUFBMpFIRB4/frzDm44DsU0ul6tZtGhR7euWxXEcAwAU1CAIgiAIgiAt3juoEQgESoCXNQWrV6+uazsfx3HAcbzlrX1WVhZ9586dZsbGxppbt27le3l5vVL7UlpaSgcAaG5ufqfalb+Sk5OTCgCgqKiow5oYYthkU1NTTUfz38bgwYNl06dPf3HkyBHe1KlTbXS6V/u8KxQKbPHixdZUKhW/ePFiwaBBg15pZkfUgBEBFmH27Nn1+/fvN42NjeXY29urcnNzGaNHj643NDR8bad6BwcHZW1tLfX58+c0YvQ1wvPnz9sdh4ULF1pKJBLKkiVLqrdu3fpKnxtiuGalUvnaKhtjY2Mtl8vVNDY2kr/66qsXTCazXdCiVqsxKpWKghkEQRAEQRCknffuU+Po6Kg2NTVV5+bmMu/du9euz8Py5cvNaDSa15QpU6wBAJKSkvQAAHx9fWVtA5q8vDxaSUkJDeDt+mH8lRgMBg7w8uGZmObv7y8HAPj111+5HTVh+/nnn40BAEJCQprazvszdu7cWWVra6tMTk7WT0tLe+UYpqSkMJVKJcnBwUHZNqCpr68nZ2RkdNhvpWvXrspu3brJEhISDA4fPmwEABAZGdlpTRph5MiRDQAA27dvN2k7b/v27e1Ganv27JkeAMDcuXPbNWu7desWG+DVAJWobWt9nAEAunXrJtdqtdiBAwfajdr222+/GTAYDK/u3bs7vyn/CIIgCIIgyP9/Xhs4FBcX02JiYgw7+8jlcgzDMPj+++8rdTodTJo0yS4pKYkJ8PKh9dSpUwbbt2830+l0WEREhBgAwNnZWQUAcPfuXXbrUb/S09PpISEhTkRTpL/7BxWtra3VAAAJCQn6QqGQ1tTURAoKCpKPGDFCUlJSQh8zZoyNRCIhAbysPZk2bZpVWlqanrOzc/PYsWM7bDb2tvT19XUHDx4sI5FI0LZ5l7OzswrDMMjNzWVcu3aNRUwvLS2lDhgwwKG2tpb6vzy1O16TJ08WNzU1kY8cOcKztrZWDR48WNp2mbYWLVoksrKyUsXGxhrNnDnT8smTJ4zU1FRGZGSk1alTp4zbLk8MELFz505jIvBramoiRUdHW1y9etWwbd6MjY21TCZTV1paSktKSmISo9xt3bq1ikKh4N98841lTEyMIbF8YmKi3rx586x1Oh2MGTOmpemcVColjRgxwm7EiBF2UqkU/fgmgiAIgiDI/8de+zB4584dg8mTJ9t39qmtraUAAERGRkoWLlxYU1lZSQ0MDORbWVkJTExMPCZOnOig0+ngv//9b8XAgQNlAAAhISGyQYMGNSgUCpJAIBC4urq6mpubu3ft2tXNwcFBGRUVVQcAkJOT807DML8rPz8/+f9+38VIIBAIfv31VwMAgB9//LEiMDCw6fz581wTExNPJycnVy6X2+Xnn3/mOTs7N587d664o+ZSf9bAgQNlM2bMaNd8z8LCQhMdHV0LADBkyBBnOzs7NwcHBzc7Ozt3pVJJWrFiRRUAQF5eXrvjNX36dAmDwdCp1Wps/Pjx9a1/5LMzTCYTv3PnToFAIFAcOnTIpEePHq4+Pj6uv/zyi9GSJUuqAQBoNFpLE7Zvv/22ikKh4Dt37jTj8Xgenp6efCMjI8/Y2Fij7du3l9HpdLy4uJjeeiCD7t27y5qamsiBgYH8kSNH2v9vWvOePXvKAAAmT55sb2xs7GFubu4eFBTkUltbS50wYYKo9UAKSqUSu3TpEufSpUsclUr10ZsqIgiCIAiCIB9Ph31qAgMD5R39JklbHA6npQf9Dz/8UB0eHt5w9uxZw+fPnzO0Wi04ODiooqOjRW2bmV25cqV43759Rrdu3dKXSCTkfv36KUNCQqRjxoxpLCgooBoYGOisrKxaRt+aO3dubWc1NxEREeLevXvLTUxM2vVrGTZsWKORkZHW3d2901HTCP7+/oorV64UXLhwwUAsFpOJ0b8sLCw0iYmJhceOHTNMSkpiFRcX08PCwhpCQ0OlISEhMuJ3dt5kzpw5dQ0NDeTXBUA7duyo5nK5Wq1Wi1lZWbXsz549e6oCAgJk58+fN6ypqaE4ODio/Pz8qiMjIyVyuZykVCpJRkZG7fafy+Vqt2/fXp6fn0+fN29eu+ZhVCoVFi9eXNP6PAK8rB1KTU3NS0pK0nv8+DHTxMREM3DgQFlZWRll27Zt5gYGBi1BzciRI6UpKSk5O3fu5JWUlNCMjIw048aNE3/xxRf1JiYmWhzHsYqKCmptbS3FzMxMAwBw4cKFkv3793MzMzOZxLDbAACzZ88Wh4SEyI4dO8bJyspiNDQ0kAcNGtQwceJESdumd0wmU0dco0wmE/34JoIgCIIgyP/HMBzHn33sTCD/HLGxsQZFRUW0iRMnNrQd1vnQoUOcmTNn2k2ePFl0/Pjx8o+VRwRBEARBEARpDfVFQF5RUlJCW7lypdWCBQssWk+XSCSkNWvWWAAAjBo1qt0PcyIIgiAIgiDIx4JqapBXiEQicvfu3V1KS0vppqamaj8/P2lNTQ316dOnekqlkvTNN99Urlu3rl3fHwRBEARBEAT5WFBQg7RTWlpK/e6770xu3rxpUFlZSaXT6biTk1NzVFSUaM6cOW8cFhpBEARBEARB/k4oqEEQBEEQBEEQ5JOG+tQgCIIgCIIgCPJJQ0ENgiAIgiAIgiCfNBTUIAiCIAiCIAjySUNBDYIgCIIgCIIgnzQU1CAIgiAIgiAI8klDQQ2CIAiCIAiCIJ80FNQgCIIgCIIgCPJJQ0ENgiAIgiAIgiCfNBTUIAiCIAiCIAjySUNBDYIgCIIgCIIgnzQU1CAIgvxNmpqaqNXV1XofOx8IgiAI8m+DghoEQZC/SUVFBevZs2cmHzsfCIIgCPJvg4IaBEEQBEEQBEE+aX9ZULN+/XoTgUDA37hxI6/19N69ezsNGTLE/n23P2XKFGuBQMBvamp67zzjOA4///yzIfH30qVLzQQCAT8rK4v+vttua+PGjTyBQMC/c+fOn25ysnLlSlOBQMA/c+YMe9KkSdYCgYD/9OlTxtOnTxkCgYDf0Wf69OlWf/U+vM6mTZt4AoGAf/v27fduUtO9e3dnDw8PfmVlJUUgEPA7u27c3d35AoGA36tXL6fW0/39/Z2I44Dj+DvlYfTo0bYCgYD/TisjyEdUWlpKFQgE/D59+jgqFAqMmL5161ZjgUDAv3fv3nt9R69du8YSCAT8HTt2GL1/bgEyMjLojx49YhL/FwgE/GXLlpn9FdturaamhiIQCPhRUVGWf3bdnJwcmkAg4I8ePdr28uXL+gKBgL948WJzomw+e/Ysm1h23LhxNgKBgD9jxoyWMvjgwYMcgUDA//HHH7mvSychIYElEAj427ZtMwYAmDBhgo1AIOC3Po+EL774wpK4pwwdOtReIBDwy8vLKW2XmzZtmhVRHqampjKI6QsXLjQnpickJLD+7DEB+L9r6l3XRxAE+RD+sqCmsrKSKhQKmevXr7coKCigEtNzc3MZ+fn57x0sqFQqTKlUknQ63ftuCoKCghwXLFhgQ/ytVqsxpVJJetcH4dfRaDSgVCpJWq223c3pTYhjKhaLyUVFRXShUMhUKBSYXC7HhEIhs6qqikan0/HWHyqV+tfvxGu8z/61lZuby8zJyWGo1WpMKBQyCwoKOrxuhEIhUygUMpOTk/WJm3V6ejr94cOH+sS8d81DYWEh/X3WR5CPRalUYkKhkPngwQP2N998Y0pMr66upgiFQub7vhDSarWYUqkkaTSa9/6uHz9+3LBHjx6uaWlpDICXL5qUSiVJrVa/97Y78q75bm5uxoRCIbOoqIgmkUjIQqGQWVFRQbW2tlYLhUJmfHw8GwBAoVBgFy5c4AqFQua5c+c4xL3k+vXrbKFQyOTz+crXpdPQ0EASCoXM6upqCgBAUVERTSgUMnU6Xbs8l5WVUYVCIbOxsZFUUFBAFwqFzI72rbi4mE6Uh5cuXWoJvs6cOcMlpjc0NLzTNUFcU42Njai1B4Ig/xjt3u68L4VCQZozZ45VfHx8cWfLZGRk0J88ecJwcHBQ+/r6KphMJv7gwQOmRCIhh4aGymg0Gg4AkJyczHjx4gWlX79+ssWLF9e9ePFCzGKxWh7a7927p1dSUkINCQmR1dXVkcvLy6mDBw+WkkikTtNJSUlhZGVlMTUaDXblyhX9oKAgeWRkpHjgwIFSOzs7dav9wBITE/XEYjHZ399fYWtrqwZ4GVzduHGDZWdnpzY1NdXcunWLZWBgoBs8eLAUw9rfM8eOHdvYvXv3Zi8vr2YAgPj4eBaXy9UKBAJVQkICC8dxGDJkiJTJZLYLRuzs7FT/+1ft6OiofPjwob6jo6OaCBp79+4tvXbtWrvj3NTURLp3754emUzGBw0aJGt9LL28vJqtra01OI5DamoqIysri+7q6qrq0aNHM5VKxYl1BQKBUqvVYg8fPmT26NFD4e7ursrLy6P98ccfLX8DAIwZM6bR29u7uWvXru3278aNGyydTtdu/zIzM+kpKSkMa2trTf/+/WXE+bK2tlbJZDKSjY2NWk9PT2dpaaluu28ELperEYvFlKtXr+r36NGj+cqVK+zW09sej1u3brHUajUEBgYqzMzMNK3n37x5k1VdXU0JDQ2VtU0Hx3G4desWq6ysjPK//Wx5OHny5Amjurqa0q9fP1lH5w9BPpbdu3ebTZ8+XUx8T9uqr68n37p1S49MJoOPj4/CxsZGU1lZSXn27BnD2dlZxefzVQAvazlSU1MZjo6OKh8fn+Y9e/aUE/MAAMrLyyl37txh2dvbq7p06aK8f/++nqurq9LJyUlNpHP79m09EokEPXr0aLa1tVXX1dWR4+Pj2Wq1GsvOzqZnZWXRHRwc1Hv27Cm3sbF55TufnZ1Ne/z4MdPBwUHdt29fOTH9yZMnjJqaGsrgwYOliYmJemVlZdT+/fvLLC0tX/luAwBwuVztnj17yk1NTTUAL2tfCgoKaMHBwTIifT8/P0Xr/SI4OTmpSSQSWFlZqV1dXZUAANbW1uqQkBAZAEBKSooewMsyRKlUYiwWSyeRSCgpKSkMX1/f5tTUVBaDwdD16dNHAfAy8ExMTNSrra2leHl5NXfp0uW1wQ7AyzIoPj6epdVqsT59+shtbW1VAAAODg5qe3t7ZVFREd3Kyqrdfrfaf83t27fZa9asqcvOzqZVVFTQOionNRoN9scffzAKCwtpPj4+irbXTlZWFj0lJYXRo0eP5o7S6axcLysro2RkZDA8PT2VxH0UQRDkQ/jLgxoTExN1QkKC4enTpw3GjRvX2HqeTqcDHx8f56dPn7IwDAMcx8HDw0Px5MmTvF9++YWzd+9e059//rl4ypQpDUqlEhs4cKAzm83WlpaWPl+yZIllUlISu76+PpPL5WrHjx9vc/r0aSOAl4W2tbW1KiMjQ08qlWYwmUxdr169nFNSUlrScXd3Vzx58iRv+fLlFvX19RQAgGHDhjllZGQIv//+e9PY2Fijx48f5/j4+DTfuHGD9fnnnztIpVIyAACdTtdt2rSpYsGCBfW1tbXkYcOGOfXs2VOan5/PILYVHh5e/9tvv5W1PR779u0z2rlzp9n58+cLw8LCmkaPHu1gZWWlVqlUWFFRER0AoHv37rKUlJT8tkHRqFGjGqVSKdnX17eZTCaLbWxsVObm5hoiqJFKpaS0tLRXajNsbW01HA5H+91335k9fPhQf//+/aXdu3dXBAQE8M3MzNQZGRk5MpmM5OXlxS8sLKQTxycwMLApMTGx8Pnz57Rhw4Y59erVS/rs2TOWUqnEqFQqPmPGjBdHjx7lqVQqjEQi4XFxcUWfffZZ0/79+4127Nhhdu7cucLPPvusafTo0Q6WlpZqtVrdsn/e3t6y1NTUfAzDYNWqVaYbNmywIGrc/Pz8pDdu3CjU09PDly5dWtPc3EwikUiwdu3aytZBZltOTk7KoqIiuH37NnvVqlUvbt26pc/lcjV8Pr/50aNH+sRyx48fN4yKirIj3gAbGBhoDx48WDp27NhGAIAhQ4bYX7t2zRAAgMfjaUgkUktwolKpsIEDBzrcvXuXDQCAYRgsWrSoZtu2bdUAAKtXrza7cuUKJz8/P5t4iEOQj83ExERdV1dH/eKLL6wTExML287ft28fd/78+bY4jgOO40Cj0fDTp08XeXp6KkeMGOHk6+sr/eOPPwoAXjYr3rdvn+np06eLdDodTJgwwWH58uVVGzZsqL127RprzJgxLeVkUFBQ0927d9mrV6+uWr9+fe2PP/7IjY6ObkmHSqXisbGxRSQSCU6ePGkMALBz506zxsZG8uzZs+uHDRvmNGnSJFFMTEy5QqHABg0a5HDv3r2WGoaAgICmK1euFLPZbN2qVavMr1+/bjhgwICG69evGwIAcDgcTXJycp6Li8srD+NEmR0aGtqQkJBQvG/fPqNdu3aZDR06VHLlyhUOAACdTscvXbpU0PbFhr6+vu6bb76p7NatW3O3bt2US5YsqQ4PD290dXVVmZqaqjMzM5lqtRojamxmz55dt337drOEhAR9W1tbTXFxMd3Pz09Ko9HwtLQ0up+fH1+hULTUbixdurR68+bNNa87n/PmzbPYt2+f6bhx4+qHDh0qnTRpkoTFYukEAoEqOjpaFBgYKH1dDX3v3r1ld+7cYSuVSuzy5ctsYtrVq1dbmmALhUJav379nKurq6kAACQSCebPn1+zY8eOagCALVu2GC9fvtxKp9NhZDIZd3Z2fiUYW716ten333/fUq737t1bevPmzUI9PT387NmzBgsXLrTZtm1b+eLFi0Wv21cEQZD38ZdXHa9b68Aq6AAAIABJREFUt66KQqHgS5YssZLJZK9sPzU1lcHlcrUHDhwobWpqyhgxYoQkKyuLmZmZSZ83b54IwzA4fvy4EQBAbGysQUNDA3nKlCmitg/7N2/eZJ0+fdrIw8NDkZOT83znzp3lGRkZLe3Fnz59yjAwMNDu27evtKmpKSMsLEycnZ3NTE9Pp+/du7eCx+Np9PX1tQ8fPsx1cnJ65QYolUpJn3/+uQOVSsVPnDhRfP78+UJjY2PN0qVLrTMzM1sCiLS0NNapU6eKi4uLszkcjubs2bPct20al5OTw1ixYkW1SCTKdHFxaX7y5Amro/48Xbt2VW7btq2ay+VqQ0JCZBs2bKhtPf/+/fvsbt26ubX+xMbGGmAYBr/88kupoaGhduXKlZYRERF2Wq0Wjh07VsrhcHRJSUlMKysrVVxcXKFYLM7w8/OT3rt3j11XV0cmtl1QUMDIyMgQHjlypEStVmPHjx83TkxMzDty5EiJTqfDTpw40Wkb8dzcXMby5ctrRCJRJp/Pb3769CkrMzOTnpaWRt+wYYN5ly5d5EVFRdlr1qypfPjwof727duNAQAiIyMlc+fOrQcAWLp0qYgIPDqCYRj07t1b+ujRI325XI49fPhQv1evXrLW10pOTg4tMjLSzsLCQnXx4sWCn3/+uRjHcZg1a5ZtXV0d+eTJk4bXrl0z7Nmzp7SwsDB7yZIlNbW1tS1NJ7dt22Z89+5d9vTp019UVlZmhYaGNuzYscPsyZMnDACAsLCwxujo6Foul/v+bSIR5C/St2/fpr59+zbdu3ePffToUU7b+U+ePGF+9tlnYrFYnHHhwoUClUqFxcXFGTo7O6uCgoIak5OT9XNzc2k6nQ7OnDnDNTc3V4eHh7f7Li5ZssRKKpWSDx8+XJKbm/tcIpGQW89PTU1ljhw5UiwWizMuX75coFarsbi4OMPg4GBZZGRkHQDAihUrqr755pvattueP3++xb1799jTpk17kZycnBMeHl6flJTEXrp0qTmxjE6nAxMTE41YLM6IiIgQSSQSSlxcnMHbHiepVEqura3NXLNmTaVSqcR++eWXdscKAGDNmjV1YWFhTRQKBd+6dWtN7969FQAAvXr1kimVStKjR48Yd+/e1edyuZqVK1fWkUgkPDExUT8xMVEPAKBPnz5SAIDbt2+zevToIcvNzX1eVlaWZWhoqI2Li+swTcKWLVuM9+3bZzp06FDJL7/8UgYAEBAQoNi6dWsNhULBw8LCmlatWvXiddsICgqSKhQK0q1bt1i3bt1i6+vra7t16yZvvczIkSMdamtrKTt27Ci7c+dOnoeHh3znzp1mZ8+eZdfW1pK/+eYbSzabrUtMTMy7ceNGflVVVUs5mZaWRv/+++/NPT095UVFRdlr166t/OOPP/S3bdvGAwDo3r17c3R0dK2Pj4/izWcFQRDk3f3lQY2np6dyzpw5dRUVFbQVK1a80unT19e3+eTJk2VKpRKbOHGiTVJSkj7Ayw6ubm5uqj59+jTduXOHXVlZSTl+/LgRhULB58yZU982jQcPHugBAISHh4v5fL5q8uTJDXZ2di1vjnr06NF88uTJMq1Wi02aNMmaeNtXWlpKdXV1VVEoFJxMJkPv3r0VbZsNJSQksKRSKXno0KENERERDWFhYU3jxo0Tq9XqlrdcAABubm6KgQMHyoimYTqdDmt7U+8Mm83Wzpw5U2JkZNRyc6mvr3+rdVsTCASKzZs3l7f+BAYGygEA7O3t1T/88EO5WCym5OXlMRYuXFhLNJkYNGiQ7MSJE2UFBQW08ePH22ZmZjIBAEpKSlpuVD179pS6uLioevbsqQAA8PLykvfq1UsxaNAgKQBAbW1tp7V8+vr62lmzZomNjIy03t7eLft38+ZNfZ1OhxkbG2tOnDjBUalUGADAnTt32J1t63WCgoKkMpmMtHnzZp5UKiUHBQVJW8+/fPkyW6PRYBEREfXDhw+XTpkypWHAgAGNDQ0N5Nu3b7OSk5OZAADTpk2rd3BwUH/11VcifX19LbF+YmKiPgAAjUbDDx06xDUwMNDqdDqIj4/XBwCYNWuWeO/evVVGRkZaQJB/kB9//LGcTqfrli9fbtnU1PRK2XLgwIGqqKio+uXLl5utXLnSEgCAeEidPXu2CMdxOHToEPfChQvs2tpa6qRJk0REUyKCQqHAhEIh08rKSjVjxgyJi4uLauzYseLWy+zbt69q1qxZ9StWrDBbtmyZBZEOh8PREc3E7O3t1fb29u1qOW/evGlAo9HwHTt2VPn6+jb/8MMPVRiGQUJCwitBy8yZM+s5HI6O+O6/bRkMADBx4kSxiYmJduDAgX96XQCAPn36yAAALl68aJCZmcn09/eXGhsba728vOSPHj1iJSUl6QEA9OvXTwYAsHDhwvoffvih8ujRo5xx48bZyuVyUuuXKB1Zv369JQDAihUratueg7c1YMAAKQDA1atX2Q8fPtTv2bOnjEz+v13Nz8+n5eXlMXx8fGQLFiyoDwoKks+fP78OAODSpUsGz549YzQ3N5OCg4MbAwMD5cHBwXIiUAMAuHXrFqujcv3u3bv6AACBgYHyvXv3VrVuPoggCPIhfJBOfhs2bKixtrZWHThwwIRomgAAkJiYqOfs7CzYsmWLmZ2dnapv375NAAAUCgUHAJg5c6ZIq9ViO3bsML579y47NDS00draul1bYTqdrgN4+bae0Pr/9+7d03NxcXHbtGmTmY2NjZpIp3VB3pnm5mYMAKD1g6qRkZEGAEAul7ckwuPxWvKlr6+vA3jZ9vltGBsbv/O6rdna2qqWLl0qav3x9PRsCe6IbQO8fAgh/h8XF8d2cXER/PTTTzxPT0+Fj4+PDODV42NoaKgFeNkso3We36bvSOv9Y7FYLfuHYRgO8DIgSk5O1svIyGAOHz5c4unp+U5v8IgAa+fOnaYA/3fzJrzuXMpkspbBDfT09HQAL69DNpvdsixxTeXl5dGTk5P1lEolafjw4RJzc3PU1Az5R3Nzc1MtWrSopra2lhoTE2NMTMdxHIKDgx3CwsIcq6qqqFOnThUBABDNLkePHt1kbm6ujouL48TExHBJJBJO1J62RaPRdJ2VwQAA/fv3dwgLC3OsqKigTZs2rf5/6bxV/pVKJcZgMHREH0oOh6OjUql429HALCwsNAAABgYGf7ocJfrWvcu6AAD9+/eXAgAcPHiQp9PpMOLv4OBgqUQioZw+fdqISqXiQUFBcgCAr7/+2szX19f1zp077KFDhzaam5ur33Q83NzcFBQKBf/666//9MhtBFdXV5WlpaXqxIkTRg0NDeTAwMAOy0kul9tS9hkbG2sBOi4n/7dsu/tyXV0dJTk5WS89PZ05fPhwiYeHB6qZQRDkb/VBghoWi6XbsWNHuVqtxlqPZnPs2DGuTCYjHTx4sHTXrl1VxAMzUWhOmDCh0cTERL1r1y5TrVaLzZw5s8P2tyNHjmwCADh37hynrKyMEhMTY1hcXNzSfOvnn3/mSKVS8oEDB8p2795dxWQydQAvmysAvHx47WyUneDgYDkAwKVLlwzLy8spIpGIfObMGS4AQOs3TcQD+rto3W/jfWg0GkwkEpFbf8RiMRkAoKqqijJnzhwbDoejcXBwUP7444+mV69e1QcAOHTokLFarcbOnTtXvGXLlhri+LduPtf2AaWjQRA601nw+PnnnzcBvOwPc/HixZL169fXmJubq4k3pX+Wl5eX0sTERC2RSChGRkaath1YiVqr06dPc+vr68mlpaXUq1evGlIoFDwwMFDetWtXBQDAmTNnOAqFArt9+7ZeVVUVjVh/8ODBjQAAo0ePlly8eLFk1KhRDc7Ozkp/f38FAMCjR4+YcXFx7NbBLoL8U6xbt67O0dGxWS6Xt5TzmZmZ9Pv377MHDBjQcP78+dI+ffrIAf7vgZ5CoeARERGiwsJCxuXLlw2Dg4ObHBwc2gXxTCYT79Wrl6y8vJwWGxtrUFxcTI2NjW1pkpqdnU27d+8eu3///o0XLlwoCQwMlLVOh+gDQrzVb6tHjx7yxsZG8qFDhzgAAHv27DFSqVRYz549X+nzQrwQexdEOfxnyrbWfHx8mg0MDLREh/thw4Y1AQAMGjSoCQCgpqaG6unpKSde7Bw9epRnZGSkefDgQcHChQvr5XL5G0fcjI+PL5w8ebLo4cOH+idOnDB87cKv4e/vL5VIJBSA9i9/PD09lRwOR3Pv3j12VlYWXS6XY0ePHjUCeFkb1bVr12YymYwnJSWxS0pKqP8b/KGldr2jct3MzExNvHQqLi6mxsXFsYuKil5bK4UgCPK+PthwjKNHj24aOnSopPW0kJAQKQDAF198YRMQEOB45coVQ4CXw0MCvLzRTZw4sV6pVJKsrKxURGHZlpubmyo0NLQhLS1Nz97e3mP+/PnWlpaWKoCXwQZRaEdHR1sHBgY6Xrx4kdM6HUtLS5VcLieZm5u7//HHH68M32thYaFZs2ZNZVFREd3Jycnd1tbWPS0tTW/ChAkiovnWP8XNmzcNeDyeZ+uPm5ubK8DL3/URiUSUTZs2VR4+fLgUACAqKsqmvr6e3L9//yYAgDFjxtj5+vo6p6amsgBeBkIfMr/29vbqkJCQxgsXLnD5fL5raGio08mTJ42tra3fuebDz89PBvCyY2rbeQEBAfIZM2a8ePz4McvGxsbd2dlZUFFRQVuyZEmNs7Ozatq0aQ2urq7Nly5d4tjb2wuGDBnibGFh0dLHasyYMY1mZmbq+fPn23p7e7vMmTPH9vr16wbEAAbr1683DQ8Pd/zQxw1B3gWNRsP37t1b3nqah4eH0tLSUnXjxg3DAQMG2BP9B+vq6loeOOfOnVtPIpFwpVJJ6uzFEgDAvHnz6qhUKj5hwgQHJycnd2JYYQzDcDc3N5W1tbXq9u3bBgMGDLAfMWKEI41Gw+vq6igAADY2NioAgFWrVlm2/l0XwsaNG6stLCxUc+bMseVyuR4rVqyw4vF4mi1btlT/VcfnfWEYBkQtt7W1tcrV1VUFANCvXz858SLN39+/5Z4REBDQVF9fTwkICHDs0qULv7m5mSSVSsmveynC5XJ1GzdurCb6R3b0uzVvIzg4WAbwsumzn59fuxqU3bt3l6vVaszLy8vNwsLC49KlS5xevXpJo6OjxZaWlprp06e/KCsro3l4eLjZ29sLWg9MYG9vrw4NDW1oXa7/8ssvLeX6hQsX2OHh4Y7nzp176/5OCIIg74K8du3aL/6KDWk0GrCyslINHDhQyuFwdAAv35STSCRdYGCgLCAgQO7p6ans0qWLXKlUYj4+Poo9e/ZUUqlUnaurq5IYPtLNzU1JJpN1UVFR9R4eHi1NqVQqFbi6ujYPHDhQimEYNnHixAZnZ2dFz549ZTt27KiKj49ni0Qiyrp162o8PDyUnp6ecrVajXXv3l2xd+9eIh2Vh4eH0sfHRyGXyzFvb2/5oEGDpCwWS2tnZ6caNGiQlM1m64KDg+X+/v5SQ0NDjbOzs3Lx4sW169evrwN4eSNTKpUQHBws7d69ezORNz6f3zxw4EAplfrqyyitVgtEbQSPx9PKZDLw8/OTBwQEyInjZm1t/cpxewsYiUTS+fn5ydp+AgICpHZ2duqSkhLasGHDGhYtWlTv4OCgNjc3V1lYWKhZLJZu3LhxjS4uLorm5mZSv379mjZs2FClp6endXV1VTo6OqoxDMP79+8vJZqyaTQavF+/ftJu3bopAQAUCgUEBwdLfXx8mon9GzRoUOv9k7Xdv0GDBkk5HI5uwoQJDYaGhmoKhYIPGDCgaevWrVXEdt9WU1MTBAUFyXr27Kng8XgaExMT9aRJkyROTk5qpVKJubm5NQ8aNEiKYRiEhYU1denSRa6vr6/t2rWrfN26ddXR0dFigJc1ShEREWIMw3QWFhbqTZs2VfXs2VPm6OioJK6FcePGiRkMhpZKpeJTp04VbdmypZo4TyqVCnNyclIOGjQIDemMvJUXL14wJBIJw9nZueGv3jaGYcR3Vebl5aUEAHB2dlZzOBy1h4dHM1EGDRs2rJFOp2sZDAa+ZcuWKg8PD4WpqakmJCREhmEYcDgcHZvN1nTt2lU+f/58MdFECsdxYDKZ2pCQEKmzs7PaxcVFPWzYsAZbW1vl/PnzX3h7eyt+//13zueffy7x8/NTEOnQ6XR88+bNVV5eXgoTExNNSEiIzNPTU4XjuM7ExEQ9dOjQJk9PT2XrcsfU1FQ7btw4ibm5uYrNZmvDwsIajh8/XmZra6sBeFnmOjk5KQcOHChjMpl427y1PS6ty2ytVgsWFhYtZRYAgE6nw/v16ydtPWT72zA2NtZYWFiox40bJ/H29m4GAKBQKMBisTQeHh7NkydPlhD9hwYMGCA1MTFRqVQq0hdffPFi0qRJYnNzc7Wbm5uKy+XqGAyGNiQkRObi4qJqXY4ZGBjonJ2dFYaGhloLCwsN0eTuTZRKJfD5/OZBgwZJra2t1RiG4eHh4ZJevXoptFotmJiYqAcOHCgzNTXVenl5KQcPHtxgZGSkNjc3V0dFRYn2799fRdSEjRw5ssnU1FTFYrG0M2bMEM2fP19kaGioGTBggMzU1FQ7YcKEBg6HoyaTye3KdZ1OBxwORzNgwAApcf4QBEE+BAzH8WcfOxN/VmZmJr1nz558V1fX5t27d5dXVVVRIyMjbS0tLdVCoTDnY+cPQRCkI0KhkFNcXGw4ePDgko+dl/fVv39/h6ysLObixYtrAwICZP/973/Nrl69anjt2rV84vexEARBEOTv8kkGNQAAM2bMsDp27BiPaJPM4/E0R48eLRk+fPg79c9AEAT50P5NQc2dO3f0Ro0a5UD0KcEwDCZOnCiKiYkpf9O6CIIgCPJX+2SDGgRBkE/NvymoQRAEQZB/kg82UACCIAiCIAiCIMjfAQU1CIIgCIIgCIJ80lBQgyAIgiAIgiDIJw0FNQiCIAiCIAiCfNJQUIMgCIIgCIIgyCcNBTUIgiAIgiAIgnzSUFCDIAiCIAiCIMgnDQU1CIIgCIIgCIJ80lBQgyAIgiAIgiDIJw0FNQiCIAiCIAiCfNJQUIMgCIIgCIIgyCcNBTUIgiAIgiAIgnzSUFCDIAjyL7Vw4ULzP/74g/mx0sdxHMrLyykfK32pVEoSi8Xkd1lXp9NBVVUVBQDgwYMHzG+//dbkr83du1uwYIF5QUEB9W2WLSsr6/D4Hzp0iBMbG2vw1+YMYPbs2ZbEcXtXx44dMzxx4oRhR/OSkpKY//3vf3nvs/3Nmzcb3759Ww8AYM2aNSaPHz9mvG75+Ph41vbt2407mvfll19aFBUVvdW5+Ke4du0aa8eOHUYfMo3W193cuXMtSktL/5HHSCgU0r766iuzj52PDyUmJqbT79L7IM6vRqPBIiMjrWpqaj5aOd8aCmoQBEH+pY4fP278/Plz+sdKf+LEiTYxMTGcj5V+165dXZ4/f057l3VHjhxpd/78eTYAgFgsJufl5X2049hWdnY2QyaTvfH+vWjRIvMtW7Z0GIwlJCSw7969y/qr83b06FHeixcv3imQJNy6dYt9+/Zt/Y7mZWVlMc6ePfte19T58+c5aWlpDACA3NxcxpsC39TUVObly5c7DACzs7MZUqn0k3qWSk1NZV66dOkvf9AlnDt3jh0eHm5H/J2dnc2Qy+XYh0rvfZSUlFBPnjzZYcD6b1BRUUEtKyv7SwPKEydOGE6ZMsUGAECr1cKRI0d4EonkH/Ed+EdkAkEQBPlnaFuz0tkbOLVajdXW1r72YbCzdcvLyyk4jr8xL0qlEisoKKBqNJrXPhBpNBqsoKCAqlarX1nuxYsX7W7mcrkcKyoqoup0ug63U19fT/5f3lvWHTZsmPT48ePlHe2HUqlsl7fWtTxvo7KystNlq6qqKG33PyEhodjLy0vZeppMJiNVV1e/1blrm9f3fYuuUqmwurq6Tq+F2tpaskql+tMPtTiOv1XeVCoV9rrlXncuTp06VTZw4EBZ62l1dXXkN11zhBs3bhR16dLljeeCUF1d3e58dqa8vJxCXI9t6XQ6KCkpob7N9+ht6HS6116Hne2PSCQit12vpqaGotVqW/bx9u3bRW5ubqq2y3R2TWg0mteez9bKysoonQWlrztGYrGY/LaBFo7jrxwbHMehs7JPIpGQ3iXILSkpaVd+/VlisbjduVi2bNmLlStXvmg9DcdxKCkp6bAMlMvlWGfXHKG6upqi0+na5VUul3d6TxCJROR3rTX/M1BQgyAI8v8BPp/vevr06Za3zQsXLjQfP368DQDA5MmTrSdMmGBjb2/vJhAI3Ozs7NyuXbvGsre3d3N1dXXz9vZ2IW5Ivr6+zuPGjbMxMzNz9/T0dO3du7eTSCRqd7P66quvzO7fv8/+7rvvLL788ksLAIANGzbw+Hy+q5eXl6uxsbHHkSNHOnzjLhaLycOHD7fj8XgevXv35uvr63tu3bq1w7epJ0+eNDQ1NXUPCQlx4nA4ngsXLjQHAOjfv79DU1MTediwYY4xMTGG1dXVlNDQUAczMzOPHj168A0MDLocPHiQA/CyiYavr6+zh4cH39TU1GPMmDE2z5490/v666+tVq5caXr48GFOt27dXAAAli9fbjZixAg7d3d3fpcuXVwNDQ27HDhwgEvkZ9OmTTwej+fh7u7u6ufn5+Tk5OQWFxfHbpvvzZs3G/fu3dtJIBDwfXx8XKysrAREzRAAwJEjRzje3t4uHh4eroaGhp7r169vqXExMjLySExM1BOLxWQajea1cOFCcysrK3c7Ozv3wMBAR4VCgW3ZssX47Nmz3EOHDvGI89xWWlqanoWFhbu3tzffxsZGQDRVdHNzc23dPOnp06cMQ0NDT4VC0e5B5j//+Y+psbGxB5/Pd/vss89sWz9A/v777/p9+vRxFAgEbmw2u0t0dLQF8SDl6urq2rr526JFi8zHjRvXks+srCyGpaWlu7e3N9/Kykpw7949vbZp4zgO0dHRFgYGBp4+Pj4utra2ghs3brTUPp08edLQ0tJS0L17d76Tk5Pbb7/91q62xd3dnR8TE2MIAJCXl0fr0qWLi0AgcLOxsRF01Czp6dOnDFNTU/edO3caAQBwOBzP+/fvM0UiEZnBYHh9+eWXFsS56Nu3ryMR9Obl5dE8PT35AoHA1djY2CMsLMwuNDTUoaPzEhMTY2hqaures2dPF1NTUw9vb28X4mHRx8fHec6cORY8Hs/Dy8vL1crKSvD06VOGXC7HDAwMPK9fv/7K/ru7u/M7SoOgVCqx2bNnW1pZWbkLBAI3FxcX16SkpJYmq/v27eOampq6d+/e3cXV1dWV2H5SUhLTxcXF1c3Nzc3JyUlgY2MjSElJYTx69Ii5dOlSq7S0ND1nZ2dXAAA2m+2ZnJzMAAA4e/Ys28/Pz8nd3d3VwMCgy4IFC8yJa8bBwcFtwYIF5sbGxh4eHh6uTk5Obp01szx27JihiYmJR69evVxMTEw8unfv7kyUQ926dXOZO3euhbGxsUeXLl1cbWxsBOnp6XSAlwHw4MGD7W1sbNwtLS099u3b12lTxqCgIMfIyEgrS0tLd2dnZ4G3t7fL+fPn2RYWFu4uLi6C4OBgR+J6Tk1NZQwZMsTe2dlZYGxs7BkWFmYnFovJmZmZdCqV6tU6KFy2bJnZ8OHD7QAAYmNjDUxMTDx69uzpYmho6Llu3boOa1ZjYmLanUsMw7rm5eXR1Go1NmLECDtbW1uBr6+vi52dnduDBw+YAAAzZ860nDFjhhUAQGhoqENUVJSlmZmZe9euXV1NTU09Wn+vpkyZYm1mZuZhb28vmDRpkjWJROra9mXFjRs3WOvXr7d4+PChvpeXlwsxfe3atWbW1tbu1tbWHsHBwY5EYFdcXEz19/d3cnBwENjY2LiHhoY6vOll2PtAQQ2CIAgC169fN0hISCisra3NYrPZuvDwcMdr164V1tfXZ+I4Dr/++mvLA2FSUpL+o0eP8oqKioRcLlc7ZcoU67bb27p1a02fPn2aVq1aVbVr166q3377zeC7776z+Omnn8pEIlHWDz/8UD5r1izb1NTUdv0Ztm3bZlxeXk4TiURZdXV1Wf/5z3+qN27caN5Rvr/99lvzTZs2VRQXFwufPHmSc+nSJcPKykrKrVu3ithstvby5cuFERERDd9++62JUqnExGJxlkgkypo9e3bdhg0bWraZkpLCWrp0ac2zZ89yfv3117Ju3brJN2/eXPH999/Xtk3z0qVLnI0bN1aKxeKs9evXV6xatcoSAODOnTt669ats7h06VJhbW1tdt++faWFhYWdNlt79OiR/pIlS2orKyufr1q1qnrq1Kl21dXVlJSUFMbs2bNtly1bViMSibIuXLhQ+P3331ucOXOmXXCkVquxoqIienl5eXZJSUn28+fPmbGxsYZLly4VjRo1ShwVFfUiNja2rKP0MzIymBcvXiysqqrKDg0NbZw6daotjuMwadKk+tjY2JZA7ciRI9ywsDAJk8l85ZX31atX9Xfs2GF2/fr1gurq6mxzc3MNUQtRWVlJiYiIsB8xYkRjTU1N9v3793Pj4uK4W7Zseav+MOnp6XpxcXFF1dXV2cOGDWuYOnWqbds3y/v37+f+9ttvRhkZGTmVlZXP586dWzdx4kS7pqYmUmZmJj0yMtJuz5495VVVVdkbNmyo/PLLL61f12xv6NChDoGBgdKKiorsJ0+e5B4+fJiXmJjY8tCXnp5OHzx4sOO6deuqFixYUN92faVSiZWWllIrKiqyi4uLszMzM5lE4BYeHm7n7+8vra6uzr5582Z+UlJSh83rpFIpac6cOTZ79+4tr6ysfF5bW5tVWVlJbd2M8+LFi5wnT57kisXiTA8PD8X3339voqenh3/22WeS48ePt5y3mJgY7oQJE8SvO87Lly83S0xM1L9z505+dXV11pAhQxrDw8MdpFIp6d69e3pHFKvQAAAgAElEQVSLFy+2OX36dHFlZeXzBQsW1M6bN89ao9Fgc+bMsR4zZoy4rq4uSyQSZdrY2Kj27Nlj3KtXL8WWLVsqunbtKs/Pz89pnVZxcTF1ypQp9mPHjhXX1NRk3717Ny8mJsZ4165dLQF0QkKCgVAoFNbX12dxuVzNtm3b2l0vDQ0NpHnz5tkePHiwtLKy8nlNTU1WaWkp/dSpUy1N6i5evMh59uxZrkQiyeTz+c0bNmwwBXgZUFRWVlKfvyTsrAaKcPPmTXZ6enpOZWVlVkVFBfXLL7+0fvz4cW5lZWV2Xl4e/caNGyyNRoONHTvWztLSUl1cXPxcKBQ+Ly0tpS1YsMDC09NT6eXlJT927FjL+fv111+506dPry8pKaHOmDHDbtOmTRU1NTXZ8fHx+Tt37jS9fPlyh9dGZ+Lj41mPHz9mvXjxIquiouJ5eHi45NixY9yOlo2Li+MmJSXli8XizH79+jWuW7fODABg48aNvAcPHrDS09NzSkpKnjc2NpI7quEKDQ2VffPNN1V+fn7S9PT0PGI6hmF4bW1tdnl5edazZ8/0iBcIUVFR1sbGxprKysrswsLCbBKJhM+fP9/yz+zfn/FBghq1Wv3G6ivkw6qvryd3VLX4T9vmv5lSqcSampr+8S8OFAoF9rHahH+IY/Qx9+dT5u/vL3VxcVExmUzcx8dH1rdv3yY3NzcViUQCgUDQ/Pjx45a3t4MHD250cXFRsVgs3bRp0+rv3r1r8KZmML///rtBnz59moKDg+UYhsHUqVMbbGxsVOfOnWv39vy7776rffjwYX59fT35999/1y8vL6c2NDR0eE9xcHBQbtu2zWzDhg08EokE+fn5OZaWlpq2y+3Zs6cqPj6+qLq6mnzu3Dl2XV0dRSKRtGxTX19fGxUVJfH09FRi2OtbgTg4OChHjhwpBQAYMGCATCQSUXQ6HVy4cMHA19dX5u/vr6BSqfiyZctekMnkTg8Mj8fTREZGSgAAZs6cKcFxHO7evat36dIltqOjo3L8+PGNGIZBaGiorHfv3tK4uLgOa7amT59er6+vrzM3N9fw+fzmioqKt2r65u/vL+3Zs2czjUbD582bJ8rNzWUUFBTQoqKixE+fPmUVFBRQcRyHM2fOcCMjI9s9xF+5coXdo0cPmb+/v4JOp+OLFi1qaeaSkJDAAgBYsmSJiEKh4D4+Ps2DBw9u+P33399qcILevXtLieO4YMECUVFRET07O/uVADEuLo7j7e0tS09Pp1+4cEHf0dFR1dTURL53755efHy8voWFhWrUqFFNAABjx45tfPz4cS6LxerwJlZQUEDNz89nLFiwQESn03ELCwuNUCjM8fPzUwAAlJeX00JDQ51Gjx4tnjNnTqeBwowZM+pZLJbOwsJC4+rq2lxZWUktLy+npKen6y1evPgFnU7HfXx8mvv169fY0fr6+vq6mpqarLCwsKbU1FRGbGysAYvF0rV+pho8eHCDvb29mkQiQUBAgKy6upoKABAVFVV/6dIljkKhwOrq6siJiYnsyMjI1wY1169fNwgPD5e4urqqmEwmvnLlyrq6ujrqvXv39K5evarv7u4u79evnxwAYM6cOeK7d+8WUCgUPDU1NX/t2rV1QqGQ9uuvvxrgOA719fWvve7i4+P16XS6buHChfUUCgXv1auXIjQ0tPHChQstwchnn30msbCw0FCpVLxXr16yqqqqdjU1hoaGutra2swhQ4ZIU1JSGLGxsYYsFkvbusZ46NChDXZ2dmoSiQT+/v4yoinm/2PvPAOayrY2vNMLCQRCElogoVcBUQQRsCCiYh0VEVFBBR29ihWxYldsjF2kqIgO2FFRERXsBUSl994hhJKE1PP9YE5uxKDOjDPf3Ht5fhFO3fvsc3ZZa73r0aNH5GnTpnGZTKZEW1tb4uPjw/3aPY8fP76DRqNJKRSKzMbGRjB+/PgOJpMpUVFRkbHZbOGbN2+IBQUF2PLycvyGDRtaSCSSjM1mi319fTkpKSlqAAAwb948TmJiIgUAADIyMoh8Ph85bdq0rhs3bpCJRKJMTU1Neu3aNXJTUxPazMys5/r1678r3snIyEjE5XLR8+fP10tKSlLdtWtXU1RUVL2yfUePHt1lamoqQiAQwN3dXV4vKSkpqlOmTOlgs9lidXV16ZIlS9p+zz0EBQVx0Gg0RKfTpcOGDeuuqKjA8ng85OPHj1UdHBz4Dx48UHn27BnR3t5ekJqa+sMFSmD+ko7/3r17KjQazeqvOPf3IJPJwLp16xj/yxMrAwMDC8VByB+hsrISs23bNrkplMFgWPXtVP4ssbGxlEePHv3wYNWv0d3djYTdYf5KDh8+TJ06darBt/f8/2XXrl20OXPmKHVP+av55ZdfNCZNmsT6kefcvn07fe7cuV9YDv5XQSAQ8kG14sSjr080nU6XTwTQaDSkra0tVvwNQZB8/8GDBwvgv62srIQ8Hu+bKmNNTU1oKyurHsX/mZmZ9ShOLGDevHlDsLa2NrWysjI7fvy4pkQiQfS3oJKUlFQ9bdq09osXL2qYmZlZDB8+3EhZLMmjR49UzMzMzAcPHmwaHR1N7Xs+xfJ/C1NTU3k5cDicDAAApFIpoqKiAmtgYCCPHdDQ0JBSqdR+z2tpaSmAJ1BoNBpiMpmi6upqTENDA8bCwkKguK+FhYWgv4nd4MGD5feDxWIhZf7uyrC2tpYfZ2NjI0ShUFBbWxtKW1tbMnLkyM64uDj1lJQUEpFIlLm7u/P7Hl9bW4sxNjaWx5OYmZmJ4ElDQ0MDxsjIqAeDwcgbnZWVVU9nZ6e8DH3a42fnVmwrZmZmIhwOB/V1c2xsbMTU19djz58/r3H+/HmN+Ph49bFjx3aiUCiorKwMq/icAABAT0+v32dRVFSEw+PxMlNTU/nzYzAYEvj+KyoqcKNGjepKTEzU+FqskuKzwGAwkFQqBYWFhTgMBgMZGBjI3ylTU1OhsuMhCAIrV67UplAo1vPnz9fPysoiYrFYSLGuFOsGh8NBcPyKm5sbn06ni69cuaJ6/vx5irOzc7eyCb4izc3NGFtbW3lb09LSklCpVDGHw0GVl5fjzM3N5ddCIBAAPl9kZKSGpqam1cSJEw0fPHigisFgoG8tbNTX16NNTU17FBcNrKysehTbtY2NzWdlU9aWIQgCy5cv16FQKNYBAQHM7Oxs/G/tHvR3HriOGhoasBYWFvK6d3Bw+Ow964u2tra8/lAoFKSnpydW+A0A6H0PSCSS1NjYWN52bG1te7q7u1EQBIH58+dzi4uLCYWFhdhz586p+/j4tCORSFBfX49BIBAAbr/nz5/XoNFoEsVvSH8oxmWZm5uL7t+/XyqVSkFQUJC+pqam9Z49e5RaRC0tLT/7dsH1UlVVhTU0NJRf18rKSmn77A/FesLj8ZBEIpHHTr58+VIFLl9BQQHe1dW1W1ks4o/gv3I1s7OzE3nw4EEtieS7+6j/Oq5du1ZhaWn5uxplX27cuEFOS0uTuzvcvn27jM1mi792zO9l7969DGX++H8lubm5uHPnzv3Xqp38XgICArjbt29v+v+4to+PT+eBAweUrigN8PuZOXMmc9OmTXQAejv+rq4uFJPJlADQO2jm8/nyb35fRZxvWScUefPmjdwl59GjRyra2toiDQ0Nad/9EAiEfOBqYGAgevHihdytQiaTgbdv36rY2dl9MagICQnRcXd3725ra8tLTU2t9PLy6pLJZIi+gyYIgkBiYqLq2rVr2/Ly8oqLiooKampqsIquHjArVqzQnTFjRntzc3N+SkpKpZubG+9rgbmK965smzKMjY2Fim5Fubm5uObm5n4Dnj99+kSAr9He3o4qKirC29vb97DZbNGrV68+c0F58eIFycbG5qsDsN9LaWmpfJHq4cOHKhAEIczMzIQA9Fp/rl+/TklMTKTMnj37CysNAL2Tojdv3sgXpbKysuSqbEZGRqK8vDxiR0eHvM1lZGSQ4AG5kvb4mUqdotpceno6USQSIfoGmzOZTJGhoaEwOTm5Kjk5uermzZtVkyZN6rC1tRUaGBiIPnz4IG+nIpEIMW3aNP3+JMaNjIxEPT09SEV55w0bNjBu3bpFBgCAESNGdCUmJtZYW1sLgoKCdPurU2WYm5sLpVIpQnEBLyMjQ6mLUUpKCunSpUvU/Pz8wtzc3OKYmJg6FAoFfW8Q+dy5czlXrlyhXL9+nTJv3jylz00RJpMpevz4sfxecnJycC0tLZihQ4cK9PX1RVlZWfJ75nK5yKlTp+qXlJRgN2zYoJeUlFRRVlZWePny5RptbW0xPNDu7/0wNDQUffjwgagYoP/06VOStbX172rXN2/eJF+5ckW9qKioMCcnpyQ6OroeiUSC7xFgMDMzEzx9+lReJmWxWop8z3fRxMRE1N3djYLjWAAA4NGjRyQzMzMBAoEAFApFNn78eG5cXJx6cnIyJSgoiAMAAGw2WyQUChGJiYnVcBsODg5uGzduXHffa2CxWKinp0f+vijGGhUWFmLb2tpQV65cqWlpackLDw+v37Fjh/bvER5gs9mftYP79+/36wL3vX0Fm80Wo1AoyM/Prx0u36FDhxpmzpzJxeFwP0bhog9/+aSmvr4evXHjRrri/3bv3q1ZVFSEBaA3yLCoqAi7fv16xqJFi3Rev35NaGpqQq9fv54REhKilZ+fjwWg92UKCwujZ2Vl4RcvXqyzadMmemlpqVKpzoiICE0AAAgPD6fDD76yshITHh5OCwwM1IU/Uv0RGxtLCQwM1J0/f77umTNn1OFOJzExUTU9PZ144sQJDT8/P71t27bRlAVOwqSmpqosXrxYZ/HixTqwJj4EQWDbtm20lJQUeYOJiYmhnDt3Tg2AXteZ/fv3a86dO1cvKChI586dO/L9Dh48SP306RMuPDyctmDBAt2UlBQSn89HbN++nbZkyRIdxXwUGRkZKh0dHUgej4cMCwujFxUVYVeuXKkVEBCgqxhICUEQiImJkZf37NmzFAiCQGlpKfbu3btq1dXVODhA9fHjxyQej4cAoHdAcvfuXVJgYKBuWFgYXdEvdceOHbSioiLsxo0b6X5+fnrnz59XakqNjY2ltLW1oS9duiS31rx//x6/evVqLR8fH+aGDRsYsJJHZWUl5sCBA9SrV6+SFy1apJOXl4eDIAhcvHhRbcGCBbq7d+/WfPLkCRGuRwAAePfuHX7ZsmXaCxYs0L1+/ToZgF7XyOPHj1NFIhFyzZo1Wspcn5qbm1Fbt26lz549m7l8+XLtN2/eyOs1NDSUUVpail23bh3D399fr28A8NWrV8mBgYG6sP9+f20jPDycVlhYiA0LC6MHBgbqPnv2jMjhcFBhYWH0FStWaMNBjfAzevDggcrChQt1169fz4BVYTIyMohHjhz5LNfAlStXVOF7amtrQ23evJk+Z84cvYiICGp/SjPl5eUY+HqXL19WzcjIIB4/flzDz89PLzw8/KvluHjxotrixYt1/P399Y4eParxNfdE+Nnt3LmTBr+X1dXVmPfv3xMA6J1E37t3jxQaGsoICwuji8ViRHd3N/L48eMa8+fP142KilKHB0hnzpxRV+yMnj9/TlAM1lYkLS1NZfny5dqzZ89m7tixgwY/83fv3uFjY2MpJ06c0Fi2bJn2n82t8U/A1dWV9+uvv2r8+uuvqv/617+08Xi8zN7evgcAAExMTITR0dHUd+/e4aOjoymPHz/+wy4AKSkpavHx8WoPHjxQOXnyJG3hwoVKXRWoVKrkzZs3xJycHNzPP//M+fTpE2Hbtm20nJwcXFBQkA4Gg4G8vLy+6MC1tbXFDQ0NmPr6evTLly8JW7du1QKg9/uouB8CgQDXrl2jBAcH6xQWFmKrq6sxXV1dKAsLix4AANDQ0JDcvXuXXFNTg9bW1hbX1NRgGhsb0enp6cQ9e/YwRCJRv30glUqVPH/+XAXug76H1atXt3E4HLS/v79efHy82oIFC5hIJLLfQQCXy0WHhIRoffz4EbdkyRIda2trgaurKz8gIIArFAqRS5cu1c7JycFt3ryZXlFRgZs5c2bH994LAABoampKP3z4QMjMzFSah+Xhw4eqW7ZsoT9//pwQHh6uNWXKlHYKhSIDAICffvqpq6WlBXP79m21xYsXK3Vh8vPz49bX12O2b99Oy8zMxIeGhmrDZZ08eXKXjo6OKDAwUC87Oxt/8OBB6vPnz8m+vr5cAAAwMTHpiYmJob579w4fExNDefTo0Wft8enTp+QNGzYwXr58SdiyZYvW+PHjuQwG47OVyp9//rk1NTVV9eDBg9SSkhLs8uXLtSMiIhgaGhrSefPmdQgEAuSaNWu0ioqKsOvWrWM0NDRg+rPWmJmZiZydnbs3btyonZmZib98+bLq6dOnacOGDRMA8O+BXHR0dG1aWpoqLC7wPejp6Ul8fHza1q5dqxsbG0tZunSptuJkQRF9fX2xSCRCFBQU4BoaGtCbN2+mFxYWEhQHtF9j8eLF7U+fPiWXlJTgfXx8lLq4KRIcHNx65coVjaioKPU3b94QVq5cqTNkyBCeqampaNGiRe1VVVXY7du304qKirCrVq3SFgqFSB0dHYmqqqo0Ly8P39LSgoqJiaEkJydT4L6CTqdLampqsPfu3ftsYDxjxoxOKpUqCQwM1Pv48SNu3759mm/fvlWB28T3oq+vLxYKhcjCwkJsQ0MDOiwsjF5aWor/njpatGhR27Vr19QTEhLU7t69S4qLi/tTOY8AAMDY2Fg0evToznXr1uk8ffqUeP78ebWLFy9qzJ49W/7eLFy4sP3EiRN0NpsttLa2FgIAgK+vbwcej5ctWrRINzc3F5eQkKA2a9YstqJ1HcbKykpYVVWFPXXqlPrbt2/xK1eu1FG0gs6fP5+VkJCgVldXh66ursYymUyR4vZvERoa2pyamqoaGhrKOHHihMb+/fv7zd1Do9EkFRUVONjFtD+wWCzk6+vL2bdvHyM5OZmUmZmJnzVrlv7bt2+/OpH8M/wtk5pffvnls8o5c+YMDZ7UHD16lD5lyhQ2gUCQcTgctLe3t+HkyZMNIAgCTU1NGG9vb0MAAOByuagDBw5ozZw5k8VisUQlJSU4Nzc3I2UShJqamlIAek3HOBwOio+PV7OxsTGrqanBqqurSwMCAvS3bNlC73scAAAEBgbqHjx4kG5lZdVDo9EkoaGhuvAkKTk5WXXOnDkGKSkpZGtr6574+HjqwoULla7YnD59Wt3X15elrq4uVVFRkU2bNs0wLi6O8tusXerv72/Q1NSEfvDggcrKlSuZ8MBj+PDhRqmpqWRHR0c+BEFg8uTJRhkZGUQAAIiNjaVOnDjRsLu7G4nH46Hp06ezx44dy25oaMBgsVjIw8PDGF4BOXr0KL2urg7T3d2NPHjwoNaMGTMM8Hg8hEKhoPHjxxvl5ubiAABgwYIFukeOHKFbWVn1aGpqSteuXat36NAhKg6Hk5HJZCkWi4Vgt4wjR44wmpub0TKZDAwfPtxo3bp1OsbGxsJ3796pWFtbm1VVVWEAAODUqVO0iRMnsltbW9EsFksUHBysf+HChS86AHV1dSkajYYoFIqUTCZLMzIyiG5ubiZoNBpydHTkP3z4kDx27FhDAHrlDvfs2aO1fft2LS6XixKJRIgNGzYwNm7cqGNoaChKT08nTZ482RD2Ob979y5p7NixxjKZDDCZTPGSJUuY4eHhNAQCAX5zB4G0tLTESOTnr0BXVxfSxsbGrLi4GDdixAhebW0txt3d3QSetEVGRjImT57MEolECE1NTcns2bPZsBrM6dOn1YOCgvRpNJokOzubcOjQoX4/CidOnKB7e3uz0Wg0EAgEyEmTJhlOnDiR1dPTg+zs7ER6eXkZwvuOGTOGvXz5cj02my3Myckh2NnZmRYWFmKpVKo0NDRUT9EVYt26dToQBAEul4u0tbU1zczMJA4ZMkSQkJCg4ebmZqhs5TkjI0MFrrdbt26p+fr6Gty/f59sbW3dc+7cuX7beEhIiFZ4eLiWiYmJUE9PT7Rjxw7tzZs3K32vtm7dSl+5cqWevr6+uL6+Hu3i4mLS3d2NfPXqFeHy5cvqAABw//598oIFC/Q/fPhAqK6uxgIAgLe3N+vcuXMagwcPFly+fJkyd+5cJgAAXL58Wf3Vq1fyyeabN2+ICQkJX0xqYmNjKbNnz2ZRqVSJjY2N4MKFCxqwq9379+8JYWFhOnFxcRq1tbVYPB7/l6wc/Z3Mnz+fO2fOHM7OnTu1cnJyCNevX6+ALSi//PJLvaqqqnTWrFms+/fvkw8dOlQLu8CYmJgIFd2IjI2NRYq/+2739vbmnjp1SnP16tW6Pj4+7Tt37vwimB6AXh//mpoa7LFjx6j29vY9N27cqHj48KHq5MmT2W1tbei0tLQyZYPMXbt2NaqpqUldXFyMt2zZohUdHV3j7u7eVVRU9IX768mTJ+s0NTWl06ZNY61fv157x44d9XC8y7/+9a+W5ORktTt37pAjIiIaZDIZwtnZ2Xjv3r30X3/9tcrBwYFXUVGBodPpEjs7u8/cq4KDg9sKCgrwZ8+e1dDS0pIMGjRIAAAALBZLBE+aAABARUUFcnR07IZdc549e1by26KPalRUVC2JRJIquqwoMmjQID6Hw0FPnz6dBQAAd+7cqcDhcBCDwZCkpaWVFhcX4ydNmsTOysoi3rx5s2LIkCE9AADg4ODAo1AoUgwGAzk6OnYrrnpaWVkJmEym+Lf20C4SiRB79uz54r00NTUVbt68ueH169fE+fPnGwwaNEigKFuNwWCgSZMmca2trQUsFkvp/Zubm4uuX79e8ezZM5Kvr6+Bu7t799ixYzuIRKIMh8NBaWlp5b9ZSFgpKSmqZ8+erZ4yZUoXAABERkY2wO0xJSVFVbE9GhsbCzdu3Nj44cMHwty5cw3MzMx6Ll26VANAr3sU/CwmT57cHRMTU52YmKju5eXF5vP5yKSkpCosFgtpaWlJUlNTyzIzM4kTJkxgCwQC5Pnz52sAAMDa2lqgq6srAQAAW1tbAdzH3bx5s1JTU1Mya9Ys1q+//qp++fLlSi0tLYmenp4YdtsxMTER7d27ty4pKYkikUgQQ4YM4amqqsp+67f6fRYXLlyomzlzZntSUhLF3t6+Z9GiRa1aWlpf1KuNjY1w165d9Zs3b9YaM2aMoUQiQRw9erQG/nYPGjRIfu8AAKCnpydWtHTo6OhI7Ozs+N7e3v2uhuvp6YmtrKwEAACwZMmS9o0bNzacPHlS09/fX5/FYokePnxY/lsbEd2+fbv8wYMHqt7e3mwSiSQ7ffp0nYqKiuzUqVPVt2/fVnNycjJ+/vy5yqVLlyoJBIIMAABGjx7Nc3Bw4K9Zs0aHz+fL64hIJEKPHj0q6+zsRE2ZMoWdlpZGPnfuXJWXlxcPAADs7Oz4NBpNbvFlsVgiRfc3GAcHh57w8PD60NBQ7TFjxhgikUhw+PDhGqlUKq8jRfdZJpMpgsu7YMGCji1btjQeOnSItnnzZu0VK1Y0Dx48mNf3GgrPT24dtLS07FH8rbj96tWr1SYmJj0BAQHMU6dOaa5Zs6Y5LCxMHmPm5eXV7eLi0rVixYoW+H8UCkX25MmTsvb2drS3tzc7ISFBPSoqqtrR0fGLMltZWQkPHDhQd/ToUVpQUBDT19e3fdy4cR0EAkFmbm4uOn36dPWlS5coo0aNMiorK8OlpKRUAPD5t9zS0rJH0bWNwWDIv3vjx4/vTkhIqCwqKsIVFBTgzpw5U4PH42XweFqRCRMmdJuZmQnWrl2rAwAAjo6O3YoiIubm5j2wq2VUVFSdl5dXZ2hoqM7ixYv1PD09u/bv39+orL5/BAgIgj786JMmJyeTpk2bZiiVSj9lZmbi3d3dTXg8Xg68XV9f3+L48eM1kydP7iaTydabNm1q3LBhQyufz0dQKBSbdevWNe7evbtZJpMBLBY7KDs7u4hMJsvYbLbl6dOnq4ODg9sB6E2sNmbMmK7Dhw9/VkFcLheprq5u09TUlEun06WGhobms2bNat+3b18TAL2ZlJctW6bf2tqaSyaTP1taDgsLo8+aNasTnmTMnTtXTyKRIH799dcaPz8/vfT0dHJdXV0BAL0Dpm3btmnX1NQU9K0DLS0ty9WrVzetX7++DQAATpw4oXHw4EF6RUVFIQAAjB07loXD4aDs7Gzi2rVrm1atWsXhcDiorVu30nfv3t2kpqYmAwAAa2tr0/nz57etW7euzdLS0tTFxaX77Nmz9QAAwGQyLVxcXLphZRsWi2V+8ODBuhkzZnSRyWTrtLS0MhaLJdbS0rI6cOBA7dq1a9sAAMDCwsI0ODi4NSQkhLNhwwbGnDlzuHDOA19fXyYSiYQSEhJqjxw5onH16lXKixcvygEAAIPBDMrOzi7Kz8/H+fn5sZqbm/PU1dWlAABgY2NjMnToUH5sbGydtra25ZgxYzovXrxYCwAAs2bNYhIIBNn58+fr+taTiYmJ2e7duxtmzZrVmZycTKqpqcEuW7aMAwAAT58+JY4cOdJEKpV+hP/+9OlToY2NjbC7uxuppqZmfe/evTI4x4ClpaWpkZGR8Pbt21UODg7Gw4YN4508ebIBgF6VnhkzZrC5XG5uVlYW3tPT06izszO37/3k5+dj4+Li1CMiIpoQCAQQi8UIdXV166tXr5Z7eXnxcDjcoJ9//rn5yJEjjQD0ysY6ODjwDxw40KSjo2Oxdu3a5tWrV7cB0CsHiUajoUePHlX0vQ6NRrNaunRpy44dO5olEglCTU3NevHixS2RkZGNAACgoqJi8+jRo1Iul4ucMGGCcW1tbR7sy+zs7Gykr68vSkxMrBkyZIixj49P+7p169rS09OJPj4+rLq6uoLt27fTLl26pF5WVlYEQK+FikajWcXFxVVNmzatS/FeNm3aRM/JySEkJydXzZ49m/nixQsS3Kajo6MpO3fu1DpPYM4AACAASURBVKqqqirsW4YdO3bQPDw8uocPHy4AAICff/5Zu7KyEpeSklKpuJ9AIECoqqraJCUlVcDXXrNmjdb06dM7Xrx4QUxJSVFLT08vDw4O1nn27BkpPz+/GIBe6c85c+aw29racuFA2ZCQEO1jx47VT5kyhTVhwoQO+P06dOgQ9ebNm2rPnj0r37BhA6OwsBB38+bN6piYGAqJRJLBK5ZRUVHqe/bsYVRWVhaeOXNGfeXKlXqtra15JBLpb1HAKCwspFRWVqp5eXlV/R3X+ysYOnSosa+vbzvczgf4N2/fvsXfvXuXvH379hYAACguLsZaWVmZd3R05BCJxM8GmBEREdQbN25QXr16Vfb/c7ffZujQocbLli1rWbBgwe+yEA3wJStWrNBeuXJlq5GRkRiAXnldNze37q1bt7Z869jfg1gsRjCZTIvk5ORyZYPjAQZQRkJCgppEIgHz58/vAACA8+fPq+3fv58B98f/Kfwj3C0GDRrUAwAARCIRIpPJ0pEjR/IAAACJRILfLDgoMpksQyAQAF7lAQCAkSNHdn369OmrwfBCoRBRVVWFmzx5stwMO2XKlK7g4GBEfn4+DjYtw4SEhHBOnjypvmPHDnpOTg6hvr4e6+XlJf+gu7u7y69Pp9Mlylxzmpqa0E1NTZi4uDjq5cuXNQAAQCAQIKurq3ECgQBBIBCgCxcu1BobG1vY2tryV61axQGgN6h06dKlnO3bt9Pz8/PxeXl5hKamJoyi25BigKCmpqbYzc1N7rpBJBJl/QXrTp48WX7fGhoaEoFAgPytvG0nT57U2Lp1Kx4ur7e391dNwTk5OXgHBwcePKEBAICxY8d2vX79Wm6K9PT0lF+PSqVKvqWKAgAAkyZN6o6Pj1cLCAjQzcvLI5SWluIgCAJw+TEYDASbbV+9ekXA4/HQ6NGj5auro0aN6oJX+AsLCwlcLhdtb29PAqA36y2fz0fCFsL+sLS0FE2aNKlr2bJl2gUFBfiCggKCQCBACIVCuUlnwoQJX9Rlc3MzqqGhAavoCzty5Miu/mQ7Afh3ICMajYbU1dUlcLsHoPdZcjgcVG5uLs7KyoqvGOzp6enZefPmTQoAAPj7+3MuXLigsW7durZz586pz5o1qx2NRkOfPn0idHR0oO3t7eU68lKpFHz8+BHfd1LTF8U2TqPRpIplV2T58uWckydPqh86dIiWm5tLqK2txTo7O3/hSpSVlYVHIBBAMcHdoUOHGgEA4MWLF5+ZoRUDezMzMwmDBw/mwYHHGhoaUmUJEL/G3LlzO86ePavu5+enl5ubS6ioqMCRSCR5u9XT0xP9XROaAf77sbOzE06dOpWdmZlJ1NXVFd+/f19t2bJlzX0nNP90YmNjKdHR0dSuri6Un5/fN12YBvg2eDxe5unpaejp6dlZXFyMr6ysxF24cEGp1PYfZffu3ZqJiYnqNjY2/IEJzQC/BwcHB4Gjo6Pp/fv3VVEoFHTv3j21yMjI39Xf/hP4IZMaPp+P2Lt3L23jxo0tBAIBEolECCKRKB8owCZBmL5yq30lFrFYrNIOAIIg0NPTIx/gt7S0oFVVVb8wjSmCwWAgFAoFtba2ohSOQ8lkMqCjo/OZ6VcsFiOcnJyMTU1Ne2bPns2NjIxs2LlzJ621tVVeT4r32p+fNHz/GzZsaLKzs/vsw4LB9MZ2wYoyOTk5hLy8PJyVlZWwuLgY6+TkZDJz5sz2RYsWtY0aNYrv6enJVnQZ6ltX3+szqaqq+sXATSQSIYYNG2ZsaWnZM2vWLO7Ro0cbwsPD6f0p7MDg8XhZ333a2tpQNBpNPvBWdr1vERYWxoiPj9dYvnx5y+LFizkoFAo4OTmZwnEaOBxOBtc5BoOB4MkEPOCHZS0B6J0oBAYGtnp7e382gDc0NBR9+vRJqX85AL3PZebMmeylS5c2r1u3rsXd3Z2vo6NjqfgMlJWNRCLJ+raz/iYDMN/T7vF4PMTlcj97T1taWtBwXS9YsIC7ceNG3by8PFxycjIlIyOjFC7/4MGDeQcOHGhQPJbBYHz1fYHL8q19AABgxIgRRnQ6XeLn58eJiIhoOHHiBFXZIgMCgQBSqRTB4/EQKiq9897KykqMsnpUNGEjkcgvvhV5eXk4WGFGMWN1Z2en0rr28/PTy8/PJyxevLh17dq1rTk5ObjQ0FC5O91/g8vZ3822bdsaFVVyBvg3WCwWKikpKUpJSSGVlZVhL1++XOni4qI0CHrixIndv1dh6O/C1ta2Z8qUKR3z5s3j/h6//AH6JyIiosnHx6cjNTWVNGrUKJ6np2c3HL/0oxg6dKhARUVFtmjRot8VozLAAObm5qKSkpLCW7dukQUCAWLz5s3NfYU5/hP4ITE1RCIRio2NpcJBQx8+fCCwWCwhAL1xE0KhEAnHW2RmZuLb29v/8GQKzrgsFAoRT58+Jbu4uHzhC0kgECAEAgGEQiECiUQCe3t73rVr1+QxHYmJiWoMBkMMqwLBVFZWYiorK3GnT5+uCwgI4NJoNMnLly9JXwsmVYa6urrU2Ni458WLFyq2trZCW1tbYVpaGmn9+vXaaDQaKisrw6xevVovOjq6esGCBW1+fn76YrEYAVsfYmJi6mbMmNHV1dWFLC4u/q7gtz9CeXk5prq6GnfmzJm6gIAArqampuTFixck2DLymyzfFzM3d3d3XlFRESEvLw8HQK970aNHj1QdHBy+kPz8FjgcDoKtXc+ePVPx9fXlhIWFtQ4fPlwAiykoK7+jo6OARqOJo6Oj1QEAoLa2Fp2eni4P2ndwcOA9f/6cBNd/SUkJNjAwkIlCoQAOh1NaLgAASE9PV7G1teUfPHiwacKECd2ZmZn4zs5O1LfkB4lEImRlZSW4fv26KgC9QgoPHjz401rsrq6u/Pr6eiwsAiESiRAPHz5UHTx4MB+AXr3+CRMmcIODg3XZbLbQxsZGCAAAw4cP571+/ZpkaGgotrW1FWppaUl9fHxYlZWV/Sox/R5aWlpQhYWFhEOHDtUvXryYq6+vL8nIyCApLjrA2NraClVUVKS3b98mA9C7ODFmzBij1NTUrwYZuri48PPy8ghwAH9RURHWycnJpL29HaWqqipVVG56+vSpUovYq1evSCEhIS2rVq3i2Nvb9zx48IDcn2DCAN+Ht7d3t6Wl5X9cZ/d3oaKiIps5c2bnhg0bWvub0ADQ6yM/ceLELyyb/wQcHBx6QkNDWxVlWgf48zg4OPSEhYW1zpo1q/NHT2gAAMDT05MXEhLCGbA+D/BHYDAYkqCgoPaVK1dy/hMnNAD8QPezOXPmcGbPns02NzcX5OXlEc+cOVMFAABGRkbi4cOHd7m4uBjb2trya2trsUZGRn/YLHro0CHGvXv3VD99+kS0trbmr1q16gu/bhwOBzGZTKGHh4fRiRMnao8ePVrv7e1taGNjQ1RTU5O+f/9e5ebNm+V9jzMxMRE5Ojp2T5w4ke3k5MR7//49UVNTU6JoqfleTp48Wevj48N69+4dUUdHR/zixQtyYmJihUwmA35+fvqTJk3iTpkypcvT07Pb2tradMOGDYzt27c3r169Gri7uxuyWCzRhw8fCMbGxsLm5ua/xE3Q3Nxc5ODgwBs/fjx72LBhvPfv3xMZDIYYLq+NjU3P+/fvVVxdXQ2fPXsmr68RI0YIgoODmx0cHEw9PT07X716RbK0tBSsW7eutf+rKcfU1LQnNDRUp6WlBe3n59e+ceNG3cbGRkxLSwtaKpUiMBgMpEwMgkgkQmfPnq328/NjxcfHa+DxeBmLxRLi8XgZAL1B0V5eXoampqZmVlZWgoyMDHJEREQdDoeDjI2NRQgEAgwaNMjk6tWrVYp5CebNm8f9TbzCAIvFysrLy3FsNlv4PcpYcXFxNe7u7sbv378n1tfXY/qzOP4e7O3te1avXt04cuRIEw8Pj47MzEwVfX19kaIf9sKFCznjx483PnLkiNyVYcWKFZw7d+6o6uvrW3h4eHS+efOG5Ojo2O3k5PRDJGFpNJp09OjRnb6+vgYjRozozs7OJlAoFKmitQyGRCLJIiIi6pYvX868cuUKpa6uDqOvry+cPXt2Z0RERL/S2uPHj++eNWtWu6mpqfnYsWM73717p7Jq1apmLS0tib+/f7u/v79BVVUVtrW1Fd1fLhAfH5/2LVu2aL969YpYUlKCU1FRkfF4PJSipOgAAwwwwAADDPCfzw8VCqiqqsI8fvxYxcXFha84UBSJRIjbt2+TBAIBcsKECd0lJSVYY2NjEZVKlaampqo4OjoK4FWLtLQ0lSFDhsh/w9u5XC6KzWZbVlVV5WdkZBBZLJZ4xIgR/P5cwGpqatAvXrwgOjk5CVgslrilpQWVlpamgkQiwdixY3nKcioA0LuKnJ6eTqysrMSOHj2aRyaTZe/evcOPGzeOl5OTg0OhUBC8StnW1ob68OEDfsyYMUqVM5qamtBpaWkqeDxeNn78+G4ikQh1dHQgX7x4QXR1deXDIgVlZWWYsrIyrKenJ08oFCLu3r1LEolEiHHjxvG4XC6yqakJ7eTkJHj+/DnB0NBQDLtbvXz5ksBiseS/FbenpqaqODs7C/B4PPTw4UMVDw8PHjzIfvv2LZ5Op0tZLJYYgiDw+PFjlerqaszo0aN5JBJJ9lsgPQ8AAF6/fk2oqKjAzJw5systLY3o6uoqgN2m3r59i//w4QNh0KBBPY6OjgJYSezJkydEa2trIaxiUlhYiBWJRAhYjECRrq4uZGpqqoq+vr546NChPVVVVZiHDx+qmJiYiNzd3fkZGRlEExMTEZFIlL19+5YA3xcEQaCqqgqjqakpLSgowA4ZMqRnwYIFujo6OuK9e/c2AwBAR0cHMjU1lSQSiRATJ07sUlwZKyoqwmZmZhI8PT27FdVWAOgVmrh9+zaZTCbLxo8f311UVIRFIpHA2tpaeP/+fRUXFxcB/Ow+fvyIw+PxkJmZmQg+9s6dO2QtLS2Jubm5sLGxEQ0rFiny6NEjFTs7ux4qlSoFoDcPg42NjRD+3Xd7VlYWPisri2Bpadnj5OTUg0ajP0uoeP/+fZKbmxu/r0tbWlqaSkVFBWbUqFF8xcRgipSWlmK7urqQ9vb2PZ8+fcJhsVgIXqVpaWlB5ebm4uCM0n15/vw5oaioCOfu7s5nMBiS58+fE728vLqVvZdFRUXYZ8+eER0dHQVwW6iqqsI0Nzejhg4d2pOfn4+VSqUI2NoEk5GRQSwtLcVOnDixW0tLSz55ycnJwb169Ypob28vYLFY4oqKCoyjo2OPYnkA6HVZe/nyJWHw4ME9Dg4OPffu3SM5Ozvz+Xw+sry8HDNixIgfmvvja/w3CAUMMMAAAwwwwD+Rv0T97K+gsrISw2azLblcbg6sDDbA/zaOjo7GP/30E3fZsmWcd+/e4adNm2Z46dKlygkTJvwjXToGGOCvntTU1taiP3z4gPf29v4h74BAIEBcu3ZN1cfHp/Pvjq14+PChCpvNFvc3GQegd+ECdmtUxrhx475YtPgaycnJpCFDhvR8Kwv718jLy8O1tbWh3Nzcfrc77j+BlJQUkrW1tVBfX/+HJlr+T+Dq1avkUaNG8eHFpD/L06dPiVQqVfr/GTsFQRBAIBCgpqYG/f79e4Ki2NIfobm5GfX8+XPi9OnTv3keHo+HTEpKUm1ubkavWLGiDY/HQ78nye8/gYaGBvTr168J3xLY6Q+4/vv7/b8Eh8NBPXr0SGXmzJl/mfjIX56n5keBRqMhNpstRKH+1uTzA/yDOXjwYP3jx49JTCbTIiQkRHfPnj11AxOaAf6XefXqFTEkJOR3ZTv/Gq2trSh/f3+WsiS1fzVbtmzR+lpWawB6RTMOHjxIP3jwIH3v3r0Mf39/1p49exjw/+BYzu8lJCRETzGJ8R8hKSlJdd++fUrzNf0nsHbtWh04N9r/GosXL9YvKCj47mSr32Lfvn30pKSkPx1b+Seurwnn2Xv58iVxxYoVf/rb8PHjR/zSpUuZ37NvUFCQzpYtW7QzMzMJpaWl2LFjx7L/7PX/bt6+fUv43vL2JSYmhrJ+/Xp5vjoPDw92fn7+F7m2/lcoLi7GLly4UP+vvMY/QtL5e9DT05OUl5d/kStjgP9d3Nzc+G5ubpX/3/cxwAAD/P9gbGws+vDhQwkAvVYqJpNpdfPmzUpF9+cBBvhf5fHjxyRXV1el7vF/B9nZ2cSwsLCmZcuWca5evUquqKj4YRPG/wQyMjJIiikEFMWMBvhr+I+x1AwwwAADDPD9iMVixNy5c/XCwsLoAPQqRq5atUrL3NzczMbGxmTv3r2aEASBtrY2lLOzs1F1dbXcqnH//n0VPz8/Pfh3dHQ0xdLS0tTe3t7k3LlzciXJ9vZ21P79+zUdHByM7ezsTA4cOECF5c+FQiFi3bp1DDs7OxMDAwPzcePGsXJzc3EAAJCYmKgaGhrKmDp1qv7gwYONa2pq0Lm5ubgpU6YYGBsbm/3888/aYrH4h/hoiMViRFRUlPro0aPZ5ubmZiEhIVoCgeCb525sbERv376dNmjQIBMHBwfjqKgodXibUChEnDp1St3Nzc3Q0tLSdP369QxlqnptbW2o8ePHsxSPVSQqKkrd2dnZiMlkWjg7Oxtdv36dDEBvnOWkSZMMtm7dSjc3Nze7e/cuqaurC3no0CHqsGHDjGxsbEx27dqlCcvd79y5k3bw4EG56MazZ8+I06ZN0weg16UuJCREKzQ0lGFqampmb29vfOvWLfng6t27d/iJEycamJiYmK1Zs0ZLJpMprZuAgADduLg4Cvybz+cjRowYYdjY2Ijm8XjIyMhIDWdnZyNra2vTbdu20WCFyf3792vu2bNHEz7u7du3eG9vb4P+6n3v3r2aQ4YMMXZ0dDTev3+//Lh79+6RRo4caaivr29hb29vHBkZqQFvc3Z2Nrpx4wbZycnJyMjIyCwkJEQLrpu+ZGRkED08PNgGBgbmdnZ2Jrt27dJUtt+JEyc0Bg0aZGJoaGg+Y8YMZm1trXwROCkpSXXy5MkGRkZGZvPnz9dtaWn5pgtJdnY2fsSIEYbPnz8nANAbEzh+/HgWi8UyHzVqFPvly5dyCyGHw0EtWLBA18jIyGzIkCHGivUeFBSkc/z4cY1Ro0axLSwsTFevXq2lTM3z8OHD1MzMTJWzZ89qbt++nQYAABAEIXbs2EEzNzc3c3R0NIbbGwC9ccgzZ85kstlsc2dnZyNYafZbpKenE38TNzL39vY2gHPBzZo1i1lZWYk7cuQIbfny5dqbNm3Sqa+vxzo5ORn1PcejR49UgoKCdLZt20YzNzc3c3V1NczLy8PB9zp9+nT9/Px8+YQoOTmZNGPGDKaRkZG5j4+P/NlkZmbiJ0yYwFI899ixY1mfPn3CAQDA2bNnKXZ2diZsNtt86tSp+opqoBcvXlRzdHQ0NjQ0NJ87d65ec3Oz/JlCEAQ2bdpENzY2NnN2djZ68uQJEYBe99xhw4YZtbW1yfddsmSJTmJiouqFCxfUHjx4oHrjxg31FStWaM+aNYspk8kQc+bM0X/06JEKBEHgwoULal5eXiwTExOzoKAgnY6ODiQAANy4cYO8Zs0arXXr1snf2Tt37ii1Wh8+fJgaHh5OmzlzJtPY2NjM399fr6mpCa1Yr4GBgbo2NjYm2dnZeA6HgwoICNA1MjIyc3BwMI6JiZG3rZcvXxJGjhxpyGQyLVxdXQ1hhVIIgsDq1au1TE1NzSwsLEyXLl2qDYvtSCQSxNatW+nW1tamFhYWpmFhYXTFb/fhw4ep9vb2JkOHDjV++PDhVy3vP4KBSc0AAwwwwH8ZYrEYMXXqVP26ujoMrJS3aNEi3fT0dPLp06drtm7d2hQdHU3duXMnDY4fiI2NlXdup0+fprJYLLm1IykpSf3MmTO18+bNa1uyZIk+3KnPnj2beePGDbW9e/c2rFixoiUyMpIeHh5OAwCAdevWaT148ED15MmTtYmJiVV8Ph+5cuVKHQAAqK2txURGRjKYTKZ47ty57erq6rKpU6eyyGSy9NKlS1UCgQD5/v37r0p+fy9hYWH0/fv3MxYuXMg5dOhQ3ZMnT8hz5sz5qjuJTCYDkyZNYj179ox0/PjxusDAQE5YWJjOyZMn1QEAYNWqVVqRkZH05cuXt+7Zs6fhzp07agEBAZ+59nA4HNTo0aMNtbW1xUFBQe19r3H9+nXymjVrdDdt2tR0//79chsbG0FAQICBRCJB8Hg85IMHD9Rev35NXLFiRbO5ublw/vz5egkJCerbtm1rCg0NbY6OjtZcu3atFgC9Yh9lZWXyQV9bWxsqOzubCEBv/q6TJ0/S6+rqMBcvXqwaNWpU97x58wz4fD6Cw+Ggpk+fztbV1RVfvHixura2FlNUVKQ0j5eRkZHw5MmT8glAYmKiGo/HQ2lpaUkWLVqkGxcXRw0LC2vavHlz48WLF6krV66U35ui/DqHw0G9f/9eqXvbjh07aNHR0dSNGzc2HT16tO7YsWO0K1euqBYXF2MnT55s6Ofnx3n48GHZzJkzuatXr2aWlZVhAADg7du3pK1bt2pt3Lix6fDhw/WxsbGaFy9eVOt7/sbGRvS4ceOMJ0yY0Pnw4cPyRYsWtW3ZskX33bt3n5U5NzcXFxoaqhsREVGfmppaLhAIkIsWLdIDoHciumzZMua4ceO64uLiampqarCenp6GirnM+vLp0yecl5eXoa+vL3fEiBGC9vZ21MiRI42NjIyEd+/erRg+fDhv3LhxRvAg29vbm1VXV4dJTEysWrRoUdv69et1YTe23NxcQlhYmM7s2bO5cXFxNQ8fPiTDda2Ir69vh4WFhWDy5MnchQsXtgMAQE1NDba8vBybkJBQ5ebm1uXr68sWCAQIiUSC8PDwMAIAgFu3blVMnz6dO3/+fINnz5591Q2xsLAQ6+XlZTxu3LjOO3fuVGhra4vd3d2Nu7u7kTt37myi0+niBQsWtIWEhLQFBwe3ampqSqKior5I6Nja2oo6d+6cZnV1NTY+Pr6KQCDIXFxcTEpLS3Hx8fFVEokEcfDgQRoAAFy7do3s7+/PcnJy4sfHx1fxeDzkyJEjjUQiEYLL5aKysrI+u+esrCwVLpeLKisrw6xYsYK5a9euhrS0tDIEAgEWLFjA/K3M5KVLlzKDgoJar1y5UsnlclETJkyQu8o1NzdjPn78SEhKSqoaPnw4b+LEiUa1tbVomUyGePv2LUkx5UNeXh6+trYWM378+G4nJyeeu7t71+rVq1t37tzZhEAgoPDw8EZHR0dBRESEZlhYmM6MGTO4p06dqs3NzSVMmjSJBbfTY8eO0ZuamjAXL16scnNz6/b39zdQllqivLwcu3PnTh0jIyNRcnJyBYfDQU2bNs0Artfz589rikQiRGBgYJuJiYloypQpBjU1NdjExMSq4ODgto0bN+pcvnxZFQAA/P399d3c3LpfvHhROnHixM6ffvqJ3d3djYyNjaXcunVLLSEhoerXX3+tysjIIO/cuZMGAAAbNmygX758WT0iIqL+8OHD9Xfu3FELCQnRAqB3orh3716tFStWtGzcuLHp3LlzGn3v/0fzH+N+NsAAAwwwwLeRSqWI6dOn63M4HHR6eno5DoeD+Hw+4tKlSxpXr16tcHR0FADQq8546NAh+tatW1vmzZvHOXbsGC08PLylo6MDmZaWphYZGSlP3Lp58+YmV1dXvqurK//mzZuU6OhoDSMjI3Fqaqpaenp6ibu7Ox8AAMrKyrC/rQy3zJ49m7ts2bI2MzMzEZfLRTo5OfGSk5PlEycKhSI5duxYAwAA3L17l1RTU4P7+PFjiYqKiszOzq4+MTHxh3SAcXFxmps2bWr08/PrAACAnp6exhkzZhi2tLTU9Sci8O7dO0JmZqZKUVFRgampqcjNzY3/4cMH/KlTpzR//vnn9vPnz2sePny4dtasWZ0A9CZ/DQgIYEVFRdUD0KvqOHr0aENra2tBbGxsnbJr2NjYCO/du1c2YsQIgUgkQnh5eXWdPXuW1t7ejgSgd2IaGRlZb2lpKeJyucgbN26o3759uwyOG6ytrcXs3btX6/Dhw43fqgOZTAaOHDnSQKPRpCYmJi1Hjhxh1NbWYt6+fUvgcrmokydPNqDRaOjMmTN1165dU2pVWrRoEXfnzp06JSUlWBMTE9HFixfV58yZw+Hz+YikpCSNxMTE8smTJ3cD0BtcvWnTJt3jx483KDtXf5w/f15j4cKFbXAQemJiYiUAvQmPb9++Xebl5cWTyWTAy8ure8eOHbLy8nKskZGRGAAA/P39OfD1HR0deXl5eXgAQIfi+TEYDHT16tVyb2/vbgiCgFAo5Kmrq0vKy8uxQ4cOlatUSqVSIBaLEUVFRTh7e3thYmJijUTSqx1x5swZ6owZMzjLli3jAADA8ePH66ysrCyePn1KhN8DRYqLi/EeHh60jRs3NsLHxMXFUQgEgmz//v1NCAQC2rRpU8vjx4/JUVFR6jNmzOh88+YN6ePHj4WGhoYiS0tLYUFBAe706dNUuL2NGjWqKzg4uB0AAFasWNGyfv163RMnTnxW19ra2hIVFRUZg8GQ6OnpSQDoTXcRGxtbh0QigYWFhfDYsWOMwsJCXE1NDbqmpgb75MmTMgqFIjU2NuZkZWURT548SXV1de1X8OLYsWNUOzs7XkhISBsAAPzyyy8N9+7dU0tKSlINDAzkYrFYSE9PT2xsbCzS19cXYbFYmTIVVAB6rQFRUVH1GAwGmjdvXvuTJ09UIyMjGzQ0NKQ//fQTd+fOnVoAAHDq1ClNLy+vjrVr17YBAEBMTEydjo6OVXJyMulruX+kUikCfqYODg49Fy9erIWtq8eOHdOcOnUqd86cOR0AABAVFVXHYrEsMzMz5ZPdkydP1uvr64sHDx7cmJCQoHHhwgXKypUrOf1dj0ajSdXU1KQkEknKYrHEAPQmojY1NRWRyWRZdHQ0w5gC2gAAIABJREFUdd68eW1wolQ8Hl/v6upqmpOTg4PrAy4/i8VqOXr0KKO2thYNt3dFdHV1Rfv27WsCAIADBw40WFlZWRQWFmIB6H334+Li6jAYDPTp0yfcy5cvye/fvy80MTERWVpaCgsLC3GnT5/W9PX17ZRKpYiqqipMR0cHcsOGDa1z587lkkgk2W8LLaiysjKst7d397Nnz8oIBIIMAACio6Npe/furRs5ciQPAAC2bt3aFBgYqH/ixImGc+fOaUyaNIkbEBDABQCA4uLitt27d38xAf+RDFhqfhCJiYmqPj4+Slf/vL29DeBEklVVVZg3b9784UDUK1euqE6dOlVpoFVTUxPawsLCVCgUIl6/fk1wdXU1/KPXUcaTJ0+IHh4e/6hAv4SEBDU2m23OYDAs+3M3+BZTpkwxSE5O/qFm0aamJjQcbJuenk50c3P7Ic/i6dOnxMbGxr91MUImkwFFN4UB/tlUVlbiCgoK8OXl5Tgej4cEAICSkhKsTCZDLF68WN/AwMDSwMDAcvv27doCgQAJQRDw9/fvqKmpwWZlZeEvXrxIsbe35yl2xJ6ennIBDmdnZ15dXR22qKgISyAQZIoqXx4eHt1NTU0YmUwGqFSqNDQ0VMvAwMDczMzM/N69e2pS6b/nELq6unJLUG5uLt7MzEwuF4/FYiF7e/s/HQvQ1dWF5HA4aMX7HzduHA+BQICKiop+RQSKi4uxOjo6IsXYnNGjR3fX19djGxoa0Hw+Hzlu3LjPzimTyQC80v78+XNyd3c3Mj8/n9Dfd0lHR0cSHx+vbmFhYaqlpWW5f/9+OgC9gy94HxMTEzF8P0gkEho7dqy8Tjw8PLo7OztR3yPiYGxsLJfYV1NTkwLQm2ohPz8fN2jQID4sEU+hUGSWlpZKJc61tLQko0eP7oyNjaX8pghFCgwM5JaWlmIhCALjxo2T39vYsWN5AoEA+XtyrAmFQkRlZSUeHhwBAICLi4vAxcVFwGAwJC9evFAZNGiQCZVKtQoKCtIDACAU29OoUaPkx5FIJKkyd0AqlSrNzc3F29vbm1CpVKt58+bpi8ViRF/3LVtbW+Hu3bvrjhw5QtfR0bH08PBgv3z5kghAr7Vj9OjR8mtZWlqK6HS6uL/ExleuXFEnEomyjx8/yvv90tJSbGtrK4bFYlnA72NpaSm+tbUVXVxcjAUAQKNGjTKGt126dIna2dkpd3Fyd3eXt72RI0fyuVwu+ntyqdFoNDGceoFIJEJEIlHK4/EQJSUlOLFYjLC1tTWDr/no0SNVLpf7Vbe68vJyXE5ODhE+xsDAwFIoFCL/SB9Fp9PFsMIimUyWaWtri+HUG3g8HoJdmqqrq7EjR46Ul5/BYEhMTEx6qqqqvhqvY2pqKjp8+HDtiRMnaHp6elYjR440TE9PJwIAQGVlJfbWrVsUuAy2trZmampqUlhoRF9f/zM1QEdHR15NTc2fSmRdU1ODVUwH4uLiIiASiTL4u2RiYtIDlx+erPXnkuvi4iKvD0tLS5GGhobk06dPeAAAYDAY8notKirCAQAgDw8PeduKj4+nwt+QCxcuVBcUFBDs7OzMDQ0NzWNjY9UhCAKBgYHcn376qX358uVMTU1NK19fX2Z5eTm2paUF1dHRgdq0aZMOfL6ff/6ZicfjoebmZlRJSQnO2dlZXsYxY8b85UJOA5OaH0RbWxuqoqJCqaqFu7t7t56enhgAAPz8/JivXr36w5MaDoeDKi0tVeoegMfjZRMmTOhEoVCgq6sLWVxcrHS/P0pHRwdK0Y3gn8CuXbsYEyZM6Hj58mUJ/LH+vbi5uXUzmcwfmjk7ODhY58GDByQAeuvtRz0LDw8PY0X/3b+D8+fPU3bs2PGXrq4M8OPQ1dUVFRQUFBsaGgqXLFmiAwAADAZDCgAAN2/eLG9paclraWnJq6ysLPjw4UMxAoEAJBJJNmnSJO6FCxcoiYmJFH9/f7m7FARBoLa2Vt6B5+bm4rW1tcU6OjoSgUCAVFSLysrKIujr64uQSCSYPn06C4/HQ6mpqeVNTU35gYGBbYrxGmj0v8c9hoaGooqKCpxip11ZWfmnvzVkMllGIBBk79+/l79/7969wyMQCGBhYdGvmIC2trbktyTA8nctOzubwGazhZqamlIUCgVlZWV9dk4MBgOZmJiIAADA1dW1Kzs7u6S1tRW9Y8cOmrJrhISEaL169UolLi6uprm5OT86OroWAABgiwAAvZYF+H5kMhkiOztbfs2srCwCjUYTk8lkGRKJBEKhUP4B7DuoRKFQSn2j2Gy2qKSkRH5OmUwGampq+h0cBgQEcK5du6YeHx+vNmrUqE4qlSrV1taWQBAEFOsjMzMTT6FQJAwGQ4JCoYDiBKOhoUHpYBCHw0FEIlGqqA71+vVrwo0bN8iRkZEa0dHRmgcOHKhvbGzMf/36dZlMJvtsAvg9yqjnz59Xi4iIYISHhzfW1tbmZ2dnl2AwGEhxcgRA7+DRx8eno7KysvDNmzfFpqamwpkzZ7KFQiGCSqVKPnz4IC9rQ0MDurW1FWNhYaHUAvGvf/2rOTk5ueLy5csa9+/fVwEAAE1NTam+vr4QfhdbWlrycnJyio4cOdJIo9GkSCQS5OTkFMHbiouLCx88eFABn7O0tFT+jN6/f48nkUhSxRxe/YFEIpW2AxqNJiESibLq6up8+Jr5+fmFly9frv7a+TQ1NSXDhw/vUixHdnZ20Zo1a75Iiv4tFHOvAQAAAoFQeq+ampryATsAvbLRlZWVOAsLCyEKhYIUvyEikQjR0dGBAkDukttVXl5e+O7du6JBgwYJZs+eze7u7kZqaGhI58+f36ZYjszMzOIpU6Z0AwBAa2srRtG9MD8/H6+rqyuG61MxRu97k7X3bUcFBQVYPp+PhPMg9q2Pr6EowFBTU4PmcDho+Fuk+O7T6XQJAoEAHz9+lLetkpKSgocPH1YAAIC+vr747du3pTU1NXnLli1r2b17t/aNGzfIIpEIsXXr1pbm5ua8W7dulYtEIqS/vz9TXV1dhsFgoNOnT9fA5/vtvSqi0+lSPT09UW5urmIZ//Lx4w+Z1FRUVHxmfaisrMTAwXAA9KrSvH37Fg9A70czLS1N5dSpU+rJyclyX8SPHz/i4CBSmMzMTHx/qx95eXm42NhYSnx8vJpigOu7d+/wDQ0N6KSkJFXFj2xlZSUmJiaGAgeMAdD7MsAfGZinT58S4QCxtLQ0FT6fj3j48KFKdHQ0pe/KHofDQV28eFHt6dOnX/U7dXJyEjAYDGlubi6uvb0dXVRUhINNgzBFRUVYxY63uLgYC9cZAL11rNihNTc3o86fP692//59FfglxuPx0JgxY7r768DS09OJUVFR6orXUUZXVxcyOTmZdOrUKXV4JUMRHo+HvHfvHgl+yfl8PiIlJYUEd1xisRihuP3Tp0+4mJgYSkJCglp9fT0agN6OAPbLh6mursbAZW5sbETHxcVREhIS1PpbgXry5AmxubkZQ6VSpQKBAAlAb+DyzZs3yadPn1ZX5g/88eNH3Llz59QUO/1hw4bxtbW1JQD0Jnvl8/mI1NRUlejoaErf9tfR0YG8fPmy6oMHD1Q4HA5K2TVKSkqwzc3NmMrKSuzHjx/l7Y3L5SITEhLUkpOTSX0DlYuKirDR0dGUlJQUkrKgTwB6g3+lUil4/vw5EQ4EbGtrQ12/fp18+vRpdcVA09raWvT79+/xWVlZ+GvXrpHhZ1NWVoaJiYmh5OXl4fLz87G/rQoCAHrbVEJCgtqvv/6qyuVykQD0toWcnBw8nCRV2X0N8M8Cj8fLMBgMFBMTU3P79m3K9evXyVpaWhJ7e3teREQEncvlIiUSCcLPz08vODhYHgeycOHC9uvXr6vn5uYSYFctmN27d9O6u7uRmZmZ+IyMDPL06dM7LCwshKampj0HDx6k8Xg8ZE1NDfrSpUvqrq6u3QD0TuZdXV15ZmZmoq6uLmR8fLyGMp9wAABwd3fnodFo6Pjx4+oAAHD58mXV+vp6edvMycnB3bt37w9ZUz09PTtiYmKojY2N6I6ODuSxY8c0Bw0axIMT6Cpj+PDhfAaDId63bx9NJBIhiouLsTdu3KC4u7t3YzAYaPTo0Z1nzpyhtrS0oNrb21GnTp2iDhkyRJ7gmEQiychksuzYsWO1+/bt04JdShRpb29HmZub9zg5OQnQaDR0+PBhTQAAgL9lijCZTImdnR0/MjJSs6OjA9nQ0PB/7N13eBTV+gfw78z2lt1sym56g3QIoQSIIaEFQq8GKQpIUwERgQsXEJEiooBKb14uIEiRGoJSlBqaQOgtkE4qSTabzfad+f0RNr8IAQKioPd8nifPg2Z25uzsZmbec97zHu769euV9h5atVpt+e2338Qmk4kyGAzU999/X2sK2aPi4+Mr9Xo9xz4RffXq1Y4ajeaJD2W9e/eu0Gg0nFWrVjkPHjy4DKhKs4mKitItXrzY2b5Y9Lp165yio6Or23b+/HmJXq+nTCYTtXHjxie2rV27dtoffvjBsbS0lGMwGKhx48a5Z2Vl8UpLS7lqtdrcoUOHSoFAwC5cuNDJYrFQdSn4UFNJSQnX0dHR1q1btwqxWMyuXbtWUVZWxjUajb8752fPnhWGhYUFZ2Vl8Zo2bWrs27evhqZplmEYdO7cWbtjxw7HtLQ0vtlspubPn+/s5ORkiYyMrDWocXBwsDVs2NA0fvz4wpEjR3rrdDq6Z8+e2vT0dMH69evlQNX9PSQkJOjgwYOSFi1aGFxcXCyzZ892sX+ebdu29Zs7d251cHzw4EF5VlYWT6PR0P/5z3+U7dq109a29olMJmOKi4u5T5vvAwAdOnSoZFkW8+fPd7ZarZRGo6GbN29ef82aNU/9HvXs2bP86NGjDvbnhJSUFFFQUFBIbWWL5XI5U1FRwXnSNaCuunbtWr5v3z7F1atXBVarlfrqq6+c+Hw+07JlS4OHh4e1vLycYy/LvmTJEqW9I+Xy5cuCsLCwoLS0NH7jxo2Nb731loaiKJZlWXTp0qV8+/btjtevXxcAVemBTZo0CbSngur1enr27NkuVquV+vHHH2VZWVmC3r17a0UiEevg4GCzd2AeOnRIcu/evernK5lMZnvw4EH1+ZdKpUxBQQGXZVkkJCRoN23a5JiVlcXT6/XUggULXHx8fExPW5frSVJTUyVnz54VWa1WatGiRc5+fn6miIiIxxb9joqKMqjVasusWbNcDQYDZTAYqPbt2/vPmjXLxWQyUa1ataq3Zs0ahbu7u3X48OFl9sptq1evVrRp08bfYDDQHTt2rLRf47lcLtu2bVvtkiVLnIuKijgsy2L06NFuiYmJPgDQqVMn7b59+xQZGRk8jUZDr1+//k+fU/NSgpobN24IunbtWp1eM336dFWnTp0C7A9ns2fPdl2/fr2jXq+nmjZtWu+jjz7yOHz4sOy9997zatKkSX2WZXHkyBHJm2++WV0RxWq1Up06dQqoWXHEbsqUKap27doF7Nu3z2HRokWuISEhwfagauLEie5du3b1HT9+vMf48ePdDQYD1bp1a/9mzZoFbtu2TREVFRVkn8SUkZHB69at2+8qcbz77rtex44dkwBAYmKib0JCgt+ECRPc161bp2zQoEGwPccyNTVV6O3tHbp48WKXwYMHe3/99ddPXJdg5MiRnocPH5b8+uuvksLCQl5KSorUfgy706dPi/r161f9/seNG+fes2fP6lSvSZMmqXft2uUAVE38jIuLC9i6davjoEGDfHv06OEDVD2UdunSJcBoNP7uosEwDOLj43379evnu3//fllMTEz9Dz/80K22tl69elUQGhoa9NVXX7kmJyc79OjRw3/w4MG/mwDL4/HYxMREX/tD9J49e2RdunQJ+OWXXyQAcODAAcm4ceM8KIrCuHHj1B07dgxITk52mD9/vmtQUFDwlStXBEajkYqPj69XM1D8+OOP1du3b5enpqYKQ0JCgrZv367YtGmTY1hYWFDNINnu4XeKPnDggOyXX36RnD17VhQWFhb4zTffuOzZs0feuXNn/zFjxlS/z8TERK82bdrUS0pKkkdERAQuXrxYCQDvvfee14EDByQA0KdPH7+EhAS/yZMnu3/33XdODRo0CLIHJhcuXBB6enqGLlmyxGXUqFFeMTExAcOGDXss5fDUqVOizMxM/sWLFyX2i51Op+PExMTU27Rpk+N7773n1bp1a397WsqXX37p1KRJk6A9e/bIR44c6dWsWbMAexWUmjZv3ixnWZbaunWr4u7du7zjx4+Lw8LCgpYtW+a8a9cueXx8fL1JkyapACApKUk2aNAg786dO/t/8MEHXvfv3+fOmTPHOTw8PHj79u2KmJiYej169PBbuXKlEqgK4IODg4NXrFjhNH/+fNfg4ODg8+fPCwsKCrhHjhyRlpaWcr/77rs//YJEvDyhoaHmSZMmFY4ePdqrrKyMs3nz5uycnBy+p6dnmIeHR0hJSQl3xYoV1fM92rVrV8nj8diOHTtq7Wlg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FW3cuLHt7rvvbm1qahLGjx8/cOjQobHJkyd333rrrXk7duzo/PWvf9322GOPZY4bNy6akpJi8jxPU1JSDL/fb3700UeuaDTKPfLII80A8PTTT/s/+OADNxM0DAaDcWiOi6gxQACOJBa7nsdoz80ggMkDqmAgqzQXGmLYuWUzulsO4sAWIFXT4eJ51O/9DLt370bzwYOIaSp0wsEUBIiyA2leN4gkg/ICDEKgUQqDElCOA89zECggggLUsgE1EYlEsGXLFjQ1NWHEiBGorKyE3++Hw+EAIQSaptkpaF+3qLn99ttbL7744kDfxysqKtTU1FTj448/3vPGG2+4W1tbhYULFx7Mzc21Bc2rr766t6qqSgEShfNr1qzZ09DQIFopdBbz5s3rmjp1qr0zOHv27ND3v//9SH/PDx06VNm+ffuuVatWeVRVJUuWLGnIzs7WASAlJcXcunXr7tdff93j8/nMc889N/zee++5UlJSTFEU6Z49e3atX7/e8cknnzhuvfXW1urqagUAqqurlR07dthjPvnkk42WffLs2bNDkyZNirhcLvO9995z/e53v2u2Ui4A4J133tm3fPlyj6Io3Lnnnhves2ePVFZWpgLAH/7wh+ZJkyaFrYLeTZs27V63bp0zPz9fHzNmTPzTTz/d+dZbb7ldLpc5adKkiFW3c9VVV3Ump7GVl5erK1assAXPSy+9tH/IkCGsaR/jlCdRh8j1iAyAgsCggNvtoeedd26QJxxNyBbLWCXRZ4YQ65awbQEIoZQSXdcJpSaxrJqtY4iiAI4jJi8IEEQBAsdR06QQOCTUDEhSzWMiavP5SmIdEUTvia4nBM6xz92EEMydO7fz+eefT7VEzdNPP502b968Duu877zzztzbbrvt4PXXX98JJOoW77zzzpy+ombBggU5V199ddv999/fAgCDBw9Wrr766qKbb765/eGHH073+/3G66+/XgckjFleeuklf/L7zz///O758+cb5557buj000+PXXLJJZ033XRT/h//+MdmQgief/75tCuuuKJXijKDwWAwekMopR9/1UEUihwdyBYJICLhUAYAOgAVJnRiQjM1CMSEoMTRsG0bmj/ZAeVAKyRFA7ojaNi5C41NTVBAkZqfi9TCAsjpqaBeD1RJhMoLMGUJhiBCJwQaBQyaSE+QCQdO16Grn9fV8zwPRVFQX18P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nsegQSUQRQGiaNOl4MJPIk0xpDSiTqQ4joMoCbDZ2IatpmY/1q79N8aMKYUkCRAEm0lkRFGKqA/o2fkKgoCSkpIj3LSGDx+OSy65BOvWrQPAPut2ux12ux0PP/wwHA4HNmzYgGuuuQaJiYmmdGzQoEFRkrXc3FxTyjVmzBg0NjZi1apVR8yjY6PE5ORkc33edNNNqK6uxvTp0/H555/jjjvuMOuHU1NTo9any+Uy1+fAgQMxdepUrF69Gi+//PJR1+c111yD0047DS+88AKWL1+OG2+8EdnZ2SgoKMCdd96JdevWYfbs2dA0Dffddx9sNhucTmen69NoPHrxxRfjq6++wubNm4+YZ0ZGBu655x58++23eOyxx9De3o4HHngALpcLDofDnOc555yD0tJSvPHGG/jHP/6BvLy8Lo1QTnaEs5JMagbADELwBnnhIjJeNGzzzPOcTnDC9te9raaGo5R+1w3jpAHoMT83I2MiyzJqa2uxdetW7N27F6FQCLGxsabeMiUlBYmJiYiJiYHdbjcXfWRTTQORmZpI5xbDzaWpqQk1NTUIBALIz89HUVEREhISorScPM8fAnDMcMiFF16Y17dvX/WTTz6Jv//+++v+9Kc/NQPA7Nmzk+bOnZtSWVm5g2P5epSXlxdcdNFF7RMmTGgfNWrUgC1btmzPy8tTAOAvf/lL2o4dOxyrV6/eO3LkyIL09HRl+fLl+wHghRde6DNz5syMpqambXfddVdqVVWV/d13390/adKk7N27d9s3bdpUBQCvv/56/AMPPJBeXV29/dprr83y+/28McYHH3wQO2HChILKysrKoqKiqBDNq6++mvDss88mf/fdd7sAICYmZvALL7yw//rrr28DgAkTJuQWFhaGnnzyyfrExMRBDz30UN0NN9zQAgAff/xx7HXXXZfn8/mi7H5qa2vFzMzMQWvWrNl11llnBQDgH//4R9+33347YfPmzbtmzZrV97333otfv3797traWrGwsLC4urq6YtmyZXEzZ87MqKqqqjTqZCZMmJB32mmnBebMmRP1flRXV0v9+vUrkWX5e0mSqMvlGvzkk08e+P3vf98CAPPnz4+/4YYb8trb27e4XK4oke4ll1ySO3z48MBDDz3U8M4777gnT57cz+/3b5EkiYZCIS4hIeG0tWvX7mpubhYuu+yy/F27dlUmJSVpADB1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Jk6c6HnuueeiZs6c6TIajcpdd93V/MYbb0TMnj07bcGCBY733nvP1trayuTm5vpLS0t5AFi2bFlCaWlp65dffmlmWRa33npra6j9MgyjXHzxxanXXntt2+uvvx4+bdo0569//Wtnc3Nzr8/Cfffdd/z//b//l9De3s6kpaUFnnzyyehbbrmlmaIoREdHi7/73e+SbrrpphZBEPD999+bVq9efSw3N9e/YcMG25VXXknPmjXL/e6779omTpzojo6Olv761782nnPOORmXXHJJ8jnnnON66aWXIhITEwMxMTHi0qVL29esWRM5e/bstNmzZztfeumlyP4G9+eff37nP/7xj5jbbrutAgCKi4udL774ov3vf//7gIkb+mLKlCneCy+8sGPRokWpS5YsaWlubmaff/55+7Zt28pPdJsAcNdddzUXFBREzJkzJ3XOnDnONWvWRM6YMcOluvqFh4dL5513nmPt2rVRW7duPTTU7f/9739vmD17dvqsWbNGhYeHi/v27TNQFAXVEhRMYmKisHPnTuPKlSvtS5cube9rm0ajUVm+fHnjvffeG3/06FGd1WqVV61aFf3UU0/VDvX4grnuuuscq1atip4yZUr61Vdf3b5+/XobwzC48cYb2wFgypQpruXLlyeUlpa2bt682aSm2tbpdIqiKLj00ktTrr/++rbKykpdZ2cnM2fOHFdKSorwr3/9yz5z5sxR1113Xdv3339v/PTTT60rVqxo7rn/5ORkQRRFaunSpfErVqxouuuuuxpWrFgRV1VVxfn9fnrt2rWRTzzxxEmd45mCmtzk6NGjAPq3cvSH+p05VEKtF7xsMK9DtQWfw2CWBS8P3mYoBrL4DwdDue6hlnEch5SUFJSWlqKwsBAAsHfvXuTm5mrxqi0tLfj8889RX18Pu92O6dOnIzk5Gc8++ywuvfRSzevgxRdfxAUXXACDwYD33nsP7e3tiI2NxfTp05GYmNjtOCoqKrBnzx4sXLgQALB582YwDIMpU6bgmWeeQXJyMqqqqsBxHObPn6+VQuh5HqF+oyVJwgcffID6+nqYTCb4/X6tvaysDLt374bf70dGRgYmTZqEI0eOoKmpCWeffTZcLhdeeeUVXHHFFQgPD8e3334Lm82GpqYm0DSNyspKeDwe5OTkYObMmb2OwWq1Ii0tbVDvyVAxmUzIy8vD/v37u1mg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2tpa2tbWVjpt2jTn448/rp33hg0bwh566KHj7e3tpQ899FDdPffcEw8AX3/9tXHlypXxH3zwQWVTU1NZTk6Oz+Vy9XKR43le2bhxY6XJZJJaWlpKVctLVVWV7vDhwwebm5tLoqOjhcceeywKAFauXGnfsWOH8ciRIwfq6+vLzj///M7FixenBH/mAODOO+9sXb58ecO0adOcLS0tpRUVFdz111+fsnTp0paWlpbSjz/+uOLpp5+2v/jii2EAMH/+/LS8vDxvTU1NWVlZ2aF33nknPNT7EMybb75pbWho4Nrb20saGxvLpk6d6nr11VdH1NWQQCAQCAQC4UzmlBZbUQPvAWgZz1TXrqioKEyaNAkFBQVgWRYdHR0IBALweDxobW2Fy+XS4mlUYQN0DahVi02wlUZ9HcolrS9BEzyvihj1tSp2OI6DTqcbsqhhWVa54447WimKwty5c90pKSn+jRs3mqOjo6W2traS4uJiz/bt2/Vvvvmm1WKxSK2trdpAfP78+Y7ExESRZVllypQp7oaGhkG5DSYmJvp/9atfOQHg6quvdvj9fqqmpoZ77733LEajUbZardI777xjaWxsZDMzM33vvvturzyXN954Y8fu3btNFRUVnKIoWLduXfiNN97YFtxnz549+vLycn1hYaFv/fr15j179ujz8/M9GzZssNntdmnixInuDz/80FJdXc15vV565syZzo0bN5pramrY6upq/oILLnD13O+GDRuqn3/++fqKigrdW2+9ZfV6vXRHR4d23snJyf4FCxY4AWDu3Lmu9vZ2VhAE6n//+5957NixnlmzZnk4jlOWL1/eMug3CcBll13WYbPZZIPBoJx33nnOY8eO6QDg/fffD5swYYLnu+++M3z44Yfm/Px8b0VFhb60tLRfC8lHH31kiYqKEpcsWdJB0zRmzJjhmTVrlvP999+3tba2Mnv27DHefPPNrUajUYmIiJBKSkoOnXfeef0WSB09enSgurqa/+1vf5vw/vvvW5577rn6hx9+uHEo50kgEAgEAoHwc+KUpXTuD4qiIEkSLBYLxo8fD0EQsGfPHjgcjm6xMKoAUmN0KIrS8uWrKZ9D5WoP3o8qUILFC9B3gJMqXnQ6HXQ6HYxGI0wm04Cuaz1JSkoKhIeHaypo1KhR/traWk4URWrJkiUJ7777bnhmZqavqKjIrdPplGCB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5DFjxmSlp6cXDhgwID8nJ6f31q1bdQDw4YcfmgcMGJDbt2/fvISEhOKtW7fqtm3bpsvPzy/o27dvQVxcXJ9rr702LRKJENLn2u324tLS0hyr1drnySefdACAy+VSDRkyJLewsLCgqKiod0lJSV5lZSUNdFz8jxo1qldGRkZhdnZ24YgRI3odPXqUAjpSwiZNmpSRmppanJqaWvTss886Yu3D0qVLLTk5OXIBwdy5c5MTExOLpNePPvpowvTp09MBgGEYcvz48VkFBQW9bTZbn7vuuisZ6BBjBEGUVFdXH6eeXnnllTiLxdJn6NCheTabrc8bb7xhizWOZ555xl5aWprdr1+/vN69e/eOi4vr8/nnnxsHDBiQ27t374KcnJyCXbt2aQHA7/eTN9xwQ2pqamphfn5+76Kiovzvv/9eCwBZWVm9//GPf8h5jJs3b9bZbLZihmGIvLy8go8++sgMABqNpu/999+flJCQUJyXl1fYv3//POnvo7m5mRo8eHBufn5+YVxcXJ+pU6emn3feeXmxxq3w2+H02LBjvwVvfMjI82JdLEu1IK2trWhtbUVbWxvcbjfcbrcsdliWPS5ysG7dul9jN351WJaVzVw8Hg90Oh369++PsWPHIjMzEz6fD263G62trairq8OPP/6IsrIyVFRUoLGxEX6/HxzHydEtkiRRWVmJzZs3Y8uWLVi/fj0yMjJwww03gKZpud5SEpiKqFFQUFBQOCmCIMDhcECj0SAYDMo55B6PB+Fw+LgTCsdxCIZC8AeDYAkBBE2B1mlBazUQCAAqEio1DZVaDZWaBqVRg1arQdE0aDUti5ZYkySkoietVgutVgur1QqCIKDX6zFkyBBs2bIFe/fulYVZT5AEzbJly+KvueYaV1ZWFhu9/LrrrkvPzs5mGhoa9h0+fHh/MBgk77///iQAePzxxxPKy8t1R44c2V9fX18+cuRI39VXX50pXdTs3r3bMHv27LaGhob9zz//fP3NN9+cGeuCHQD+97//WRYvXlzb0NBQfuWVV7qmTp2axbIsAQC7du0y3HXXXc49e/ZUlJSUhK+66qrMCRMmeBobG8v37t1b8cMPP+ifeeYZOwAsWLAg+d13362pqqo68O233x5+//334/x+P7l48WLrMTvsfS0tLfvy8/PDH374oQUAbr/99hSVSiUePXq0vLq6er/dbudu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4uLiQB282AAAIABJREFU4sAwDGpqapCXl4eUlJST7q/VauWkovk333yzoU+fPvnXX3992vLly2tzc3MjBEHghhtuaJs6daoPAMrLy9VlZWVaAEhNTY0MHTo0+MorrzQCgM/nI5ctW2bp1asXu3HjRpSXl+sikQihVqvFUChElJWV6R555JHjXL8AYOfOnXrp+Z49ezRut5saNGhQeNu2bTqC+En25eTkRCKRCPHUU081lZSUMACwbds2XVtbm4phGGL58uXmp556qnnhwoVNe/fu1YwcOTL3008/NRcWFjIWi0VYsWJFdTAYJObNm5e0YMGCpJkzZ1YYDAZh4sSJnrvvvtsFALW1tfSaNWsMNpuN7927d3jjxo3Gm2++uR0ANmzYoO86dokrr7zS+8wzzyRptVqhtLTUV1paGvjLX/6SLIoiMXHiRO9Jf4xuyMzMjJAkKX7++ec10rz//Oc/5sLCQibW+tHf14lIS0uLrFmzxjh27NgA0FE34/f7VYMHDw4DwHXXXef6+9//bk9NTY3MnDkzZpTm2OcdNy87O5vVaDTCypUrjVJUat26dYqg+R0SDAYB4LgO97HEjDTfYDDITYB7Snl5+W8ialiW7RTlOJN0FRTR35UU8ZfqHKVUZekGmRRpia6pkY730VElyaAkFArJ9tLS9gRBAMt2yhg+JZT0MwUFBYWzFOlEkpmZicLCQmg0Grmjs8/ngyAI8kkyHA4jzDDgReGYoCEgABAAgCA6jAFoWk4zk1LHpJQyIqpJW6xJSjWQmrZJz6MLR0mShFqthslkgs1mQ1tbG6qrq8EwjFxbI93hOxEmk0lYunRp7RdffGF97bXX4iwWizB58mT3n//856SVK1cat23bpps2bVqWlL500003tS1btizu7bffth44cEA9a9astGXLltmkiEQoFCLnzp2bXFZWprnttttSsrOzmTFjxgRifXZFRYXur3/9q33Hjh3a+++/P6W0tNTTtb4HAAYNGhQePHhwYO7cuambN2/WrVmzxjBp0qTso0eP0hqNRly8eHHcnXfemXL48GF1TU0NHQwGycLCQqa1tVU1c+bMzJUrVxrr6+vphoYGulevXgwAXHvtta0vv/xywscff2zas2eP5qqrrspYv369gSAI3HTTTa4VK1ZYlixZYv3mm28Mb7zxRkyjAADIyspiU1NT2S+++MI2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";
		}else {
			$('#'+'ma3d-navigation-help-' + MA3D.instanceCounter).dialog('destroy').remove();
		}
	}.bind(this);
	
	var navigationControlGUIHelp = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		cssClass:"ma3d-navigation-toolbar-help",
		appendTo: navigationControlGUIContent
		});
	
	$(navigationControlGUIHelp.buttonElement).button().on('click', onNavigationControlHelp);

	//VIEW
	
	var viewGUI = new MA3D.AccordionItem( {title:"View", state:'open'} );
	accordion.add(viewGUI);
	var viewGUIContent = viewGUI.content;
	
	//fullscreen mode
	var viewGUIFullscreen = new MA3D.Button.Fullscreen({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-view-toolbar-fullscreen",
		text		: "Fullscreen mode",
		appendTo	: viewGUIContent,
		containerDiv: this.containerDiv,
		scene		: this.scene
	});
	
	// var viewGUIScreenshot = new MA3D.Button.Screenshot({
		// appendTo	: viewGUIContent,
		// containerDiv: this.containerDiv,
		// scene		: this.scene
	// });
	
	//Camera Perspective
	var setPerspectiveContainer = new MA3D.ToolContainer({
		indent: false,
		cssText:"margin-top:5px;",
		appendTo:viewGUIContent
		});
	setPerspectiveContainer.element.innerHTML = "Camera Projection:<br>";
	
	var setPerspective = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Perspective", 
		name:"ma3d-setPerspective" + MA3D.instanceCounter ,
		checked:true, 
		appendTo: setPerspectiveContainer.element
		});
	
	var setOrtho = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Ortho", 
		name:"ma3d-setPerspective" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: setPerspectiveContainer.element
		});
	
	$(setPerspectiveContainer.element).buttonset();
	
	$(setOrtho.buttonElement).on('change',function(event) {
		if(!event.target.checked)return;
		if(this.navigationControl.getMode() == "Walk"){
			this.scene.camera.target.position.setZ(-100);
		}
		this.scene.camera.toOrthographic();
	}.bind(this));
	$(setPerspective.buttonElement).on('change',function(event) {
		if(!event.target.checked)return;
		this.scene.camera.toPerspective();
	}.bind(this));
	
	//Render Options
	var renderOptionsGUIItem = new MA3D.AccordionItem({title:"Render Options", state:'closed'});
	accordion.add(renderOptionsGUIItem);
	
	var renderOptionsContainer = new MA3D.ToolContainer({
		appendTo: renderOptionsGUIItem.content
	});
	
	var fogButton = new MA3D.Button({
		behaviour	: 'checkbox',
		text		: 'Fog',
		style		: 'text',
		checked		: true,
		appendTo	: renderOptionsContainer.element
	});
	$(fogButton.buttonElement).on('change', function(event) {
		if(event.target.checked){
			
			this.scene.fog.near = this.scene.config.fog.near;
			this.scene.fog.far  = this.scene.config.fog.far;
			
		}else{
			
			this.scene.fog.near = this.scene.fog.far = this.scene.config.far;
			
		}
	}.bind(this));
	
	var ssaoButton = new MA3D.Button({
		behaviour	: 'checkbox',
		text		: 'Screen Space Ambient Occlusion',
		style		: 'text',
		checked		: false,
		appendTo	: renderOptionsContainer.element
	});
	$(ssaoButton.buttonElement).on('change', function(event) {
		if(event.target.checked){
			this.ssaoControl = new GIScene.Control.SSAO();
			this.scene.addControl(this.ssaoControl);
			this.ssaoControl.activate();
		}else{
			this.ssaoControl.deactivate();
			this.scene.removeControl(this.ssaoControl);
			this.ssaoControl = null;
		}
	}.bind(this));
	
	
	//LAYERTREE
	
	var layerTreeGUIItem = new MA3D.AccordionItem( {title:"Layer tree", state:'open', cssText:"padding:0;"} );
	accordion.add(layerTreeGUIItem);
	
	var layerTreeConfig = {
		minHeight : '200px',
		groupBy:[
				{text: 'Terrain', layerGroup:'Terrain'}, //layerGroup must be specified in the layer config object
				{text: 'Structures', layerGroup:'Structures'},
				{text: 'User-generated', layerGroup:'User-generated'}
			]
	};
	var layerTree = new MA3D.LayerTree(this.scene, layerTreeConfig);
	layerTreeGUIItem.content.appendChild(layerTree.div);
	
	//TOOLS
	
	var toolsGUI  = new MA3D.AccordionItem( {title:"Tools", state: 'open'});
	accordion.add(toolsGUI);
	var toolsGUIContent = toolsGUI.content;
	
	// Interactive Illumination
	var toolsGUICamLight = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-lamp",
		text		: "Interactive Illumination",
		appendTo	: toolsGUIContent
	});
	
	//Intensity Slider Container
	var toolsGUICamLightContainer = new MA3D.ToolContainer({
		cssText : "display:none;",
		appendTo: toolsGUIContent
	});
	var toolsGUICamLightContainerDiv = toolsGUICamLightContainer.element;
	toolsGUICamLightContainerDiv.textContent = "Light Intensity:";
	
	$(toolsGUICamLight.buttonElement).button().on('change', function(e) {
		if (e.target.checked) {
			// box was checked
			this.cameraLightControl.activate();
			// $('#camLight_container').get(0).style.margin = '5px 0 0 5px';
			$('#camLight_container').addClass('sovToolContainer');
			if( $(toolsGUICamLightContainerDiv).children().length == 0) {
				var sliderElement = document.createElement('div');
				$(sliderElement).slider({
					min:0.1,
					max:1,
					step:0.01,
					value:this.cameraLightControl.light.intensity,
					animate: true,
					slide: function(e,ui) {this.cameraLightControl.light.intensity = ui.value;}.bind(this)
				});
				$(toolsGUICamLightContainerDiv).append(sliderElement);
			}
			$(toolsGUICamLightContainerDiv).slideDown();
		} else {
			this.cameraLightControl.deactivate();
			$(toolsGUICamLightContainerDiv).slideUp();
		}
	}.bind(this));
	
	//add horizontal seperator
	toolsGUIContent.appendChild(document.createElement('hr'));	
	
	// Get Feature Info
	var toolsGUIGetFeatureInfo = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-info",
		text		: "Get Feature Info",
		appendTo	: toolsGUIContent
	});
	
	//container
	var toolsGUIGetFeatureInfoContainer = new MA3D.ToolContainer({
		cssText : "display:none;",
		appendTo: toolsGUIContent
	});
	var toolsGUIGetFeatureInfoContainerDiv = toolsGUIGetFeatureInfoContainer.element;
	
	//textfield
	var toolsGUIGetFeatureInfoOutput = new MA3D.Textfield({
		label:"Name: ",
		value:"selected object",
		appendTo: toolsGUIGetFeatureInfoContainerDiv
	});
	var toolsGUIGetFeatureInfoOutputElement = toolsGUIGetFeatureInfoOutput.element;
	
	var GetFeatureInfo_onTileChange = function(event) {this.selectControl.selectables = this.layer_buildingsLOD1.root.getDescendants();}.bind(this);
	var GetFeatureInfo_onSelected = function(event) {toolsGUIGetFeatureInfoOutputElement.value = event.content.name;}.bind(this);
	var GetFeatureInfo_onUnselected = function(event) {toolsGUIGetFeatureInfoOutputElement.value = 'selected object';}.bind(this);
			
	$(toolsGUIGetFeatureInfo.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			//turn off Get Feature Images
			if(this.selectControl.isActive){
				toolsGUIGetFeatureImages.buttonElement.checked = false;
				$(toolsGUIGetFeatureImages.buttonElement).button('refresh');
				$(toolsGUIGetFeatureImages.buttonElement).trigger('change');
			}
			
			
			// this.selectControl.selectables = (layerTree.activeLayer)? layerTree.activeLayer.root.getDescendants() : [];
			//hardcoded selection only for buildings layer
			this.selectControl.selectables = this.layer_buildingsLOD1.root.getDescendants();
			this.selectControl.activate();
			
			//keep selectables updated while control is active
			// var onTileChange = function(event) {this.selectControl.selectables = this.layer_buildingsLOD1.root.getDescendants();}.bind(this);
			this.layer_buildingsLOD1.addEventListener('tileadd', GetFeatureInfo_onTileChange);
			this.layer_buildingsLOD1.addEventListener('tileremove', GetFeatureInfo_onTileChange);
			
			// var onSelected = function(event) {toolsGUIGetFeatureInfoOutputElement.value = event.content.name;}.bind(this);
			// var onUnselected = function(event) {toolsGUIGetFeatureInfoOutputElement.value = 'selected object';}.bind(this);
			this.selectControl.addEventListener('highlighted', GetFeatureInfo_onSelected);
			this.selectControl.addEventListener('unhighlighted', GetFeatureInfo_onUnselected);
			$(toolsGUIGetFeatureInfoContainerDiv).slideDown();
		} else {
			this.selectControl.unhighlightAll();
			this.layer_buildingsLOD1.removeEventListener('tileadd', GetFeatureInfo_onTileChange);
			this.layer_buildingsLOD1.removeEventListener('tileremove', GetFeatureInfo_onTileChange);
			this.selectControl.removeEventListener('highlighted', GetFeatureInfo_onSelected);
			this.selectControl.removeEventListener('unhighlighted', GetFeatureInfo_onUnselected);
			this.selectControl.deactivate();
			$(toolsGUIGetFeatureInfoContainerDiv).slideUp();
		}
	}.bind(this));
	
	//add select segmented model selection and attribute service 
	var selectSegmentedModel = new MA3D.SelectSegmentedModel(this, toolsGUIGetFeatureInfoContainerDiv, toolsGUIGetFeatureInfo.buttonElement);
	
	//add horizontal seperator
	toolsGUIContent.appendChild(document.createElement('hr'));	
	
	// Get Feature Images
	var toolsGUIGetFeatureImages = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-info",
		text		: "Get Feature Images",
		appendTo	: toolsGUIContent
	});
	
	var GetFeatureImages_onTileChange = function(event) {this.selectControl.selectables = this.layer_buildingsLOD1.root.getDescendants();}.bind(this);
	var GetFeatureImages_onSelected = function(event) {
				var objectName = event.content.name;
				var attr_id = objectName.split("_")[2];
				globalImageViewer = new MA3D.ArachneImageViewer(attr_id);	
				}.bind(this);
	var GetFeatureImages_onUnselected = function(event) {}.bind(this);
	
	$(toolsGUIGetFeatureImages.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			//turn off Get Feature Info
			if(this.selectControl.isActive){
				toolsGUIGetFeatureInfo.buttonElement.checked = false;
				$(toolsGUIGetFeatureInfo.buttonElement).button('refresh');
				$(toolsGUIGetFeatureInfo.buttonElement).trigger('change');
			}
			
			// this.selectControl.selectables = (layerTree.activeLayer)? layerTree.activeLayer.root.getDescendants() : [];
			//hardcoded selection only for buildings layer
			this.selectControl.selectables = this.layer_buildingsLOD1.root.getDescendants();
			this.selectControl.activate();
			
			//keep selectables updated while control is active
			// var onTileChange_ = function(event) {this.selectControl.selectables = this.layer_buildingsLOD1.root.getDescendants();}.bind(this);
			this.layer_buildingsLOD1.addEventListener('tileadd', GetFeatureImages_onTileChange);
			this.layer_buildingsLOD1.addEventListener('tileremove', GetFeatureImages_onTileChange);
			
			// var onSelected_ = function(event) {
				// var objectName = event.content.name;
				// var attr_id = objectName.split("_")[2];
				// globalImageViewer = new MA3D.ArachneImageViewer(attr_id);
				// //dialog on close unselect
// 				
				// }.bind(this);
			// var onUnselected_ = function(event) {
// 				
				// //close image viewer
// 				
// 				
			// }.bind(this);
			this.selectControl.addEventListener('highlighted', GetFeatureImages_onSelected);
			//this.selectControl.addEventListener('unhighlighted', onUnselected_);
			// $(toolsGUIGetFeatureInfoContainerDiv).slideDown();
		} else {
			this.selectControl.unhighlightAll();
			this.layer_buildingsLOD1.removeEventListener('tileadd', GetFeatureImages_onTileChange);
			this.layer_buildingsLOD1.removeEventListener('tileremove', GetFeatureImages_onTileChange);
			this.selectControl.removeEventListener('highlighted', GetFeatureImages_onSelected);
			//this.selectControl.removeEventListener('unhighlighted', onUnselected_);
			this.selectControl.deactivate();
			// $(toolsGUIGetFeatureInfoContainerDiv).slideUp();
		}
	}.bind(this));
	
	//add horizontal seperator
	toolsGUIContent.appendChild(document.createElement('hr'));
	
	// Select Features
	var toolsGUISelectFeatures = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-select",
		text		: "Select Features",
		appendTo	: toolsGUIContent
	});
	
	var onActiveLayerChanged = function(event) {
		var formerActiveLayer = event.content.formerActiveLayer;
		var activeLayer = event.content.activeLayer;
		console.log(activeLayer,formerActiveLayer);
		if(formerActiveLayer)formerActiveLayer.selectControl.deactivate();
		if(activeLayer)activeLayer.selectControl.activate();
	};
	
	$(toolsGUISelectFeatures.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			layerTree.addEventListener('activeLayerChanged', onActiveLayerChanged);
			if(!layerTree.activeLayer){
				alert('Please activate a layer in the layertree');
			}
			//find active layer
			if(layerTree.activeLayer){
				layerTree.activeLayer.selectControl.activate();
				
			}
		}
		else{
			if(layerTree.activeLayer){
				layerTree.activeLayer.selectControl.deactivate();
				
			}
			layerTree.removeEventListener('activeLayerChanged', onActiveLayerChanged);
		}
	});
	
	// clear all selections
	var toolsGUIClearSelectedFeatures = new MA3D.Button({
		behaviour	: "button",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-unselect",
		text		: "Clear All",
		appendTo	: toolsGUIContent
	});
	
	$(toolsGUIClearSelectedFeatures.buttonElement).button().on('click', function(e) {
		this.scene.layers.forEach(function(e,i,a){e.selectControl.unselectAll(true);});
	}.bind(this));
	
	//add horizontal seperator
	toolsGUIContent.appendChild(document.createElement('hr'));
	
	//pick coordinates
	var toolsGUIPickCoordinates = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-pick",
		text		: "Pick Coordinates",
		appendTo	: toolsGUIContent
	});
	
	//container
	var toolsGUIPickCoordinatesContainer = new MA3D.ToolContainer({
		cssText : "display:none;text-align:right",
		appendTo: toolsGUIContent
	});
	var toolsGUIPickCoordinatesContainerDiv = toolsGUIPickCoordinatesContainer.element;
	//output x y z
	//textfield X
	var toolsGUIPickCoordinatesOutputX = new MA3D.Textfield({
		label:"X: ",
		appendTo: toolsGUIPickCoordinatesContainerDiv
	});
	var toolsGUIPickCoordinatesOutputXElement = toolsGUIPickCoordinatesOutputX.element;
	
	//textfield Y
	var toolsGUIPickCoordinatesOutputY = new MA3D.Textfield({
		label:"Y: ",
		appendTo: toolsGUIPickCoordinatesContainerDiv
	});
	var toolsGUIPickCoordinatesOutputYElement = toolsGUIPickCoordinatesOutputY.element;
	
	//textfield Z
	var toolsGUIPickCoordinatesOutputZ = new MA3D.Textfield({
		label:"Z: ",
		appendTo: toolsGUIPickCoordinatesContainerDiv
	});
	var toolsGUIPickCoordinatesOutputZElement = toolsGUIPickCoordinatesOutputZ.element;
	
	$(toolsGUIPickCoordinates.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			$(toolsGUIPickCoordinatesContainerDiv).slideDown();
			this.pickControl.pickables = this.scene.root.getDescendants();
			this.pickControl.activate();
			var onClick = function(event) {
				if(event.content){
					var point = new GIScene.Coordinate3().fromVector3(event.content.point.clone().add(this.scene.config.offset.toVector3()));
					
					toolsGUIPickCoordinatesOutputXElement.value = point.x.toFixed(6);
					toolsGUIPickCoordinatesOutputYElement.value = point.y.toFixed(6);
					toolsGUIPickCoordinatesOutputZElement.value = point.z.toFixed(6);
				}
			};
			this.pickControl.addEventListener('click', onClick);
		}else{
			toolsGUIPickCoordinatesOutputXElement.value = 
			toolsGUIPickCoordinatesOutputYElement.value = 
			toolsGUIPickCoordinatesOutputZElement.value = "";
			$(toolsGUIPickCoordinatesContainerDiv).slideUp();
			this.pickControl.removeEventListener('click', onClick);
			this.pickControl.deactivate();
			
		}
	}.bind(this));;

	//add horizontal seperator
	toolsGUIContent.appendChild(document.createElement('hr'));
	
	//measure
	var toolsGUIMeasure = new MA3D.Button({
		behaviour	: 'checkbox',
		style		: 'icon-text',
		cssClass	: 'ma3d-tools-toolbar-measure',
		text		: 'Measure',
		appendTo	: toolsGUIContent
	});
	
	//measure Clear button
	var toolsGUIMeasureClear = new MA3D.Button({
		behaviour	: 'button',
		style		: 'text',
		text		: 'Clear',
		appendTo	: toolsGUIContent
	});
	
	//output container
	var toolsGUIMeasureContainer = new MA3D.ToolContainer({
		cssText: "display:none;text-align:right;",
		appendTo: toolsGUIContent
	});
	var toolsGUIMeasureContainerDiv = toolsGUIMeasureContainer.element;
	
	//output distance and compass
	var toolsGUIMeasureOutputDistance = new MA3D.Textfield({
		label:"Distance: ",
		value :"-" + this.scene.config.units,
		cssText:"width:120px;",
		appendTo: toolsGUIMeasureContainerDiv
	});
	var toolsGUIMeasureOutputDistanceElement = toolsGUIMeasureOutputDistance.element;
	
	var toolsGUIMeasureOutputCompass = new MA3D.Textfield({
		label:"Compass Dir.: ",
		value :"-°",
		cssText:"width:120px;",
		appendTo: toolsGUIMeasureContainerDiv
	});
	var toolsGUIMeasureOutputCompassElement = toolsGUIMeasureOutputCompass.element;
	
	$(toolsGUIMeasure.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			$(toolsGUIMeasureContainerDiv).slideDown();
			this.measureControl.measureables = this.scene.root.getDescendants();
			this.measureControl.activate();
			var onClick = function(event) {
				
				var distance 	 = event.content.distance;
				var angleToNorth = event.content.angleToNorth;
				toolsGUIMeasureOutputDistanceElement.value = distance.toFixed(3) + this.scene.config.units;
				toolsGUIMeasureOutputCompassElement.value = angleToNorth.toFixed(3) + "°";
				// console.log(event.content.angleToNorth);
				
			};
			this.measureControl.addEventListener('measure', onClick);
		}else{
			$(toolsGUIMeasureContainerDiv).slideUp();
			toolsGUIMeasureOutputDistanceElement.value = "-" + this.scene.config.units;
			this.measureControl.removeEventListener('measure', onClick);
			this.measureControl.deactivate();
			
		}
	}.bind(this));
	
	var onClear = function() {
		if(this.measureControl.isActive){
			toolsGUIMeasureOutputDistanceElement.value = "-" + this.scene.config.units;
			toolsGUIMeasureOutputCompassElement.value = "-°";
			this.measureControl.deactivate();
			this.measureControl.activate();
			this.measureControl.measureables = this.scene.root.getDescendants();
		}
	}.bind(this);
	$(toolsGUIMeasureClear.buttonElement).button().click(onClear);
	
	//ANALYSIS
	
	var analysisGUI = new MA3D.AccordionItem( {title:"Analysis", state: 'open', cssText	: "background-color:white;padding:0;"});
	accordion.add(analysisGUI);
	var analysisGUIContent = analysisGUI.content;
	
	//Visibility
	var analysisGUIVisibilityContainer = new MA3D.ToolContainer( {
			indent	: false,
			appendTo: analysisGUIContent
		}
	);
	//analysisGUIVisibilityContainer.element.innerHTML = "Visibility:<br>";
	
	//jstree plugin
	$.jstree.defaults.conditionalselect = function () { return true; };

    $.jstree.plugins.conditionalselect = function (options, parent) {
        // own function
        this.select_node = function (obj, supress_event, prevent_open) {
            if(this.settings.conditionalselect.call(this, this.get_node(obj))) {
                parent.select_node.call(this, obj, supress_event, prevent_open);
            }
        };
    };
    
	var analysisTree = $(analysisGUIVisibilityContainer.element).jstree({ 
		'core' : {
    			
    			themes:{responsive:false, dots:false},
			    
				'data' :[{
					'text'		: 'Import / Export',
					'state'		: {
									'opened' : false,
									'selected' : false
								  },
					'type'		: 'toolgroup',
					'children'	: [{
						"id"	: 'Import-GeoJSON-'+this.id,
						"text"	: 'Import GeoJSON (POINT)',
						"type"	: 'tool'
					},
					{
						"id"	: 'Import-Raster-'+this.id,
						"text"	: 'Import Raster (png, jpeg, gif)',
						"type"	: 'tool'
					},
					{
						"id"	: 'Export-Screenshot-'+this.id,
						"text"	: 'Export Screenshot (.png)',
						"type"	: 'tool'
					}]
					
					},{
					'text'		: 'Visibility',
					'state'		: {
									'opened' : true,
									'selected' : false
								  },
					'type' 		: 'toolgroup',
					'children' 	: [
					// {
						// "id"	: 'LOS-pp-'+this.id,
						// "text" 	: 'Line of Sight (point-point)',
						// "type"	: 'tool'
					// }, 
					{
						"id"	: 'LOS-simpleClient-'+this.id,
						'text' : 'Line of Sight (interactive)', //(simple Client)
						"type"	: 'tool'
					}
					,
					// {
						// 'text' : 'Line of Sight (path-point)',
						// "type"	: 'tool'
					// }, 
					{
						"id"	: 'LOSNet-allToall-'+this.id,
						'text' : 'Line of Sight Network (all to all)',
						"type"	: 'tool'
					}]
				}
				,
				{
					'text'		: 'Orientation',
					'type'		: 'toolgroup',
					'state'		: {
									'opened' : true,
									'selected' : false
								 },
					'children'	: [
						{
							"id"	: 'Orientation-aspect-'+this.id,
							'text' : 'Add Aspect Material to Layer',
							"type"	: 'tool'
						},
						{
							"id"	: 'Orientation-pointAlignment-'+this.id,
							'text' : 'Add PointAlignment Material to Layer',
							"type"	: 'tool'
						}
					]
					
				}
				]

			},
			"types"	:{
				
				"toolgroup": {icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAERpIDQgTXJ6IDIwMDMgMTk6MTg6MDUgKzAxMDDiemgrAAAAB3RJTUUH0wMEEic1A2go/gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAIgSURBVHjapVNPaNNQGP+laTvbMplhq+vqaY55UuZJZYiCCCrz5EVFEJFdvehBEHYQPAnbUISdxPPAw1AolDEmg4F1ovNgaafDTuvaaZOsa9LkJS/Zl1SnZVOKPvjlJd+f3/fL970H/OcSWg1ceIB0pYbTjgN4qKp4fGkU11uuNHMfOtMr7s81NQLXswf/lJB7gkFlHaccF0cthrgb6gyHItK2uG0EmYfIidLhfhZLoOfgMXT2nke4PQ5RjJF3lWAQuvzf2JFAZ+g/cfkFbOM9dPUz1OIUzI01wGWwbYa+47coKgLOfyOYGwtYCO0WewZuCJ/m70KXF6HJKYR2xSDt24O2aJI6Z6CUXwTTsgjHBrYUBLyHZbvakWtpoXfwpu+ISgl09R1AR/detEUohKtEsI7u/Ql8zT6jjPqWAp/AccW8ulqgt9oPZo2MFZJN4PIvWDKCjuK1uFmBw+23hcyE5TXId3AKqpcJ1DSzROZy49v8jmQyCnkp3dwDSpqWP8xesPWc5DsskmxQMmfkJHCzsRO5EBAgauVmBWfuYNINhuZeTd5rOBgp0L3KpYYCm6pDhqKWsPwmj/nUawgCik1jZKaRqn77OEQEotcwODS6gAllrYYvuSqKBd3VqpZKk3x5cQxnd7wLM48O2UrxnXju6hCWMrNYWa5zo8bLDsdCvAO3T44g+9eT2C6Gh1c2MPp04rlKJ336yjiGW74s/7o2AQ/QEuOMQm7qAAAAAElFTkSuQmCC'},
				//"tool"		: {icon:'css/images/tool.png'}
				"tool"		: {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOQAAADkABT+UFmgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAI8SURBVDiNjZRdSFNhGMd/zzn7pLZYImkXRhQ2w+oiKzGohBhSEBV5YRFEREVBgRGRJEH2AdGnd0WfF1lshXWRJouKKLvQsDWNwiLqovJCg7W5sLm3i53haZ0NH3jgvOf839/78J7n/6CUIl8Cx4APwDdgqKC2AOQCoHJSnzQIEOCSBUQB0yYFAnTgZs7mHmA5UAFohm46cAfY+B8IsANBM8QLUcBrUfVe4GX2GyAagIg4gXtAPUYsBcJQ8g585ITDV1wKDCqlYiKyLCMFN9BlrqQGxntBRTP5JgJTstVUHr+9b17juTGx2UeAEPAR2KMB94GA6cAHZ2Gnc2K9SOAGIrLwZFuziLroKCqxz9nd8ke3u8LAQeCyDWgFVgEO4462VCuVGhCZr6DR+I2btm479AKkxoAPuUrLAqmx5NvsaaKUQkQ2AGuBXUqpcYCQiF4BHWmRwNX1O3haVWtsUV/1NKv7jmweNN+bGLduGcHy8uLO6nWfXvsXewBmDP9I13U/qjvwqiucq80LqjkfcsdHU3cR1gDM+v6Fw9dP4U3EPttgiV+pYbNes4L4T1/zxJOpzizEk/j1vvlKS9qbiAHMTkHomYgtL0hEVohIQ7Iv8hBYmXnJ47jPXeX+PdpkktYWZbw4EaZurQB+Au1o2nBZw/6RBSfa2ue2djizmn64FZ3or8gATLWyyFGgyXjerjtdT+qDwX/c3g3uKPT0Q9DcpFam1ci4/wwQsnJ5b54JYDVGZgLPgcpCgyw3/wJFYs8tjA9c0wAAAABJRU5ErkJggg=='}
			},
			"conditionalselect" : function(node) {return (node.type == "toolgroup") ? false : true;},
			"plugins" : [ "wholerow" , "types", "conditionalselect"]
	});
	
	var importGeoJSONDialog	 = function(){new MA3D.Dialog.ImportGeoJSON		 				 (this.scene,this.containerDiv);}.bind(this);
	var importRasterDialog	 = function(){new MA3D.Dialog.AddRasterOverlay					 (this.scene,this.containerDiv);}.bind(this);
    var exportScreenshotDialog	 = function() {var button = new MA3D.Button.Screenshot		 ({scene:this.scene,containerDiv:this.containerDiv}); button.createDialog();}.bind(this);
    var losDialog 			 = function(){new MA3D.AnalysisDialog.LineOfSight				 (this.scene,this.containerDiv);}.bind(this);
    var losSCDialog 		 = function(){new MA3D.AnalysisDialog.LineOfSight_simpleClient	 (this.scene,this.containerDiv);}.bind(this);
    var losNetAllToAllDialog = function(){new MA3D.AnalysisDialog.LineOfSightNetwork_allToAll(this.scene,this.containerDiv);}.bind(this);
    var addAspectMaterialDialog = function(){new MA3D.Dialog.AddAspectMaterial 				 (this.scene,this.containerDiv);}.bind(this);
    var addPointAlignmentMaterialDialog = function(){new MA3D.Dialog.AddPointAlignmentMaterial(this.scene,this.containerDiv);}.bind(this);
    
	$( document ).on( "click", '#Import-GeoJSON-'  	+this.id, importGeoJSONDialog);
	$( document ).on( "click", '#Import-Raster-'  	+this.id, importRasterDialog);
	$( document ).on( "click", '#Export-Screenshot-'+this.id, exportScreenshotDialog);
	$( document ).on( "click", '#LOS-pp-'  			+this.id, losDialog);
	$( document ).on( "click", '#LOS-simpleClient-'	+this.id, losSCDialog);
	$( document ).on( "click", '#LOSNet-allToall-'	+this.id, losNetAllToAllDialog);
	$( document ).on( "click", '#Orientation-aspect-'+this.id, addAspectMaterialDialog);
	$( document ).on( "click", '#Orientation-pointAlignment-'+this.id, addPointAlignmentMaterialDialog);
	
	
	
	// analysisTree.on('ready.jstree', function(node, selected, event){
// 			
			// $('#Import-GeoJSON-'  +this.id).click(importGeoJSONDialog);
			// $('#LOS-pp-'          +this.id).on('click',losDialog);
			// $('#LOS-simpleClient-'+this.id).on('click',losSCDialog);
// 			
		// }.bind(this));
		
	
	GIS_ANALYSIS_CONFIG ={
			   	//Analysis
				'LineOfSight':{
					'Title':'Line of Sight',
					'Abstract':'Create a buffer in meters around a chosen point. This Analysis is geographically restricted to the area of China.',
					inputParams:[
									{	identifier: 'observerPoint',
										'Title':    'Observer Point', 
										'Abstract': 'Point of Observer, where the line of sight starts.', 
										dataType:   'GML', //???
										// defaultValue: 1000
										interaction:{
											interactionType: 'draw', 	//draw or select
											geometryType:'point',		//point, linestring, polygon, box
											minNumGeometries:1,
											maxNumGeometries:1
											},
									},
									{
										identifier: 'observerOffset',
										'Title':	'Observer Offset',
										'Abstract':	'Additional height offset to observer point.',
										dataType:	'Number',
										// interaction:{
											// interactionType: 'draw', 	//draw or select
											// geometryType:'point',		//point, linestring, polygon, box
											// minNumGeometries:1,
											// maxNumGeometries:1
											// },
										defaultValue: 0	
									},
									{	identifier: 'targetPoint',
										'Title':    'Tartget Point', 
										'Abstract': 'Point of Target, where the line of sight ends.', 
										dataType:   'GML', //???
										// defaultValue: 1000
										interaction:{
											interactionType: 'draw', 	//draw or select
											geometryType:'point',		//point, linestring, polygon, box
											minNumGeometries:1,
											maxNumGeometries:1
											},
									},
									{
										identifier: 'targetOffset',
										'Title':	'Target Offset',
										'Abstract':	'Additional height offset to target point.',
										dataType:	'Number',
										// interaction:{
											// interactionType: 'draw', 	//draw or select
											// geometryType:'point',		//point, linestring, polygon, box
											// minNumGeometries:1,
											// maxNumGeometries:1
											// },
										defaultValue: 0	
									},
									{
										identifier: 'obstacles',
										'Title':    'Obstacles',
										'Abstract': 'Possible obstacles to be reflected in the calculation.',
										dataType  : 'Array of THREE.Mesh' 
									}
								],
					outputs:[
									{
										identifier: 'lineOfSight',
										'Title':	'Line Of Sight',
										'Abstract':	'The calculated Line of Sight between observer and target.',
										dataType:	'GML' //???
										
									},
									{
										identifier: 'visibility',
										'Title':	'Visibility',
										'Abstract':	'The result of the visibility calcultion.',
										dataType:	'boolean'
									}
							]
				}};
				
		
	
	//RENDER OPTIONS
	
	var renderOptionsGUI = new MA3D.AccordionItem( {title:"Render Options", state: 'open'});
	accordion.add(renderOptionsGUI);
	var renderOptionsGUIContent = renderOptionsGUI.content;
	
	var renderOptionsGUIRenderInfo = new MA3D.Button({
		behaviuor: 	'button',
		style:		'text',
		text:		'Render Info',
		appendTo : 	renderOptionsGUIContent
	});
	
	var onRenderInfo = function() {
		var verts = 0;
		var tris  = 0;
		sv.scene.root.traverse(function(obj){
		    if(obj.geometry){
		    	verts+= obj.geometry.vertices.length;
		        tris += obj.geometry.faces.length;
		    }
		
		});
		alert("Scene Render Info:\n\nVertices: " + verts + "\n\nTriangles: " + tris);
	};
	
	$(renderOptionsGUIRenderInfo.buttonElement).button().on('click', onRenderInfo);
	
	
}.bind(this);
		
	//auto init
	initLayout();
	initScene();
	initGUI();
	
	
};

MA3D.SingleObjectViewer = MA3D.singleObjectViewer = function(containerDiv, modelURL, format, verticalAxis, georef, segmented) {
	

	// sov variables
	this.id				= MA3D.instanceCounter++;
	this.containerDiv 	= containerDiv;
	this.scene			= null;
	this.modelURL		= modelURL;
	this.format			= format;
	this.verticalAxis	= verticalAxis;
	this.georef			= georef;
	this.segmented		= segmented;
	var toolbarDiv		= null;

	
	//if model url & format specified in constructor use them otherwise check for params in the url
	if (this.modelURL && this.format){
		var params = {
			"url":this.modelURL,
			"format": this.format
		};
	}else{
		//get file to load from URL
		var params = MA3D.Utils.getURLParams(window.location.href);
	}

	var isGeoref = (("georef" in params)? params.georef !== "false" : (this.georef !== null)? this.georef : true);
	var isSegmented = (("segmented" in params)? params.segmented !== "false" : (this.segmented !== null)? this.segmented : true);
	
	/**
	 * removes the viewer and its data properly from memory ans DOM
	 * @method unload 
	 */
	this.unload = function() {
	
		this.scene.onUnload(); //better dispatch
		this.containerDiv.innerHTML="";
	
	};
	
	var initLayout = function() {
		$(this.containerDiv).addClass('ma3d-sov-container');
		
		//split containerDiv into toolbar and canvascontainer
		toolbarDiv = document.createElement('div');
		toolbarDiv.setAttribute('class', 'ma3d-toolbar');
		toolbarDiv.setAttribute('id', 'ma3d-toolbar-'+this.id);
		var canvascontainerDiv = document.createElement('div');
		canvascontainerDiv.setAttribute('class', 'ma3d-canvascontainer');
		canvascontainerDiv.setAttribute('id', 'ma3d-canvascontainer-'+this.id);
		this.containerDiv.appendChild(toolbarDiv);
		this.containerDiv.appendChild(canvascontainerDiv);
	}.bind(this);
	
	initLayout();
	
	//ACCORDION SIDE BAR
	var accordion = new MA3D.Accordion();
	toolbarDiv.appendChild(accordion.div);
	
	
	//NAVIGATION
	
	var navigationControlGUI = new MA3D.AccordionItem( {title:"Navigation",	state:'closed'} );
	accordion.add(navigationControlGUI);
	
	var navigationControlGUIContent = navigationControlGUI.content;
	
	var navigationControlOrbit = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text: "Examine", //"Orbit", 
		name:"ma3d-navigation" + MA3D.instanceCounter ,
		checked:true, 
		appendTo: navigationControlGUIContent
		});
	
	var navigationControlTrackball = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Trackball", 
		name:"ma3d-navigation" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: navigationControlGUIContent
		});
		
	var navigationControlWalk = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Walk", 
		name:"ma3d-navigation" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: navigationControlGUIContent
		});
	
	$(navigationControlGUIContent).buttonset();
	$(navigationControlOrbit.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.navigationControl.setMode("PanOrbitZoomCenter");
		}
	}.bind(this));
	$(navigationControlTrackball.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.navigationControl.setMode("Trackball");
		}
	}.bind(this));
	$(navigationControlWalk.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.navigationControl.setMode("Walk");
		}
	}.bind(this));
	
	var onNavigationControlHelp = function(event) {
		if($('#'+'ma3d-navigation-help-' + MA3D.instanceCounter).length == 0){
			var dialog = document.createElement('div');
			dialog.title = "Navigation Help";
			dialog.id = 'ma3d-navigation-help-' + MA3D.instanceCounter; 
			
			var helpImg = document.createElement('img');
			helpImg.onload = function() {
				$(dialog).dialog({
					width:    Math.min( parseInt(helpImg.width)+30, this.containerDiv.offsetWidth-40),
					maxHeight: this.containerDiv.offsetHeight-40,
					// position: {my: "center", at: "center", of: this.containerDiv},
					close:    function(event, ui) {$(dialog).dialog('destroy').remove();}.bind(this),
					// appendTo: this.containerDiv
					});
				$(dialog).dialog('widget').get(0).style.cssText += "z-index:2000000;top:5px;";
			}.bind(this);
			dialog.appendChild(helpImg);
			//navigationHelp.png
			helpImg.src="data:image/png;base64,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bVvtkiVLnIuKijgsy2L06NFuiYmJPgDQqVMn7b59+xQZGRk8jUZDr1+//k+fU/NSgpobN24IunbtWp1eM336dFWnTp0C7A9ns2fPdl2/fr2jXq+nmjZtWu+jjz7yOHz4sOy9997zatKkSX2WZXHkyBHJm2++WV0RxWq1Up06dQqoWXHEbsqUKap27doF7Nu3z2HRokWuISEhwfagauLEie5du3b1HT9+vMf48ePdDQYD1bp1a/9mzZoFbtu2TREVFRVkn8SUkZHB69at2+8qcbz77rtex44dkwBAYmKib0JCgt+ECRPc161bp2zQoEGwPccyNTVV6O3tHbp48WKXwYMHe3/99ddPXJdg5MiRnocPH5b8+uuvksLCQl5KSorUfgy706dPi/r161f9/seNG+fes2fP6lSvSZMmqXft2uUAVE38jIuLC9i6davjoEGDfHv06OEDVD2UdunSJcBoNP7uosEwDOLj43379evnu3//fllMTEz9Dz/80K22tl69elUQGhoa9NVXX7kmJyc79OjRw3/w4MG/mwDL4/HYxMREX/tD9J49e2RdunQJ+OWXXyQAcODAAcm4ceM8KIrCuHHj1B07dgxITk52mD9/vmtQUFDwlStXBEajkYqPj69XM1D8+OOP1du3b5enpqYKQ0JCgrZv367YtGmTY1hYWFDNINnu4XeKPnDggOyXX36RnD17VhQWFhb4zTffuOzZs0feuXNn/zFjxlS/z8TERK82bdrUS0pKkkdERAQuXrxYCQDvvfee14EDByQA0KdPH7+EhAS/yZMnu3/33XdODRo0CLIHJhcuXBB6enqGLlmyxGXUqFFeMTExAcOGDXss5fDUqVOizMxM/sWLFyX2i51Op+PExMTU27Rpk+N7773n1bp1a397WsqXX37p1KRJk6A9e/bIR44c6dWsWbMAexWUmjZv3ixnWZbaunWr4u7du7zjx4+Lw8LCgpYtW+a8a9cueXx8fL1JkyapACApKUk2aNAg786dO/t/8MEHXvfv3+fOmTPHOTw8PHj79u2KmJiYej169PBbuXKlEqgK4IODg4NXrFjhNH/+fNfg4ODg8+fPCwsKCrhHjhyRlpaWcr/77rs//YJEvDyhoaHmSZMmFY4ePdqrrKyMs3nz5uycnBy+p6dnmIeHR0hJSQl3xYoV1fM92rVrV8nj8diOHTtq7Wlg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FW3cuLHt7rvvbm1qahLGjx8/cOjQobHJkyd333rrrXk7duzo/PWvf9322GOPZY4bNy6akpJi8jxPU1JSDL/fb3700UeuaDTKPfLII80A8PTTT/s/+OADNxM0DAaDcWiOi6gxQACOJBa7nsdoz80ggMkDqmAgqzQXGmLYuWUzulsO4sAWIFXT4eJ51O/9DLt370bzwYOIaSp0wsEUBIiyA2leN4gkg/ICDEKgUQqDElCOA89zECggggLUsgE1EYlEsGXLFjQ1NWHEiBGorKyE3++Hw+EAIQSaptkpaF+3qLn99ttbL7744kDfxysqKtTU1FTj448/3vPGG2+4W1tbhYULFx7Mzc21Bc2rr766t6qqSgEShfNr1qzZ09DQIFopdBbz5s3rmjp1qr0zOHv27ND3v//9SH/PDx06VNm+ffuuVatWeVRVJUuWLGnIzs7WASAlJcXcunXr7tdff93j8/nMc889N/zee++5UlJSTFEU6Z49e3atX7/e8cknnzhuvfXW1urqagUAqqurlR07dthjPvnkk42WffLs2bNDkyZNirhcLvO9995z/e53v2u2Ui4A4J133tm3fPlyj6Io3Lnnnhves2ePVFZWpgLAH/7wh+ZJkyaFrYLeTZs27V63bp0zPz9fHzNmTPzTTz/d+dZbb7ldLpc5adKkiFW3c9VVV3Ump7GVl5erK1assAXPSy+9tH/IkCGsaR/jlCdRh8j1iAyAgsCggNvtoeedd26QJxxNyBbLWCXRZ4YQ65awbQEIoZQSXdcJpSaxrJqtY4iiAI4jJi8IEEQBAsdR06QQOCTUDEhSzWMiavP5SmIdEUTvia4nBM6xz92EEMydO7fz+eefT7VEzdNPP502b968Duu877zzztzbbrvt4PXXX98JJOoW77zzzpy+ombBggU5V199ddv999/fAgCDBw9Wrr766qKbb765/eGHH073+/3G66+/XgckjFleeuklf/L7zz///O758+cb5557buj000+PXXLJJZ033XRT/h//+MdmQgief/75tCuuuKJXijKDwWAwekMopR9/1UEUihwdyBYJICLhUAYAOgAVJnRiQjM1CMSEoMTRsG0bmj/ZAeVAKyRFA7ojaNi5C41NTVBAkZqfi9TCAsjpqaBeD1RJhMoLMGUJhiBCJwQaBQyaSE+QCQdO16Grn9fV8zwPRVFQX18P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nsegQSUQRQGiaNOl4MJPIk0xpDSiTqQ4joMoCbDZ2IatpmY/1q79N8aMKYUkCRAEm0lkRFGKqA/o2fkKgoCSkpIj3LSGDx+OSy65BOvWrQPAPut2ux12ux0PP/wwHA4HNmzYgGuuuQaJiYmmdGzQoEFRkrXc3FxTyjVmzBg0NjZi1apVR8yjY6PE5ORkc33edNNNqK6uxvTp0/H555/jjjvuMOuHU1NTo9any+Uy1+fAgQMxdepUrF69Gi+//PJR1+c111yD0047DS+88AKWL1+OG2+8EdnZ2SgoKMCdd96JdevWYfbs2dA0Dffddx9sNhucTmen69NoPHrxxRfjq6++wubNm4+YZ0ZGBu655x58++23eOyxx9De3o4HHngALpcLDofDnOc555yD0tJSvPHGG/jHP/6BvLy8Lo1QTnaEs5JMagbADELwBnnhIjJeNGzzzPOcTnDC9te9raaGo5R+1w3jpAHoMT83I2MiyzJqa2uxdetW7N27F6FQCLGxsabeMiUlBYmJiYiJiYHdbjcXfWRTTQORmZpI5xbDzaWpqQk1NTUIBALIz89HUVEREhISorScPM8fAnDMcMiFF16Y17dvX/WTTz6Jv//+++v+9Kc/NQPA7Nmzk+bOnZtSWVm5g2P5epSXlxdcdNFF7RMmTGgfNWrUgC1btmzPy8tTAOAvf/lL2o4dOxyrV6/eO3LkyIL09HRl+fLl+wHghRde6DNz5syMpqambXfddVdqVVWV/d13390/adKk7N27d9s3bdpUBQCvv/56/AMPPJBeXV29/dprr83y+/28McYHH3wQO2HChILKysrKoqKiqBDNq6++mvDss88mf/fdd7sAICYmZvALL7yw//rrr28DgAkTJuQWFhaGnnzyyfrExMRBDz30UN0NN9zQAgAff/xx7HXXXZfn8/mi7H5qa2vFzMzMQWvWrNl11llnBQDgH//4R9+33347YfPmzbtmzZrV97333otfv3797traWrGwsLC4urq6YtmyZXEzZ87MqKqqqjTqZCZMmJB32mmnBebMmRP1flRXV0v9+vUrkWX5e0mSqMvlGvzkk08e+P3vf98CAPPnz4+/4YYb8trb27e4XK4oke4ll1ySO3z48MBDDz3U8M4777gnT57cz+/3b5EkiYZCIS4hIeG0tWvX7mpubhYuu+yy/F27dlUmJSVpADB1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Jk6c6HnuueeiZs6c6TIajcpdd93V/MYbb0TMnj07bcGCBY733nvP1trayuTm5vpLS0t5AFi2bFlCaWlp65dffmlmWRa33npra6j9MgyjXHzxxanXXntt2+uvvx4+bdo0569//Wtnc3Nzr8/Cfffdd/z//b//l9De3s6kpaUFnnzyyehbbrmlmaIoREdHi7/73e+SbrrpphZBEPD999+bVq9efSw3N9e/YcMG25VXXknPmjXL/e6779omTpzojo6Olv761782nnPOORmXXHJJ8jnnnON66aWXIhITEwMxMTHi0qVL29esWRM5e/bstNmzZztfeumlyP4G9+eff37nP/7xj5jbbrutAgCKi4udL774ov3vf//7gIkb+mLKlCneCy+8sGPRokWpS5YsaWlubmaff/55+7Zt28pPdJsAcNdddzUXFBREzJkzJ3XOnDnONWvWRM6YMcOluvqFh4dL5513nmPt2rVRW7duPTTU7f/9739vmD17dvqsWbNGhYeHi/v27TNQFAXVEhRMYmKisHPnTuPKlSvtS5cube9rm0ajUVm+fHnjvffeG3/06FGd1WqVV61aFf3UU0/VDvX4grnuuuscq1atip4yZUr61Vdf3b5+/XobwzC48cYb2wFgypQpruXLlyeUlpa2bt682aSm2tbpdIqiKLj00ktTrr/++rbKykpdZ2cnM2fOHFdKSorwr3/9yz5z5sxR1113Xdv3339v/PTTT60rVqxo7rn/5ORkQRRFaunSpfErVqxouuuuuxpWrFgRV1VVxfn9fnrt2rWRTzzxxEmd45mCmtzk6NGjAPq3cvSH+p05VEKtF7xsMK9DtQWfw2CWBS8P3mYoBrL4DwdDue6hlnEch5SUFJSWlqKwsBAAsHfvXuTm5mrxqi0tLfj8889RX18Pu92O6dOnIzk5Gc8++ywuvfRSzevgxRdfxAUXXACDwYD33nsP7e3tiI2NxfTp05GYmNjtOCoqKrBnzx4sXLgQALB582YwDIMpU6bgmWeeQXJyMqqqqsBxHObPn6+VQuh5HqF+oyVJwgcffID6+nqYTCb4/X6tvaysDLt374bf70dGRgYmTZqEI0eOoKmpCWeffTZcLhdeeeUVXHHFFQgPD8e3334Lm82GpqYm0DSNyspKeDwe5OTkYObMmb2OwWq1Ii0tbVDvyVAxmUzIy8vD/v37u1mg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2tpa2tbWVjpt2jTn448/rp33hg0bwh566KHj7e3tpQ899FDdPffcEw8AX3/9tXHlypXxH3zwQWVTU1NZTk6Oz+Vy9XKR43le2bhxY6XJZJJaWlpKVctLVVWV7vDhwwebm5tLoqOjhcceeywKAFauXGnfsWOH8ciRIwfq6+vLzj///M7FixenBH/mAODOO+9sXb58ecO0adOcLS0tpRUVFdz111+fsnTp0paWlpbSjz/+uOLpp5+2v/jii2EAMH/+/LS8vDxvTU1NWVlZ2aF33nknPNT7EMybb75pbWho4Nrb20saGxvLpk6d6nr11VdH1NWQQCAQCAQC4UzmlBZbUQPvAWgZz1TXrqioKEyaNAkFBQVgWRYdHR0IBALweDxobW2Fy+XS4mlUYQN0DahVi02wlUZ9HcolrS9BEzyvihj1tSp2OI6DTqcbsqhhWVa54447WimKwty5c90pKSn+jRs3mqOjo6W2traS4uJiz/bt2/Vvvvmm1WKxSK2trdpAfP78+Y7ExESRZVllypQp7oaGhkG5DSYmJvp/9atfOQHg6quvdvj9fqqmpoZ77733LEajUbZardI777xjaWxsZDMzM33vvvturzyXN954Y8fu3btNFRUVnKIoWLduXfiNN97YFtxnz549+vLycn1hYaFv/fr15j179ujz8/M9GzZssNntdmnixInuDz/80FJdXc15vV565syZzo0bN5pramrY6upq/oILLnD13O+GDRuqn3/++fqKigrdW2+9ZfV6vXRHR4d23snJyf4FCxY4AWDu3Lmu9vZ2VhAE6n//+5957NixnlmzZnk4jlOWL1/eMug3CcBll13WYbPZZIPBoJx33nnOY8eO6QDg/fffD5swYYLnu+++M3z44Yfm/Px8b0VFhb60tLRfC8lHH31kiYqKEpcsWdJB0zRmzJjhmTVrlvP999+3tba2Mnv27DHefPPNrUajUYmIiJBKSkoOnXfeef0WSB09enSgurqa/+1vf5vw/vvvW5577rn6hx9+uHEo50kgEAgEAoHwc+KUpXTuD4qiIEkSLBYLxo8fD0EQsGfPHjgcjm6xMKoAUmN0KIrS8uWrKZ9D5WoP3o8qUILFC9B3gJMqXnQ6HXQ6HYxGI0wm04Cuaz1JSkoKhIeHaypo1KhR/traWk4URWrJkiUJ7777bnhmZqavqKjIrdPplGCB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5DFjxmSlp6cXDhgwID8nJ6f31q1bdQDw4YcfmgcMGJDbt2/fvISEhOKtW7fqtm3bpsvPzy/o27dvQVxcXJ9rr702LRKJENLn2u324tLS0hyr1drnySefdACAy+VSDRkyJLewsLCgqKiod0lJSV5lZSUNdFz8jxo1qldGRkZhdnZ24YgRI3odPXqUAjpSwiZNmpSRmppanJqaWvTss886Yu3D0qVLLTk5OXIBwdy5c5MTExOLpNePPvpowvTp09MBgGEYcvz48VkFBQW9bTZbn7vuuisZ6BBjBEGUVFdXH6eeXnnllTiLxdJn6NCheTabrc8bb7xhizWOZ555xl5aWprdr1+/vN69e/eOi4vr8/nnnxsHDBiQ27t374KcnJyCXbt2aQHA7/eTN9xwQ2pqamphfn5+76Kiovzvv/9eCwBZWVm9//GPf8h5jJs3b9bZbLZihmGIvLy8go8++sgMABqNpu/999+flJCQUJyXl1fYv3//POnvo7m5mRo8eHBufn5+YVxcXJ+pU6emn3feeXmxxq3w2+H02LBjvwVvfMjI82JdLEu1IK2trWhtbUVbWxvcbjfcbrcsdliWPS5ysG7dul9jN351WJaVzVw8Hg90Oh369++PsWPHIjMzEz6fD263G62trairq8OPP/6IsrIyVFRUoLGxEX6/HxzHydEtkiRRWVmJzZs3Y8uWLVi/fj0yMjJwww03gKZpud5SEpiKqFFQUFBQOCmCIMDhcECj0SAYDMo55B6PB+Fw+LgTCsdxCIZC8AeDYAkBBE2B1mlBazUQCAAqEio1DZVaDZWaBqVRg1arQdE0aDUti5ZYkySkoietVgutVgur1QqCIKDX6zFkyBBs2bIFe/fulYVZT5AEzbJly+KvueYaV1ZWFhu9/LrrrkvPzs5mGhoa9h0+fHh/MBgk77///iQAePzxxxPKy8t1R44c2V9fX18+cuRI39VXX50pXdTs3r3bMHv27LaGhob9zz//fP3NN9+cGeuCHQD+97//WRYvXlzb0NBQfuWVV7qmTp2axbIsAQC7du0y3HXXXc49e/ZUlJSUhK+66qrMCRMmeBobG8v37t1b8cMPP+ifeeYZOwAsWLAg+d13362pqqo68O233x5+//334/x+P7l48WLrMTvsfS0tLfvy8/PDH374oQUAbr/99hSVSiUePXq0vLq6er/dbudu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4uLiQB282AAAIABJREFU4sAwDGpqapCXl4eUlJST7q/VauWkovk333yzoU+fPvnXX3992vLly2tzc3MjBEHghhtuaJs6daoPAMrLy9VlZWVaAEhNTY0MHTo0+MorrzQCgM/nI5ctW2bp1asXu3HjRpSXl+sikQihVqvFUChElJWV6R555JHjXL8AYOfOnXrp+Z49ezRut5saNGhQeNu2bTqC+En25eTkRCKRCPHUU081lZSUMACwbds2XVtbm4phGGL58uXmp556qnnhwoVNe/fu1YwcOTL3008/NRcWFjIWi0VYsWJFdTAYJObNm5e0YMGCpJkzZ1YYDAZh4sSJnrvvvtsFALW1tfSaNWsMNpuN7927d3jjxo3Gm2++uR0ANmzYoO86dokrr7zS+8wzzyRptVqhtLTUV1paGvjLX/6SLIoiMXHiRO9Jf4xuyMzMjJAkKX7++ec10rz//Oc/5sLCQibW+tHf14lIS0uLrFmzxjh27NgA0FE34/f7VYMHDw4DwHXXXef6+9//bk9NTY3MnDkzZpTm2OcdNy87O5vVaDTCypUrjVJUat26dYqg+R0SDAYB4LgO97HEjDTfYDDITYB7Snl5+W8ialiW7RTlOJN0FRTR35UU8ZfqHKVUZekGmRRpia6pkY730VElyaAkFArJ9tLS9gRBAMt2yhg+JZT0MwUFBYWzFOlEkpmZicLCQmg0Grmjs8/ngyAI8kkyHA4jzDDgReGYoCEgABAAgCA6jAFoWk4zk1LHpJQyIqpJW6xJSjWQmrZJz6MLR0mShFqthslkgs1mQ1tbG6qrq8EwjFxbI93hOxEmk0lYunRp7RdffGF97bXX4iwWizB58mT3n//856SVK1cat23bpps2bVqWlL500003tS1btizu7bffth44cEA9a9astGXLltmkiEQoFCLnzp2bXFZWprnttttSsrOzmTFjxgRifXZFRYXur3/9q33Hjh3a+++/P6W0tNTTtb4HAAYNGhQePHhwYO7cuambN2/WrVmzxjBp0qTso0eP0hqNRly8eHHcnXfemXL48GF1TU0NHQwGycLCQqa1tVU1c+bMzJUrVxrr6+vphoYGulevXgwAXHvtta0vv/xywscff2zas2eP5qqrrspYv369gSAI3HTTTa4VK1ZYlixZYv3mm28Mb7zxRkyjAADIyspiU1NT2S+++MI2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";
		}else {
			$('#'+'ma3d-navigation-help-' + MA3D.instanceCounter).dialog('destroy').remove();
		}
	}.bind(this);
	
	var navigationControlGUIHelp = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		cssClass:"ma3d-navigation-toolbar-help",
		appendTo: navigationControlGUIContent
		});
	
	$(navigationControlGUIHelp.buttonElement).button().on('click', onNavigationControlHelp);
	
	//VIEW
	var viewGUI = new MA3D.AccordionItem( {title:"View", state:'open'} );
	accordion.add(viewGUI);
	var viewGUIContent = viewGUI.content;
	
	//fullscreen mode
	var requestFullscreenContainer = new MA3D.ToolContainer({
		indent	: false,
		hr		: true,
		appendTo:viewGUIContent
		});
		
	var requestFullscreen = new MA3D.Button.Fullscreen({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-view-toolbar-fullscreen",
		text		: "Fullscreen mode",
		appendTo	: requestFullscreenContainer.element,
		containerDiv: this.containerDiv,
		scene		: this.scene
	});
	
	//Camera Perspective
	var setPerspectiveContainer = new MA3D.ToolContainer({
		indent	: false,
		hr		: true,
		appendTo:viewGUIContent
		});
	setPerspectiveContainer.element.innerHTML = "Camera Projection:<br>";
	
	var setPerspective = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Perspective", 
		name:"ma3d-setPerspective" + MA3D.instanceCounter ,
		checked:true, 
		appendTo: setPerspectiveContainer.element
		});
	
	var setOrtho = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Ortho", 
		name:"ma3d-setPerspective" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: setPerspectiveContainer.element
		});
	
	$(setPerspectiveContainer.element).buttonset();
	
	$(setOrtho.buttonElement).click(function() {
		this.scene.camera.toOrthographic();
	}.bind(this));
	$(setPerspective.buttonElement).click(function() {
		this.scene.camera.toPerspective();
	}.bind(this));

	//view from
	var setViewFromContainer = new MA3D.ToolContainer({
		indent: false,
		appendTo:viewGUIContent
		});
	setViewFromContainer.element.innerHTML = "View from:<br>";
	
	var setViewFromTop = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		tooltip : "View from top",
		cssClass:"ma3d-view-toolbar-setviewfromtop",
		cssText : "display:block;width:42px;height:42px;margin-left:43px;",
		appendTo: setViewFromContainer.element
		});
	
	$(setViewFromTop.buttonElement).button().click(function() {
		this.scene.viewFrom('top');
	}.bind(this));
	
	var setViewFromLeft = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		tooltip : "View from left",
		cssClass:"ma3d-view-toolbar-setviewfromleft",
		cssText : "width:42px;height:42px;",
		appendTo: setViewFromContainer.element
		});
	
	$(setViewFromLeft.buttonElement).button().click(function() {
		this.scene.viewFrom('left');
	}.bind(this));
	
	var setViewFromFront = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		tooltip : "View from front",
		cssClass:"ma3d-view-toolbar-setviewfromfront",
		cssText : "width:42px;height:42px;",
		appendTo: setViewFromContainer.element
		});
	
	$(setViewFromFront.buttonElement).button().click(function() {
		this.scene.viewFrom('front');
	}.bind(this));
	
	var setViewFromRight = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		tooltip : "View from right",
		cssClass:"ma3d-view-toolbar-setviewfromright",
		cssText : "width:42px;height:42px;",
		appendTo: setViewFromContainer.element
		});
	
	$(setViewFromRight.buttonElement).button().click(function() {
		this.scene.viewFrom('right');
	}.bind(this));
	
	var setViewFromBack = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		tooltip : "View from back",
		cssClass:"ma3d-view-toolbar-setviewfromback",
		cssText : "width:42px;height:42px;",
		appendTo: setViewFromContainer.element
		});
	
	$(setViewFromBack.buttonElement).button().click(function() {
		this.scene.viewFrom('back');
	}.bind(this));
	
	var setViewFromBottom = new MA3D.Button({
		behaviour:"button", 
		style:"icon", 
		tooltip : "View from bottom",
		cssClass:"ma3d-view-toolbar-setviewfrombottom",
		cssText : "width:42px;height:42px;margin-left:43px;",
		appendTo: setViewFromContainer.element
		});
	
	$(setViewFromBottom.buttonElement).button().click(function() {
		this.scene.viewFrom('bottom');
	}.bind(this));
	
	//RENDER OPTIONS
	
	var renderOptionsGUI = new MA3D.AccordionItem( {title:"Render Options", state:'closed'} );
	accordion.add(renderOptionsGUI);
	var renderOptionsGUIContent = renderOptionsGUI.content;
	
	var renderOptionsContainer = new MA3D.ToolContainer({
		indent	: false,
		hr		: true,
		appendTo: renderOptionsGUIContent
	});
	
	// wireframe
	var wireframe = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "text",
		text		: "Wireframe",
		appendTo	: renderOptionsContainer.element
	});
	
	$(wireframe.buttonElement).click(function(e) {

		if (e.target.checked) {
			// box was checked
			this.scene.setWireframe(true);
		} else {
			this.scene.setWireframe(false);
		}
		
	}.bind(this));

	$(renderOptionsContainer.element).append('<br>');
	
	// texture off
	var textureOff = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "text",
		text		: "Texture off",
		appendTo	: renderOptionsContainer.element
	});
	
	$(textureOff.buttonElement).click( function(e) {
		
		if(e.target.checked){
			// box was checked
			this.scene.setTexturing(false);
		}else {
			this.scene.setTexturing(true);
		}
		
	}.bind(this));
	
	// vertex colors off
	var vertexColorsOff = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "text",
		text		: "Vertex Colors off",
		appendTo	: renderOptionsContainer.element
	});
	
	$(vertexColorsOff.buttonElement).click( function(e) {
		
		if(e.target.checked){
			// box was checked
			this.scene.setVertexColors(THREE.NoColors);
		}else {
			this.scene.setVertexColors('default');
		}
		
	}.bind(this));
	
	//ssao screenspace ambient occlusion
	var ssaoContainer = new MA3D.ToolContainer({
		hr:true,
		indent:false,
		appendTo: renderOptionsGUIContent
	});
		var ssaoButton = new MA3D.Button({
		behaviour	: 'checkbox',
		text		: 'Screen Space Ambient Occlusion',
		style		: 'text',
		checked		: false,
		appendTo	: ssaoContainer.element
	});
	$(ssaoButton.buttonElement).on('change', function(event) {
		if(event.target.checked){
			this.ssaoControl = new GIScene.Control.SSAO();
			this.scene.addControl(this.ssaoControl);
			this.ssaoControl.activate();
		}else{
			this.ssaoControl.deactivate();
			this.scene.removeControl(this.ssaoControl);
			this.ssaoControl = null;
		}
	}.bind(this));
	
	
	//edge detection
	var edgeDetectionContainer = new MA3D.ToolContainer({
		hr:true,
		indent:false,
		appendTo: renderOptionsGUIContent
	});
	
	var edgeButton = new MA3D.Button({
		behaviour	: 'checkbox',
		text		: 'Edge Detection Filter (Frei-Chen)',
		style		: 'text',
		checked		: false,
		appendTo	: edgeDetectionContainer.element
	});
	
	//edge detection properties container
	var edgeDetectionPropertiesContainer = new MA3D.ToolContainer({
		cssText : "display:none;",
		appendTo: edgeDetectionContainer.element
	});
	edgeDetectionPropertiesContainer.element.textContent = "Edge Intensity:";
	
	$(edgeButton.buttonElement).on('change', function(event) {
		if(event.target.checked){
			if(!this.edgeDetectionControl ){
				this.edgeDetectionControl = new GIScene.Control.EdgeDetectionFreiChen();
				this.edgeDetectionControl.setIntensity(5);
			}
			this.scene.addControl(this.edgeDetectionControl);
			this.edgeDetectionControl.activate();
			
			//properties container content
			if( $(edgeDetectionPropertiesContainer.element).children().length == 0) {
				var sliderElement = document.createElement('div');
				$(sliderElement).slider({
					min:0.1,
					max:50,
					step:0.01,
					value:this.edgeDetectionControl.getIntensity(),
					animate: true,
					slide: function(e,ui) {this.edgeDetectionControl.setIntensity(ui.value);}.bind(this)
				});
				$(edgeDetectionPropertiesContainer.element).append(sliderElement);
				
				var thresholdSliderLabel = document.createElement('div');
				thresholdSliderLabel.innerHTML = "<div>Greyscale <---> Black/White:</div>";
				$(edgeDetectionPropertiesContainer.element).append(thresholdSliderLabel);
				
				var thresholdSliderElement = document.createElement('div');
				$(thresholdSliderElement).slider({
					min:0.01,
					max:1,
					step:0.01,
					value:this.edgeDetectionControl.getThreshold(),
					animate: true,
					slide: function(e,ui) {this.edgeDetectionControl.setThreshold(ui.value);}.bind(this)
				});
				$(edgeDetectionPropertiesContainer.element).append(thresholdSliderElement);
				
				var edgeInvertButton = new MA3D.Button({
					text:'Invert Colors',
					type:'text',
					behaviour:'checkbox',
					cssText: 'margin-top:5px;', 
					appendTo: edgeDetectionPropertiesContainer.element
				});
				$(edgeInvertButton.buttonElement).on('change', function(event){
					
						this.edgeDetectionControl.invert();
					
				}.bind(this));
			}
			$(edgeDetectionPropertiesContainer.element).slideDown();
		}else{
			this.edgeDetectionControl.deactivate();
			this.scene.removeControl(this.edgeDetectionControl);
			//this.edgeDetectionControl = null;
			$(edgeDetectionPropertiesContainer.element).slideUp();
		}
	}.bind(this));
	
	
	//renderfaces
	var renderFacesContainer = new MA3D.ToolContainer({
		indent	: false,
		hr		: true,
		appendTo: renderOptionsGUIContent
	});
	
	renderFacesContainer.element.innerHTML = "Render faces:<br>";
	
	//face side
	
	var faceSideDefault = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Default", 
		name:"ma3d-renderoptions-faceside" + MA3D.instanceCounter ,
		checked:true, 
		appendTo: renderFacesContainer.element
		});
	
	var faceSideFront = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Front", 
		name:"ma3d-renderoptions-faceside" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: renderFacesContainer.element
		});
		
	var faceSideBack = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Back", 
		name:"ma3d-renderoptions-faceside" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: renderFacesContainer.element
		});	
	
	var faceSideDouble = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Double", 
		name:"ma3d-renderoptions-faceside" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: renderFacesContainer.element
		});
		
	$(faceSideDefault.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.scene.setFaceCulling('default');
		}
	}.bind(this));
	$(faceSideFront.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.scene.setFaceCulling(THREE.FrontSide);
		}
	}.bind(this));
	$(faceSideBack.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.scene.setFaceCulling(THREE.BackSide);
		}
	}.bind(this));
	$(faceSideDouble.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.scene.setFaceCulling(THREE.DoubleSide);
		}
	}.bind(this));
	
		
	//face shading
	// renderFacesContainer.element.innerHTML += "<br>";
	
	var faceSideDefault = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Default", 
		name:"ma3d-renderoptions-faceshading" + MA3D.instanceCounter ,
		checked:true, 
		appendTo: renderFacesContainer.element
		});
	
	var faceSideFlat = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Flat", 
		name:"ma3d-renderoptions-faceshading" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: renderFacesContainer.element
		});
	
	var faceSideSmooth = new MA3D.Button({
		behaviour:"radio", 
		style:"text", 
		text:"Smooth", 
		name:"ma3d-renderoptions-faceshading" + MA3D.instanceCounter ,
		checked:false, 
		appendTo: renderFacesContainer.element
		});
		
		
	$(faceSideDefault.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.scene.setShading('default');
		}
	}.bind(this));	
	$(faceSideFlat.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.scene.setShading(THREE.FlatShading);
		}
	}.bind(this));
	$(faceSideSmooth.buttonElement).on('change', function(e) {
		if(e.target.checked){
			this.scene.setShading(THREE.SmoothShading);
		}
	}.bind(this));
	
	$(renderFacesContainer.element).buttonset();
	
	// change background color
	var changeBackgroundColorContainer = new MA3D.ToolContainer({
		indent	: false,
		hr		: false,
		appendTo: renderOptionsGUIContent
	});
	
	var changeBackgroundColor = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "text",
		text		: "Change background color",
		appendTo	: changeBackgroundColorContainer.element,
	});
	
	var changeBackgroundColorPickerContainer = new MA3D.ToolContainer({
		indent	: true,
		hr		: false,
		cssText	: "margin: 5px 0 0 5px;display:none;",
		appendTo: changeBackgroundColorContainer.element
	});
	
	$(changeBackgroundColor.buttonElement).click( function(e) {
		if(e.target.checked){
			// box was checked
			
			if($(changeBackgroundColorPickerContainer.element).children().length == 0){
				this.backgroundColors = [
										0x000000, 0x333333, 0x666666, 0x999999, 0xcccccc, 0xffffff,	
										0x000033, 0x003333, 0x003300, 0x333300, 0x330000, 0x330033,
										0x9999dd, 0x87cefa, 0x99dd99, 0xdddd99, 0xdd9999, 0xdd99dd
										];
				var backgroundColorColums = 6;
				var backgroundColorFieldSize = 16;
				changeBackgroundColorPickerContainer.element.style.width = backgroundColorColums * backgroundColorFieldSize + backgroundColorColums + "px";
				changeBackgroundColorPickerContainer.element.style.borderLeft = '1px solid black';
				changeBackgroundColorPickerContainer.element.style.borderTop = '1px solid black';
				for(var i=0,l=this.backgroundColors.length;i<l;i++){
					var element = document.createElement('div');
					element.style.backgroundColor = "#" + (this.backgroundColors[i] = new THREE.Color(this.backgroundColors[i])).getHexString();
					element.style.cssFloat 	= 'left';
					element.style.height 	= backgroundColorFieldSize + 'px';
					element.style.width 	= backgroundColorFieldSize + 'px';
					element.style.cursor 	= 'pointer';
					element.style.borderBottom	= '1px solid black';
					element.style.borderRight	= '1px solid black';
					element.onclick = function(event) {
							var i = $(event.target).index();
							this.scene.renderer.setClearColor(this.backgroundColors[i]);
						}.bind(this);
					$(changeBackgroundColorPickerContainer.element).append(element);
				}
				var element = document.createElement('div');
				element.style.clear = 'both';
				$(changeBackgroundColorPickerContainer.element).append(element);
			}
			$(changeBackgroundColorPickerContainer.element).slideDown();
		}else {
			$(changeBackgroundColorPickerContainer.element).slideUp();
		}
	}.bind(this));
	
	//TOOLS
	
	var toolsGUI  = new MA3D.AccordionItem( {title:"Tools", state: 'open'});
	accordion.add(toolsGUI);
	var toolsGUIContent = toolsGUI.content;
	
	// Interactive Illumination
	
	var toolsGUICamLightContainer = new MA3D.ToolContainer({
		indent		: false,
		hr			: true,
		appendTo	: toolsGUIContent
	});
	
	var toolsGUICamLight = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-lamp",
		text		: "Interactive Illumination",
		appendTo	: toolsGUICamLightContainer.element
	});
	
	//Intensity Slider Container
	var toolsGUICamLightIntensityContainer = new MA3D.ToolContainer({
		cssText : "display:none;",
		appendTo: toolsGUICamLightContainer.element
	});
	var toolsGUICamLightIntensityContainerDiv = toolsGUICamLightIntensityContainer.element;
	toolsGUICamLightIntensityContainerDiv.textContent = "Light Intensity:";
	
	$(toolsGUICamLight.buttonElement).button().on('change', function(e) {
		if (e.target.checked) {
			// box was checked
			this.cameraLightControl.activate();
			
			if( $(toolsGUICamLightIntensityContainerDiv).children().length == 0) {
				var sliderElement = document.createElement('div');
				$(sliderElement).slider({
					min:0.1,
					max:1,
					step:0.01,
					value:this.cameraLightControl.light.intensity,
					animate: true,
					slide: function(e,ui) {this.cameraLightControl.light.intensity = ui.value;}.bind(this)
				});
				$(toolsGUICamLightIntensityContainerDiv).append(sliderElement);
			}
			$(toolsGUICamLightIntensityContainerDiv).slideDown();
		} else {
			this.cameraLightControl.deactivate();
			$(toolsGUICamLightIntensityContainerDiv).slideUp();
		}
	}.bind(this));
	
	//Get Feature Info
	var toolsGUIGetFeatureInfoContainer = new MA3D.ToolContainer({
		indent	: false,
		hr		: true,
		appendTo: toolsGUIContent
	});
	
	var toolsGUIGetFeatureInfo = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-info",
		text		: "Get Feature Info",
		appendTo	: toolsGUIGetFeatureInfoContainer.element
	});
	
	//container
	var toolsGUIGetFeatureInfoOutputContainer = new MA3D.ToolContainer({
		cssText : "display:none;",
		appendTo: toolsGUIGetFeatureInfoContainer.element
	});
	var toolsGUIGetFeatureInfoOutputContainerDiv = toolsGUIGetFeatureInfoOutputContainer.element;
	
	//textfield
	var toolsGUIGetFeatureInfoOutput = new MA3D.Textfield({
		label:"Name: ",
		value:"selected object",
		appendTo: toolsGUIGetFeatureInfoOutputContainerDiv
	});
	var toolsGUIGetFeatureInfoOutputElement = toolsGUIGetFeatureInfoOutput.element;
	
	$(toolsGUIGetFeatureInfo.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			// this.selectControl.selectables = (layerTree.activeLayer)? layerTree.activeLayer.root.getDescendants() : [];
			this.selectControl.selectables = this.scene.layers[0].root.getDescendants();
			this.selectControl.activate();
			var onSelected = function(event) {toolsGUIGetFeatureInfoOutputElement.value = event.content.name;}.bind(this);
			var onUnselected = function(event) {toolsGUIGetFeatureInfoOutputElement.value = 'selected object';}.bind(this);
			this.selectControl.addEventListener('highlighted', onSelected);
			this.selectControl.addEventListener('unhighlighted', onUnselected);
			$(toolsGUIGetFeatureInfoOutputContainerDiv).slideDown();
		} else {
			this.selectControl.removeEventListener('highlighted', onSelected);
			this.selectControl.removeEventListener('unhighlighted', onUnselected);
			this.selectControl.deactivate();
			$(toolsGUIGetFeatureInfoOutputContainerDiv).slideUp();
		}
	}.bind(this));
	
	//Pick Coordinate
	var toolsGUIPickCoordinatesContainer = new MA3D.ToolContainer({
		indent	: false,
		hr		: true,
		appendTo: toolsGUIContent
	});
	
	var toolsGUIPickCoordinates = new MA3D.Button({
		behaviour	: "checkbox",
		style		: "icon-text",
		cssClass	: "ma3d-tools-toolbar-pick",
		text		: "Pick Coordinates",
		appendTo	: toolsGUIPickCoordinatesContainer.element
	});
	
	//container
	var toolsGUIPickCoordinatesOutputContainer = new MA3D.ToolContainer({
		cssText : "display:none;text-align:right",
		appendTo: toolsGUIPickCoordinatesContainer.element
	});
	var toolsGUIPickCoordinatesOutputContainerDiv = toolsGUIPickCoordinatesOutputContainer.element;
	//output x y z
	//textfield X
	var toolsGUIPickCoordinatesOutputX = new MA3D.Textfield({
		label:"X: ",
		appendTo: toolsGUIPickCoordinatesOutputContainerDiv
	});
	var toolsGUIPickCoordinatesOutputXElement = toolsGUIPickCoordinatesOutputX.element;
	
	//textfield Y
	var toolsGUIPickCoordinatesOutputY = new MA3D.Textfield({
		label:"Y: ",
		appendTo: toolsGUIPickCoordinatesOutputContainerDiv
	});
	var toolsGUIPickCoordinatesOutputYElement = toolsGUIPickCoordinatesOutputY.element;
	
	//textfield Z
	var toolsGUIPickCoordinatesOutputZ = new MA3D.Textfield({
		label:"Z: ",
		appendTo: toolsGUIPickCoordinatesOutputContainerDiv
	});
	var toolsGUIPickCoordinatesOutputZElement = toolsGUIPickCoordinatesOutputZ.element;
	
	$(toolsGUIPickCoordinates.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			$(toolsGUIPickCoordinatesOutputContainerDiv).slideDown();
			this.pickControl.pickables = this.scene.root.getDescendants();
			this.pickControl.activate();
			var onClick = function(event) {
				if(event.content){
					var point = new GIScene.Coordinate3().fromVector3(event.content.point.clone().add(this.scene.config.offset.toVector3()));
					
					toolsGUIPickCoordinatesOutputXElement.value = point.x.toFixed(6);
					toolsGUIPickCoordinatesOutputYElement.value = point.y.toFixed(6);
					toolsGUIPickCoordinatesOutputZElement.value = point.z.toFixed(6);
				}
			};
			this.pickControl.addEventListener('click', onClick);
		}else{
			toolsGUIPickCoordinatesOutputXElement.value = 
			toolsGUIPickCoordinatesOutputYElement.value = 
			toolsGUIPickCoordinatesOutputZElement.value = "";
			$(toolsGUIPickCoordinatesOutputContainerDiv).slideUp();
			this.pickControl.removeEventListener('click', onClick);
			this.pickControl.deactivate();
			
		}
	}.bind(this));;

	//Measure Distance
	var toolsGUIMeasure = new MA3D.Button({
		behaviour	: 'checkbox',
		style		: 'icon-text',
		cssClass	: 'ma3d-tools-toolbar-measure',
		text		: 'Measure',
		appendTo	: toolsGUIContent
	});
	
	//measure Clear button
	var toolsGUIMeasureClear = new MA3D.Button({
		behaviour	: 'button',
		style		: 'text',
		text		: 'Clear',
		appendTo	: toolsGUIContent
	});
	
	//output container
	var toolsGUIMeasureContainer = new MA3D.ToolContainer({
		indent: false,
		cssText: "display:none;text-align:right;",
		appendTo: toolsGUIContent
	});
	var toolsGUIMeasureContainerDiv = toolsGUIMeasureContainer.element;
	
	//output distance and compass
	var toolsGUIMeasureOutputDistance = new MA3D.Textfield({
		label:"Distance: ",
		value :"-" + "m",//@TODO this.scene.config.units,
		cssText:"width:120px;",
		appendTo: toolsGUIMeasureContainerDiv
	});
	var toolsGUIMeasureOutputDistanceElement = toolsGUIMeasureOutputDistance.element;
	
	var toolsGUIMeasureOutputCompass = new MA3D.Textfield({
		label:"Compass Dir.: ",
		value :"-°",
		cssText:"width:120px;",
		appendTo: toolsGUIMeasureContainerDiv
	});
	var toolsGUIMeasureOutputCompassElement = toolsGUIMeasureOutputCompass.element;
	if(!isGeoref){
		toolsGUIMeasureOutputCompassElement.style.display = 'none';
		toolsGUIMeasureOutputCompass.labelElement.style.display = 'none';
	}
	
	$(toolsGUIMeasure.buttonElement).button().on('change', function(e) {
		if(e.target.checked){
			$(toolsGUIMeasureContainerDiv).slideDown();
			this.measureControl.measureables = this.scene.root.getDescendants();
			this.measureControl.activate();
			var onClick = function(event) {
				
				var distance 	 = event.content.distance;
				var angleToNorth = event.content.angleToNorth;
				toolsGUIMeasureOutputDistanceElement.value = distance.toFixed(3) + this.scene.config.units;
				toolsGUIMeasureOutputCompassElement.value = angleToNorth.toFixed(3) + "°";
				// console.log(event.content.angleToNorth);
				
			};
			this.measureControl.addEventListener('measure', onClick);
		}else{
			$(toolsGUIMeasureContainerDiv).slideUp();
			toolsGUIMeasureOutputDistanceElement.value = "-" + this.scene.config.units;
			this.measureControl.removeEventListener('measure', onClick);
			this.measureControl.deactivate();
			
		}
	}.bind(this));
	
	var onClear = function() {
		if(this.measureControl.isActive){
			toolsGUIMeasureOutputDistanceElement.value = "-" + this.scene.config.units;
			toolsGUIMeasureOutputCompassElement.value = "-°";
			this.measureControl.deactivate();
			this.measureControl.activate();
			this.measureControl.measureables = this.scene.root.getDescendants();
		}
	}.bind(this);
	$(toolsGUIMeasureClear.buttonElement).button().click(onClear);

	//Screenshot
	//add horizontal seperator
	toolsGUIContent.appendChild(document.createElement('hr'));
	
	//Screenshot
	var toolsGUIScreenshotContainer = new MA3D.ToolContainer({
		appendTo	: toolsGUIContent,
		indent		: false,
		id			: 'ma3d-tools-screenshot-container-'+ this.id
	});
	// the screenshot button itself will be appended later when this.scene was initialized

	//CONSOLE
	var consoleGUI = new MA3D.AccordionItem({title:"Console", state:"open"});
	accordion.add(consoleGUI);
	var consoleGUIContent = consoleGUI.content;
	
	//console:
	var consoleGUIContainer = new MA3D.ToolContainer({
		indent	: false,
		appendTo: consoleGUIContent
	});
	consoleGUIContainer.element.innerHTML = "<div id='ma3d-console-"+ this.id +"'></div>";
	
	


	//add GIscene
	var config = {
		//canvas size
		//width: 800,
		//height: 400,

		//camera params
		near : 0.1,
		far : 20000,

		//scene options
		// center : new THREE.Vector3(0, 0, 0),
		// spatialReferenceSystem : 'EPSG:32616', //not yet used UTM16N???-->EPSG:32616
		units : 'm', //used for GIScene.Control.Measure
		// offset : new THREE.Vector3(0,0,0),//new THREE.Vector3(269500, 550, -1641500), //not yet used offset is used to keep coordinates short.
		skyColor : new THREE.Color(0x000033)
	};

	this.scene = new GIScene.Scene('ma3d-canvascontainer-'+this.id, config);

	//set initial Lighting
	this.scene.directionalLight.position.set(0, 1, 0.5);
	//this.scene.setCenter(new THREE.Vector3(0, 200, 0),null,0);

	//navigation
	// orbitControl = new GIScene.Control.OrbitZoomPan(this.scene.camera, this.scene.containerDiv);
	// this.scene.addControl(orbitControl);
	// orbitControl.activate();
// 	
	// trackballControl = new GIScene.Control.Trackball(this.scene.camera, this.scene.containerDiv);
	// this.scene.addControl(trackballControl);
	// trackballControl.activate();
	
	
	//loadIndicaor
	var loadIndicator = new GIScene.Control.LoadIndicator();
	this.scene.addControl(loadIndicator);
	loadIndicator.activate();
	//cameraCoords
	var camCoordsControl = new GIScene.Control.ObjectPosition(this.scene.camera);
	this.scene.addControl(camCoordsControl);
	camCoordsControl.activate();
	//compass
	var compassControl = new GIScene.Control.Compass(this.scene.camera);
	this.scene.addControl(compassControl);
	compassControl.activate();
	//axisHelper 
	var axisHelperControl = new GIScene.Control.AxisHelper(this.scene.camera);
	this.scene.addControl(axisHelperControl);
	// axisHelperControl.activate();
	//select
	this.selectControl = new GIScene.Control.Select([], this.scene.camera, {hover:false,highlightOnly:true,toggle:true});
	this.scene.addControl(this.selectControl);
	//pick coordinate
	this.pickControl = new GIScene.Control.Pick(this.scene.camera);
	this.scene.addControl(this.pickControl);
	//measure distance
	this.measureControl = new GIScene.Control.Measure(this.scene.camera, {color: new THREE.Color(0xff7700)});
	this.scene.addControl(this.measureControl);
	//interactive lighting
	this.cameraLightControl = new GIScene.Control.CameraLight(this.scene.camera, this.scene.directionalLight);
	this.scene.addControl(this.cameraLightControl);
	this.cameraLightControl.addEventListener("panstart", function() {
		this.navigationControl.deactivate();
	}.bind(this));
	this.cameraLightControl.addEventListener("panend", function() {
		this.navigationControl.activate();
	}.bind(this));
	//navigation
	var navigationControlConfig = {
		modes 		: ["PanOrbitZoomCenter", "Trackball", "Walk"],
		activeMode  : "PanOrbitZoomCenter"
	};
	this.navigationControl = new MA3D.NavigationControl(this.scene.camera, this.scene.containerDiv, this.scene, navigationControlConfig);
	this.navigationControl.activate();
	
	
	//Screenshot button
	var toolsGUIScreenshot = new MA3D.Button.Screenshot({
		appendTo	: toolsGUIScreenshotContainer.element,
		containerDiv: this.containerDiv,
		scene		: this.scene,
		style		: 'icon-text',
		cssClass	: 'ma3d-tools-toolbar-screenshot'
	});
	
	// scene.toggleDebugView();

	this.setGeoreferenceMode = function(isGeoreferenced) {
		if(isGeoreferenced){
			if(axisHelperControl.isActive)axisHelperControl.deactivate();
			if(!camCoordsControl.isActive)camCoordsControl.activate();
			if(!compassControl.isActive)compassControl.activate();
		}
		else {
			if(camCoordsControl.isActive)camCoordsControl.deactivate();
			if(compassControl.isActive)compassControl.deactivate();
			if(!axisHelperControl.isActive)axisHelperControl.activate();
		}
	};

	var onload = function(event) {
		// console.log('sov:onload');
		
		// alert('sov:layer:onload');
		//this.scene.setCenter(new THREE.Vector3(0,0,0), new THREE.Vector3(0,200,0),0);
		//Center on BoundingBoxCenter
		// console.log("setCenter "+event.content.boundingBox.center().toArray().toString());
		// console.log(event.content.boundingBox.getBoundingSphere().radius, event.content.boundingBox.getBoundingSphere().radius);
		this.scene.setCenter(event.content.boundingBox.center(), new THREE.Vector3(0, 0 /*event.content.boundingBox.getBoundingSphere().radius*/, event.content.boundingBox.getBoundingSphere().radius*2));
		// console.log("scene.center " + this.scene.center.toArray().toString());
		// console.log("camtarget.position "+this.scene.camera.localToWorld(this.scene.camera.target.position.clone()).toArray().toString());
		//Center on Mean
		// this.scene.setCenter(GIScene.Utils.computeVertexMeanRecursive(event.content.root), new THREE.Vector3(0, event.content.boundingBox.getBoundingSphere().radius, event.content.boundingBox.getBoundingSphere().radius));
		
		// var isGeoref = (("georef" in params)? params.georef !== "false" : (this.georef !=null)? this.georef : true);
		// this.setGeoreferenceMode(isGeoref);
		
	}.bind(this);
	
	
	//check if url and format is specified
	if ("url" in params && "format" in params) {
		var gisceneFormat;
		switch (params.format) {
			case 'json':
				gisceneFormat = GIScene.Format.JSON;
				break;
			case 'scene':
				gisceneFormat = GIScene.Format.Scene;
				break;
			case 'ctm':
				gisceneFormat = GIScene.Format.CTM;
				break;
			default:
				alert('The specified format: ' + params.format + ' is not supported');
		}

		var layerParams = {
			url : params.url,
			format : gisceneFormat,
			verticalAxis : ((("verticalAxis" in params)? params.verticalAxis : (this.verticalAxis !=null)? this.verticalAxis : "Y").toUpperCase() == "Z")? "Z" : "Y",
			listeners:[{'load':onload}]
			//("verticalAxis" in params && params.verticalAxis.toUpperCase() == "Z") ? "Z" : "Y"
		};
		var layer = new GIScene.Layer.Fixed(layerParams.url.split('/').pop(), layerParams);
		// layer.addEventListener('load', onload);
		this.scene.addLayer(layer);
		
		//check georeferncing mode
		// var isGeoref = (("georef" in params)? params.georef !== "false" : (this.georef !== null)? this.georef : true);
		this.setGeoreferenceMode(isGeoref);	
		// segmented section mode (Get Feature Info)
		// var isSegmented = (("segmented" in params)? params.segmented !== "false" : (this.segmented !== null)? this.segmented : true);
		if(isSegmented) {console.log('isSegmented');var selectSegmentedModel = new MA3D.SelectSegmentedModel(this, toolsGUIGetFeatureInfoOutputContainerDiv, toolsGUIGetFeatureInfo.buttonElement);}
				
		$('#ma3d-console-'+this.id).text(layer.name).addClass('ui-widget');
	} else {
		var confirmed = confirm('To load a model automatically you need to specify two parameters in the URL:\n\nurl: path from where the model can be downloaded\nformat: one of the following ( json | scene | ctm )\nverticalAxis: one of ( z | y ) [optional]\n\n Do you wand to load a default model instead?');
		if (confirmed) {
			var layerParams = {
				//url : 'http://mayaarch3d.org/gs/json/1234/geom_buildings/10L-22/children',
				url : 'http://www.mayaarch3d.org/dev/examples/data/models/10L-22_children.json',
				format : GIScene.Format.Scene,
				listeners:[{'load':onload}]
			};

			var layer = new GIScene.Layer.Fixed(layerParams.url.split('/').pop(), layerParams);
			// layer.addEventListener('load', onload);
			this.scene.addLayer(layer);
			$('#ma3d-console-'+this.id).text(layer.name).addClass('ui-widget');
		}
	}
	
	//prevent scrolling the parent if used in iframe
	if(window.parent != window){ //same if not used in frame
		function preventDefault(e) {
			console.log('preventDefault');
		  	e = e || window.event;
		  	if (e.preventDefault)
		    	e.preventDefault();
		  	e.returnValue = false;  
		}
		
		var parentNoScroll = function () {
			// console.log("noscroll");
			window.addEventListener("DOMMouseScroll", preventDefault, false);
   			window.addEventListener("mousewheel", preventDefault, false);
   			window.addEventListener("MozMousePixelScroll", preventDefault, false);
   			// window.parent.onwheel = preventDefault;
   			// window.parent.document.body.className += " sov_noscroll";
   			// window.parent.onscroll = function() {
			    // window.parent.scrollTo(window.parent.scrollX, window.parent.scrollY);
			// };
		}.bind(window.parent);
		
		var parentScroll = function () {
			// console.log('scroll');
			window.removeEventListener("DOMMouseScroll", preventDefault, false);
   			window.removeEventListener("mousewheel", preventDefault, false);
   			window.removeEventListener("MozMousePixelScroll", preventDefault, false);
   			// window.parent.onwheel = undefined;
   			// window.parent.document.body.classList.remove("sov_noscroll");
   			// window.parent.onscroll = null;
		}.bind(window.parent);
		
		this.scene.containerDiv.addEventListener("mouseenter", parentNoScroll, false);	
   		this.scene.containerDiv.addEventListener("mouseleave", parentScroll, false);
   		
   		//prepare iframe to be fullscreen enabled
   		if(window.frameElement) window.frameElement.allowFullscreen = true;
	}
	
};
