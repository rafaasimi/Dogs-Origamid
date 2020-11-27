export const API_URL = "https://dogsapi.origamid.dev/json";

// Solicita o token do usuario após autenticação
export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

// Verifica se o token é valido
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

// Solicita os dados do usuário após informar o token
export function USER_GET(token) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

// Cadastrar um usuario
export function USER_POST(body) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

// Envia as fotos do formulario para a API
export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

// Solicita as fotos da API de acordo com os parametros passados
export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

// Solicita a foto da API de acordo com o ID
export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

// Solicita a foto da API de acordo com o ID
export function COMMENT_POST(id, body, token) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}

// Deleta uma foto de acordo com o ID
export function PHOTO_DELETE(id, token) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }
  }
}

export function PASSWORD_RESET(body) {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }
  }
}

export function STATS_GET(token) {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  }
}