import { Injectable } from '@angular/core';

@Injectable()
export class ImprimirService {

  private imprimir:any[] = [
    [
      {
        "id": 1,
        "indicador": {
          "id": 1
        },
        "clave": "O1",
        "nombre": "Incrementar la productividad de las unidades económicas del Estado de Oaxaca",
        "numero": "1",
        "estrategia": [
          {
            "id": 3,
            "indicador": {
              "id": 1
            },
            "objetivo": {
              "id": 1
            },
            "clave": "O1E3",
            "nombre": "Coordinar mecanismos y acciones en materia administrativa, legal y de mejora regulatoria con los tres órdenes de gobierno para mejorar el ambiente de negocios en la entidad",
            "numero": "1.3",
            "lineasAccion": [
              {
                "id": 17,
                "indicador": {
                  "id": 19
                },
                "clave": "O1E3L3",
                "estrategia": {
                  "id": 3
                },
                "nombre": "Coadyuvar con la Autoridad Federal y la COFEMER en la integración del catálogo único de trámites",
                "numero": "1.3.3"
              },
              {
                "id": 15,
                "indicador": {
                  "id": 4
                },
                "clave": "O1E3L1",
                "estrategia": {
                  "id": 3
                },
                "nombre": "Ejecutar acuerdos de colaboración con dependencias públicas y privadas para crear las condiciones de un ambiente favorable de hacer negocios en el estado de Oaxaca",
                "numero": "1.3.1"
              },
              {
                "id": 18,
                "indicador": {
                  "id": 20
                },
                "clave": "O1E3L4",
                "estrategia": {
                  "id": 3
                },
                "nombre": "Coordinar con la Autoridad Federal de Zonas Económicas Especiales y la COFEMER talleres de capacitación a funcionarios públicos estatales y municipales sobre la operación de la ventanilla única",
                "numero": "1.3.4"
              },
              {
                "id": 16,
                "indicador": {
                  "id": 19
                },
                "clave": "O1E3L2",
                "estrategia": {
                  "id": 3
                },
                "nombre": "Crear en coordinación con los tres órdenes de gobierno una plataforma que permita a los empresarios ejecutar diversos trámites y procesos administrativos necesarios para la operación de sus unidades económicas",
                "numero": "1.3.2"
              }
            ]
          },
          {
            "id": 1,
            "indicador": {
              "id": 3
            },
            "objetivo": {
              "id": 1
            },
            "clave": "O1E1",
            "nombre": "Impartir capacitaciones a empresarios y emprendedores",
            "numero": "1.1",
            "lineasAccion": [
              {
                "id": 2,
                "indicador": {
                  "id": 5
                },
                "clave": "O1E1L2",
                "estrategia": {
                  "id": 1
                },
                "nombre": "Gestionar con autoridades locales la ejecución de las capacitaciones",
                "numero": "1.1.2"
              },
              {
                "id": 4,
                "indicador": {
                  "id": 7
                },
                "clave": "O1E1L4",
                "estrategia": {
                  "id": 1
                },
                "nombre": "Gestionar los proyectos de inversión necesarios para el desarrollo del programa de capacitaciones",
                "numero": "1.1.4"
              },
              {
                "id": 1,
                "indicador": {
                  "id": 4
                },
                "clave": "O1E1L1",
                "estrategia": {
                  "id": 1
                },
                "nombre": "Establecer acuerdos de colaboración con entidades certificadas en el desarrollo de capacidades a unidades económicas",
                "numero": "1.1.1"
              },
              {
                "id": 3,
                "indicador": {
                  "id": 6
                },
                "clave": "O1E1L3",
                "estrategia": {
                  "id": 1
                },
                "nombre": "Difundir las bases, contenidos y fechas de los programas de capacitacion",
                "numero": "1.1.3"
              }
            ]
          },
          {
            "id": 2,
            "indicador": {
              "id": 8
            },
            "objetivo": {
              "id": 1
            },
            "clave": "O1E2",
            "nombre": "Proporcionar asesorias y asistencia técnica a unidades económicas y emprendedores del Estado",
            "numero": "1.2",
            "lineasAccion": [
              {
                "id": 6,
                "indicador": {
                  "id": 10
                },
                "clave": "O1E2L2",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Colaborar en la creación de cooperativas con el grupo de mujeres vulnerables participantes en los cursos SNEO e ICAPET",
                "numero": "1.2.2"
              },
              {
                "id": 10,
                "indicador": {
                  "id": 14
                },
                "clave": "O1E2L6",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Gestionar la actualización de información referente a la situación de las concesiones mineras",
                "numero": "1.2.6"
              },
              {
                "id": 9,
                "indicador": {
                  "id": 13
                },
                "clave": "O1E2L5",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Difundir información sobre diversos beneficios principalmente fiscales en las distintas zonas estratégicas",
                "numero": "1.2.5"
              },
              {
                "id": 11,
                "indicador": {
                  "id": 15
                },
                "clave": "O1E2L7",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Ejecutar capaña de difusión de los beneficios de las actividades mineras",
                "numero": "1.2.7"
              },
              {
                "id": 13,
                "indicador": {
                  "id": 17
                },
                "clave": "O1E2L9",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Impulsar la integración de las empresas de proveeduría local a las cadenas de valor",
                "numero": "1.2.9"
              },
              {
                "id": 7,
                "indicador": {
                  "id": 11
                },
                "clave": "O1E2L3",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Difundir información sobre los beneficios de la participación en la economía social",
                "numero": "1.2.3"
              },
              {
                "id": 12,
                "indicador": {
                  "id": 16
                },
                "clave": "O1E2L8",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Generar acuerdos de colaboración entre empresas y localidades mineras",
                "numero": "1.2.8"
              },
              {
                "id": 8,
                "indicador": {
                  "id": 12
                },
                "clave": "O1E2L4",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Ejecutar de convenios intergubernamentales para generar incentivos dirigidos a los empresarios locales",
                "numero": "1.2.4"
              },
              {
                "id": 5,
                "indicador": {
                  "id": 9
                },
                "clave": "O1E2L1",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Vincular a los estudiantes que desarrollan su servicio social y practicas profecionales con las unidades ecónomicas que solicitan asesorías",
                "numero": "1.2.1"
              },
              {
                "id": 14,
                "indicador": {
                  "id": 18
                },
                "clave": "O1E2L10",
                "estrategia": {
                  "id": 2
                },
                "nombre": "Impulsar la aplicación de las normas ambientales en los procesos de producción de la industria local",
                "numero": "1.2.10"
              }
            ]
          }
        ]
      }
    ],
    [
      {
        "id": 2,
        "indicador": {
          "id": 1
        },
        "clave": "O2",
        "nombre": "Aumentar la ejecución de inversión privada en la entidad",
        "numero": "2",
        "estrategia": [
          {
            "id": 4,
            "indicador": {
              "id": 1
            },
            "objetivo": {
              "id": 2
            },
            "clave": "O2E1",
            "nombre": "Atraer inversionistas a la entidad",
            "numero": "2.1",
            "lineasAccion": [
              {
                "id": 19,
                "indicador": {
                  "id": 21
                },
                "clave": "O2E1L1",
                "estrategia": {
                  "id": 4
                },
                "nombre": "Fomentar la participación de los tres niveles de gobierno en el desarrollo de un ambiente de negocios atractivo para la inversión",
                "numero": "2.1.1"
              },
              {
                "id": 20,
                "indicador": {
                  "id": 22
                },
                "clave": "O2E1L2",
                "estrategia": {
                  "id": 4
                },
                "nombre": "Integrar el catálogo de reserva territorial en coordinación con el Fideicomiso para el Desarrollo Logístico del Estado",
                "numero": "2.1.2"
              },
              {
                "id": 24,
                "indicador": {
                  "id": 26
                },
                "clave": "O2E1L6",
                "estrategia": {
                  "id": 4
                },
                "nombre": "Difundir la cédula de primer contacto con el inversionista",
                "numero": "2.1.6"
              },
              {
                "id": 23,
                "indicador": {
                  "id": 25
                },
                "clave": "O2E1L5",
                "estrategia": {
                  "id": 4
                },
                "nombre": "Difundir los incentivos para la eje de inversión privada disponibles en las regiones estratégicas de la entidad",
                "numero": "2.1.5"
              },
              {
                "id": 21,
                "indicador": {
                  "id": 23
                },
                "clave": "O2E1L3",
                "estrategia": {
                  "id": 4
                },
                "nombre": "Integrar el catálogo de oferta del dactor trabajo en coordinación con el Sector Educativo",
                "numero": "2.1.3"
              },
              {
                "id": 22,
                "indicador": {
                  "id": 24
                },
                "clave": "O2E1L4",
                "estrategia": {
                  "id": 4
                },
                "nombre": "Organizar encuarntros de trabajo con embajadas y consulados",
                "numero": "2.1.4"
              }
            ]
          },
          {
            "id": 5,
            "indicador": {
              "id": 27
            },
            "objetivo": {
              "id": 2
            },
            "clave": "O2E2",
            "nombre": "Asesorar al inversionista para maximizar la viabilidad de los proyectos",
            "numero": "2.2",
            "lineasAccion": [
              {
                "id": 27,
                "indicador": {
                  "id": 29
                },
                "clave": "O2E2L3",
                "estrategia": {
                  "id": 5
                },
                "nombre": "Vincular al inversionista con programas de financiamiento",
                "numero": "2.2.3"
              },
              {
                "id": 26,
                "indicador": {
                  "id": 28
                },
                "clave": "O2E2L2",
                "estrategia": {
                  "id": 5
                },
                "nombre": "Brindar asesoría al inversionista para la consolidación de proyectos",
                "numero": "2.2.2"
              },
              {
                "id": 25,
                "indicador": {
                  "id": 21
                },
                "clave": "O2E2L1",
                "estrategia": {
                  "id": 5
                },
                "nombre": "Generar acuerdos entre inversionistas, autoridades estatales y municipales",
                "numero": "2.2.1"
              }
            ]
          },
          {
            "id": 6,
            "indicador": {
              "id": 1
            },
            "objetivo": {
              "id": 2
            },
            "clave": "O2E3",
            "nombre": "Propiciar las condiciones para la implementación y operación de la ZEE",
            "numero": "2.3",
            "lineasAccion": [
              {
                "id": 34,
                "indicador": {
                  "id": 36
                },
                "clave": "O2E3L7",
                "estrategia": {
                  "id": 6
                },
                "nombre": "Promover la participación laboral de los habitantes de la región en las empresas instaladas en la ZEE y AI",
                "numero": "2.3.7"
              },
              {
                "id": 30,
                "indicador": {
                  "id": 32
                },
                "clave": "O2E3L3",
                "estrategia": {
                  "id": 6
                },
                "nombre": "Brindar asesoría e información a las empresas de la ZEE y su área de influencia (AI)",
                "numero": "2.3.3"
              },
              {
                "id": 28,
                "indicador": {
                  "id": 30
                },
                "clave": "O2E3L1",
                "estrategia": {
                  "id": 6
                },
                "nombre": "Colaborar con la autoridad federal en el desarrollo de capacitaciones a empresas ubicadas en la ZEE y AI",
                "numero": "2.3.1"
              },
              {
                "id": 32,
                "indicador": {
                  "id": 34
                },
                "clave": "O2E3L5",
                "estrategia": {
                  "id": 6
                },
                "nombre": "Coadyuvar con unidades de Estado para la identificación de zonas y medios de comunicación óptimos para la ejecución de la campaña de posicionamiento del proyecto de ZEE",
                "numero": "2.3.5"
              },
              {
                "id": 31,
                "indicador": {
                  "id": 33
                },
                "clave": "O2E3L4",
                "estrategia": {
                  "id": 6
                },
                "nombre": "Reuniones con los pueblos originarios para la sensibilización y concientización de la implementación del proyecto de la ZEE",
                "numero": "2.3.4"
              },
              {
                "id": 29,
                "indicador": {
                  "id": 31
                },
                "clave": "O2E3L2",
                "estrategia": {
                  "id": 6
                },
                "nombre": "Orientar a las empresas de la ZEE y AI en la gestión de apoyos del Fondo Nacional del Emprendedor",
                "numero": "2.3.2"
              },
              {
                "id": 33,
                "indicador": {
                  "id": 35
                },
                "clave": "O2E3L6",
                "estrategia": {
                  "id": 6
                },
                "nombre": "Impulsar la integración de las empresas de proveeduría local a las cadenas de valor",
                "numero": "2.3.6"
              }
            ]
          }
        ]
      }
    ],
    [
      {
        "id": 3,
        "indicador": {
          "id": 1
        },
        "clave": "O3",
        "nombre": "Fortalecimiento de la industria local",
        "numero": "3",
        "estrategia": [
          {
            "id": 8,
            "indicador": {
              "id": 43
            },
            "objetivo": {
              "id": 3
            },
            "clave": "O3E2",
            "nombre": "Vincular a las unidades económicas con los bienes y servicios institucionales",
            "numero": "3.2",
            "lineasAccion": [
              {
                "id": 42,
                "indicador": {
                  "id": 44
                },
                "clave": "O3E2L2",
                "estrategia": {
                  "id": 8
                },
                "nombre": "Promocionar los programas del sector económico a emprendedores y unidades económicas mediante las representaciones regionales, cámaras, organismos empresariales, gobiernos locales y la página oficial de la Secretaría de Economía",
                "numero": "3.2.2"
              },
              {
                "id": 41,
                "indicador": {
                  "id": 44
                },
                "clave": "O3E2L1",
                "estrategia": {
                  "id": 8
                },
                "nombre": "Generar una matriz de programas y convocatorias del sector económico",
                "numero": "3.2.1"
              },
              {
                "id": 43,
                "indicador": {
                  "id": 45
                },
                "clave": "O3E2L3",
                "estrategia": {
                  "id": 8
                },
                "nombre": "Identificar el perfil de la demanda de mano de obra que requiere la industria local",
                "numero": "3.2.3"
              }
            ]
          },
          {
            "id": 10,
            "indicador": {
              "id": 51
            },
            "objetivo": {
              "id": 3
            },
            "clave": "O3E4",
            "nombre": "Aumentar la participación de la Población Económicamente Activa en el sector formal de la economía",
            "numero": "3.4",
            "lineasAccion": [
              {
                "id": 51,
                "indicador": {
                  "id": 53
                },
                "clave": "O3E4L3",
                "estrategia": {
                  "id": 10
                },
                "nombre": "Incorporar al sector formal a las unidades económicas y emprendedores apoyados",
                "numero": "3.4.3"
              },
              {
                "id": 49,
                "indicador": {
                  "id": 30
                },
                "clave": "O3E4L1",
                "estrategia": {
                  "id": 10
                },
                "nombre": "Brindar información a las unidades económicas locales sobre la igualdad de género",
                "numero": "3.4.1"
              },
              {
                "id": 50,
                "indicador": {
                  "id": 52
                },
                "clave": "O3E4L2",
                "estrategia": {
                  "id": 10
                },
                "nombre": "Brindar información a las unidades económicas locales sobre la inclusión laboral de personas con discapacidades",
                "numero": "3.4.2"
              },
              {
                "id": 52,
                "indicador": {
                  "id": 54
                },
                "clave": "O3E4L4",
                "estrategia": {
                  "id": 10
                },
                "nombre": "Vincular a la población desocupada a la oferta laboral identificada por el sector económico",
                "numero": "3.4.4"
              }
            ]
          },
          {
            "id": 7,
            "indicador": {
              "id": 37
            },
            "objetivo": {
              "id": 3
            },
            "clave": "O3E1",
            "nombre": "Ejecutar proyectos integrales para las unidades económicas que integran las cadenas productivas de los sectores estratégicos en el Estado",
            "numero": "3.1",
            "lineasAccion": [
              {
                "id": 37,
                "indicador": {
                  "id": 39
                },
                "clave": "O3E1L3",
                "estrategia": {
                  "id": 7
                },
                "nombre": "Facilitar la adquisición de certificaciones para los bienes producidos por las empresas integradas al proyecto",
                "numero": "3.1.3"
              },
              {
                "id": 38,
                "indicador": {
                  "id": 40
                },
                "clave": "O3E1L4",
                "estrategia": {
                  "id": 7
                },
                "nombre": "Otorgar bienes que mejoren el proceso de producción de las empresas integradas al proyecto",
                "numero": "3.1.4"
              },
              {
                "id": 39,
                "indicador": {
                  "id": 41
                },
                "clave": "O3E1L5",
                "estrategia": {
                  "id": 7
                },
                "nombre": "Aumentar las ventas de los bienes finales producidos por las empresas integradas al proyecto integral",
                "numero": "3.1.5"
              },
              {
                "id": 36,
                "indicador": {
                  "id": 30
                },
                "clave": "O3E1L2",
                "estrategia": {
                  "id": 7
                },
                "nombre": "Impartir capacitaciones a las unidades económicas incorporadas a los proyectos integrales",
                "numero": "3.1.2"
              },
              {
                "id": 40,
                "indicador": {
                  "id": 42
                },
                "clave": "O3E1L6",
                "estrategia": {
                  "id": 7
                },
                "nombre": "Formalización de las empresas integradas a los proyectos integrales",
                "numero": "3.1.6"
              },
              {
                "id": 35,
                "indicador": {
                  "id": 38
                },
                "clave": "O3E1L1",
                "estrategia": {
                  "id": 7
                },
                "nombre": "Elaborar estudios diagnósticos de las actividades económicas donde se desarrollan los proyectos integrales",
                "numero": "3.1.1"
              }
            ]
          },
          {
            "id": 9,
            "indicador": {
              "id": 46
            },
            "objetivo": {
              "id": 3
            },
            "clave": "O3E3",
            "nombre": "Promocionar la oferta productiva y exportable del Estado",
            "numero": "3.3",
            "lineasAccion": [
              {
                "id": 48,
                "indicador": {
                  "id": 50
                },
                "clave": "O3E3L5",
                "estrategia": {
                  "id": 9
                },
                "nombre": "Vincular a los comerciantes locales con las oportunidades de negocio local, nacional e internacional",
                "numero": "3.3.5"
              },
              {
                "id": 47,
                "indicador": {
                  "id": 49
                },
                "clave": "O3E3L4",
                "estrategia": {
                  "id": 9
                },
                "nombre": "Organización de ferias y eventos de promoción de la oferta productiva y exportable de las MiPyMEs del Estado",
                "numero": "3.3.4"
              },
              {
                "id": 46,
                "indicador": {
                  "id": 48
                },
                "clave": "O3E3L3",
                "estrategia": {
                  "id": 9
                },
                "nombre": "Participación en ferias y eventos de promoción de la oferta productiva y exportable de las MiPyMEs del Estado",
                "numero": "3.3.3"
              },
              {
                "id": 44,
                "indicador": {
                  "id": 38
                },
                "clave": "O3E3L1",
                "estrategia": {
                  "id": 9
                },
                "nombre": "Elaboración de estudios de factibilidad de comercio en las actividades económicas estratégicas impulsadas por la SE",
                "numero": "3.3.1"
              },
              {
                "id": 45,
                "indicador": {
                  "id": 47
                },
                "clave": "O3E3L2",
                "estrategia": {
                  "id": 9
                },
                "nombre": "Actualización del catálogo de la oferta productiva y exportable",
                "numero": "3.3.2"
              }
            ]
          }
        ]
      }
    ]
  ]

  constructor() {
    console.log('servicio listo para usarr');
  }

  getImprimir(){
    return this.imprimir;
  }

}
