import axios from "axios"; // Importa la biblioteca Axios para hacer solicitudes HTTP
import React, { useState, useEffect } from "react"; // Importa funciones de React
import { Link } from "react-router-dom"; // Importa el componente Link de React Router para crear enlaces
import "./EventosPublicos.css"; // Importa un archivo de estilos CSS específico para este componente
import { ClipLoader } from "react-spinners"; // Importa el componente ClipLoader de la biblioteca react-spinners para mostrar un spinner de carga
import { ToastContainer, toast } from 'react-toastify'; // Importa los componentes ToastContainer y toast de la biblioteca react-toastify para mostrar notificaciones emergentes
import 'react-toastify/dist/ReactToastify.css';// Importa los estilos CSS de react-toastify

const EventosPublicos = () => {
  const [events, setEvents] = useState([]); // Estado para almacenar la lista de eventos
  const [filter, setFilter] = useState(""); // Estado para el filtro de búsqueda
  const [sortBy, setSortBy] = useState("title"); // Estado para el campo utilizado para ordenar los eventos
  const [sortDirection, setSortDirection] = useState("asc"); // Estado para la dirección de ordenamiento
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const eventsPerPage = 5; // Número de eventos por página
  const token = localStorage.getItem("token"); // Obtiene el token almacenado en el almacenamiento local del navegador
  const [loading, setLoading] = useState(false); // Estado para indicar si se está cargando

    // Función para manejar el evento de página anterior
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        loadPage(currentPage - 1);
      }
    };
  
    // Función para manejar el evento de página siguiente
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        loadPage(currentPage + 1);
      }
    };
  
    // Función para manejar el cambio de página
    const handlePageChange = (pageNumber) => {
      loadPage(pageNumber);
    };
  
    const isAuthenticated = localStorage.getItem("token") !== null;
    const userRole = localStorage.getItem("role");

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
    getEvents(currentPage, eventsPerPage);; // Obtiene los eventos al cargar el componente
  }, [currentPage, eventsPerPage]);

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
    if (opcion == true) {
      // Si el usuario confirma
      try {
        await axios.delete(`http://localhost:5000/api/calendars/${eventId}`, {
          headers: {
            Authorization: token, // Agrega el token de autorización en el encabezado de la solicitud
          },
        });
        const updatedEvents = events.filter((evento) => evento._id !== eventId); // Filtra los eventos para eliminar el evento correspondiente al eventId
        setEvents(updatedEvents); // Actualiza el estado de la lista de eventos después de eliminar un evento
      } catch (error) {
        console.log(error);
        toast.error('Ha ocurrido un error al cargar/eliminar los eventos.'); // Muestra una notificación de error
        setLoading(false);
      }
    }
  };

  // Filtra los eventos según el criterio de búsqueda y los campos de título y descripción
  const filteredEvents = events.filter(
    (evento) =>
      evento.title.toLowerCase().includes(filter.toLowerCase()) ||
      evento.calendar.toLowerCase().includes(filter.toLowerCase())
  );
   // Ordenar los eventos según el campo y dirección de ordenamiento seleccionados
  const sortedEvents = filteredEvents.sort((a, b) => {
    // Función de comparación para el ordenamiento
    const fieldA = a[sortBy]?.toLowerCase();
    const fieldB = b[sortBy]?.toLowerCase();

    if (fieldA < fieldB) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });
// Calcula el número total de páginas
  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);
  
   
   // Obtiene los eventos a mostrar en la página actual
   const startIndex = (currentPage - 1) * eventsPerPage;
   const endIndex = startIndex + eventsPerPage;
   const displayedEvents = sortedEvents.slice(startIndex, endIndex);


  // Función para cargar más eventos
  const loadPage = (pageNumber) => {
    setCurrentPage(pageNumber); // Maneja el cambio de página
  };

  const loadMoreEvents = () => {
    if (currentPage < totalPages) {
      loadPage(currentPage + 1);// Carga más eventos aumentando el número de página
    }
  };

  return (
    <>
      <ToastContainer /> {/* Contenedor para mostrar las notificaciones */}
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
            <div className="loader">
              <ClipLoader color="#ffffff" loading={loading} size={30} />
              Cargando eventos...
            </div>
          ) : (
            <>
              {displayedEvents.map((evento) => (
                <div key={evento._id}>
                  <div className="cajaContenidoPublico">
                    <h2 className="fs-3">Titulo: {evento.title}</h2>
                    <h3 className="fs-3">Descripción: {evento.calendar}</h3>
                    <h3 className="fs-3">Fecha: {evento.fecha}</h3>
                    <h3 className="fs-3">Evento: {evento.tipo}</h3>
                    <div className="cajaBtnChat">
                      <Link className="btn-chat" to={`/chats/${evento._id}`}>
                        Acceder al chat
                      </Link>
                    </div>
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
            {totalPages > 1 && (
              <div className="pagination">
                <button className="previous-btn" onClick={handlePreviousPage}>Página anterior</button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`page-link ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button className="next-btn" onClick={handleNextPage}>Página siguiente</button>
              </div>
            )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EventosPublicos;
