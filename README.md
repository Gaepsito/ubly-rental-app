# Ubly Rental Platform 🚗💻

**Estudiante:** Paul Arellano
**Empresa:** Ubly — Alquiler de autos para conductores de Uber en Illinois  
**Tecnologías:** Spring Boot, React, Railway (opcional)

## 📍 Descripción

Aplicación web que refleja el mapa de capacidades de Ubly, permitiendo visualizar y administrar autos disponibles para conductores en Illinois.

## 🔗 Mapa de Capacidades (TO-BE)

- Registro y visualización de vehículos
- Gestión de disponibilidad
- Dashboard de status operativo

## ⚙️ Instalación

### Back-End (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run

# Ubly - Plataforma de Alquiler de Autos 🚗

Ubly es una aplicación web full stack que permite gestionar alquileres de vehículos desde una interfaz moderna y funcional. El proyecto está construido con **React** en el frontend y **Spring Boot** en el backend. Ideal para usos educativos, empresariales o como MVP para una startup de movilidad.

---

## 📦 Estructura del Proyecto

- **Backend**: `Spring Boot`, con endpoints RESTful y base de datos H2 (listo para PostgreSQL en Railway).
- **Frontend**: `React`, con navegación mediante React Router y conexión dinámica a la API.
- **Base de Datos**: Integración básica con JPA, persistencia embebida o mediante PostgreSQL.

---

## 🚀 Tecnologías Utilizadas

- Java 17 + Spring Boot
- React 18 + Vite o Create React App
- Maven
- REST API + JPA + H2
- Railway (deploy del backend)
- GitHub (repos separados frontend/backend)

---

## 🌍 URLs del Proyecto

- **Frontend (local)**: `http://localhost:3000`
- **Backend (Railway)**: `https://ubly-backend-production.up.railway.app/api/cars`

> ⚠️ Recuerda modificar el endpoint en el frontend según la URL pública de Railway.

---

## 🔧 Instalación y Ejecución

### 1. Backend Spring Boot

```bash
git clone https://github.com/tuusuario/ubly-backend.git
cd ubly-backend
./mvnw spring-boot:run
