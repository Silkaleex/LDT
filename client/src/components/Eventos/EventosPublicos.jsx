import axios from "axios"; // Importa la biblioteca Axios para hacer solicitudes HTTP
import React, { useState, useEffect } from "react"; // Importa funciones de React
import { Link } from "react-router-dom"; 
import "./EventosPublicos.css"; 

const EventosPublicos = () => {
  const [events, setEvents] = useState([]); // Estado para almacenar la lista de eventos
  const [filter, setFilter] = useState(""); // Estado para el filtro de búsqueda
  const [sortBy, setSortBy] = useState("title"); // Estado para el campo utilizado para ordenar los eventos
  const [sortDirection, setSortDirection] = useState("asc"); // Estado para la dirección de ordenamiento
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const eventsPerPage = 5; // Número de eventos por página
  const token = localStorage.getItem("token"); // Obtiene el token almacenado en el almacenamiento local del navegador
  const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando

  // Función para obtener los eventos desde el servidor
  const getEvents = async () => {
    try {
      setLoading(true); // Establece el estado de carga en true
      const response = await axios.get("http://localhost:5000/api/calendars", {
        headers: {
          Authorization: token, // Agrega el token de autorización en el encabezado de la solicitud
        },
      });
      setEvents(response.data.calendars); // Actualiza el estado de la lista de eventos con los datos recibidos del servidor
      setLoading(false); // Establece el estado de carga en false
    } catch (error) {
      console.log(error); // Muestra cualquier error en la consola
      setLoading(false); // Establece el estado de carga en false
    }
  };

  // Efecto que se ejecuta una vez, al montar el componente
  useEffect(() => {
    getEvents(); // Obtiene los eventos al cargar el componente
  }, []);

  // Función para manejar el ordenamiento de los eventos
  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc"); // Cambia la dirección del ordenamiento si el campo ya está siendo ordenado
    } else {
      setSortBy(field); // Establece el campo utilizado para ordenar
      setSortDirection("asc"); // Establece la dirección del ordenamiento como ascendente
    }
  };

  // Función para eliminar un evento
  const handleDeleteEvent = async (eventId) => {
    let opcion = window.confirm("¿Estás seguro de borrar el Evento?"); // Muestra una ventana de confirmación al usuario
    if (opcion == true) { // Si el usuario confirma
      try {
        await axios.delete(`http://localhost:5000/api/calendars/${eventId}`, {
          headers: {
            Authorization: token, // Agrega el token de autorización en el encabezado de la solicitud
          },
        });
        const updatedEvents = events.filter((evento) => evento._id !== eventId); // Filtra los eventos para eliminar el evento correspondiente al eventId
        setEvents(updatedEvents); // Actualiza el estado de la lista de eventos después de eliminar un evento
      } catch (error) {
        console.log(error); // Muestra cualquier error en la consola
      }
    }
  };

  // Filtra los eventos según el criterio de búsqueda y los campos de título y descripción
  const filteredEvents = events.filter(
    (evento) =>
      evento.title.toLowerCase().includes(filter.toLowerCase()) ||
      evento.calendar.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage); // Calcula el número total de páginas
  const displayedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  ); // Obtiene los eventos a mostrar en la página actual

  // Función para cargar más eventos
  const loadMoreEvents = () => {
    setCurrentPage(currentPage + 1); // Incrementa la página actual
  };

  // Renderizado del componente
  return (
    <>
      <div className="fondoPublico">
        <div className="cajaPublico">
          <h1 className="tituloPublico">Tus Eventos</h1>
          <div className="filter">
            <input
              type="text"
              className="inputFilter"
              placeholder="Titulo de evento que desees buscar"
              value={filter}
              onChange={(e) => setFilter(e.target.value)} // Actualiza el estado de filtro al cambiar el valor del campo de búsqueda
            />
            <button className="btnFiltro" onClick={() => setFilter("")}>
              Limpiar filtro
            </button>
          </div>
          <div className="sort">
            <button className="btnOrden1" onClick={() => handleSort("title")}>
              Ordenar por título{" "}
              {sortBy === "title" && sortDirection === "asc" ? "↑" : "↓"}
            </button>
            <button className="btnOrden2" onClick={() => handleSort("fecha")}>
              Ordenar por fecha{" "}
              {sortBy === "fecha" && sortDirection === "asc" ? "↑" : "↓"}
            </button>
            <button className="btnOrden3" onClick={() => handleSort("tipo")}>
              Ordenar por tipo de evento{" "}
              {sortBy === "tipo" && sortDirection === "asc" ? "↑" : "↓"}
            </button>
          </div>
          {loading ? (
            <div className="loader">Cargando eventos...</div>
          ) : (
            <>
              {displayedEvents.map((evento) => (
                <div key={evento._id}>
                  <div className="cajaContenidoPublico">
                    <h2 className="fs-3">Titulo: {evento.title}</h2>
                    <h3 className="fs-3">Descripción: {evento.calendar}</h3>
                    <h3 className="fs-3">Fecha: {evento.fecha}</h3>
                    <h3 className="fs-3">Evento: {evento.tipo}</h3>
                    <Link to={`/chats/${evento._id}`}>Acceder al chat</Link>
                    <div className="evento-acciones">
                      {localStorage.getItem("role") === "1" && (
                        <button
                          className="del-btnAdm"
                          onClick={() => handleDeleteEvent(evento._id)}
                        >
                          Eliminar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {totalPages > 1 && currentPage < totalPages && (
                <button onClick={loadMoreEvents}>Cargar más eventos</button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EventosPublicos;
