// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  API_KEY_FRONT_END               : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzdWFyaW8iOiJERVNBMSIsInBhc3N3b3JkIjoiJDJiJDA1JGlDMTlZODB1L1YuUG9EaVkwRzk0dS5xcXdlbDdwMHc2cFNhV2todHQ4ZERrZTVvaWlVVkRXIiwiaWF0IjoxNzIwNzU0OTc4fQ.zHFavcMg82WxDFbBBqtgP6iGOmWXWH-YJgA6progguU',
  API_BASE                        : '/api/colegioapi/db/',
  //INSTANCE_URL                    : 'http://190.143.157.34:4800',

  // INSTANCE_URL                    : 'http://192.168.0.5:4800',

  INSTANCE_URL                    : 'http://localhost:4800',

  VERIFICAR_TOKEN_SESION          : 'sp_inc_cat_sesion_obtener_token',

  BASE_DOMAIN_LOGIN               : 'http://ec2-35-164-96-173.us-west-2.compute.amazonaws.com/login',
  BASE_DOMAIN_ADMIN               : 'http://ec2-35-164-96-173.us-west-2.compute.amazonaws.com/admin/',
  BASE_DOMAIN_IMPEXP              : 'http://ec2-35-164-96-173.us-west-2.compute.amazonaws.com/tracking/',

  CONTRA_KEY                      : '7b98f9d49955c616a1167e77d1999a8dc206bfd903643c7ce607acc13a32e1c7',
  CONTRA_IV                       : '8159ba6435e0618f8541485bb8794491',

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                  PROCEDIMIENTOS ALMACENADOS
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // GENERAL - Catalogos
  CATALOGOS_COLEGIO_OBTENER_CATALOGOS            : 'sp_cat_sys_colegio',
  // CATALOGOS - GRADOS Y CARRERAS
  GRADOS_CARRERAS_OBTENER_LISTADO                : 'sp_ccl_cat_grados_carreras_listado',
  // ALUMNOS - Alumnos
  ALUMNOS_OBTENER_LISTADO                        : 'sp_ccl_alumnos_obtener_listado',
  OBTENER_ALUMNO_POR_ID                          : 'sp_ccl_alumnos_consultar_alumno_por_id',
  ALUMNOS_CREAR_ACTUALIZAR_ALUMNO                : 'sp_alumnos_crear_actualizar_alumnos'


};
