import axios from "axios";
import "./todosLosCalendar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EventosPublicos.css";

const EventosPublicos = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const eventsPerPage = 5;
  const [displayedEvents, setDisplayedEvents] = useState(1);

  const getEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/calendars`, {
        headers: {
          Authorization: token,
        },
      });
      setEvents(response.data.calendars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []); // Dependencia vacía para ejecutar solo una vez al cargar el componente

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  const filteredEvents = events.filter(
    (evento) =>
      evento.title.toLowerCase().includes(filter.toLowerCase()) ||
      evento.calendar.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <>
      <div className="fondoPublico">
        <div className="cajaPublico">
          <h1 className="tituloPublico">Tus Eventos</h1>
          {/* filtracion de eventos */}
          <div className="filter">
            <input
              type="text"
              className="inputFilter"
              placeholder="Titulo de evento que desees buscar"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
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
          </div>
          {/* componente de todos los eventos a traves de map y filtrado por titulo y fecha */}
          {filteredEvents
            .sort((a, b) => {
              const aValue = a[sortBy];
              const bValue = b[sortBy];
              if (sortDirection === "asc") {
                if (sortBy === "fecha") {
                  return new Date(aValue) - new Date(bValue);
                } else {
                  return aValue.localeCompare(bValue);
                }
              } else {
                if (sortBy === "fecha") {
                  return new Date(bValue) - new Date(aValue);
                } else {
                  return bValue.localeCompare(aValue);
                }
              }
            })
            .slice((displayedEvents - 1) * eventsPerPage, displayedEvents * eventsPerPage)
            .map((evento) => (
              <div key={evento._id}>
                <div className="cajaContenidoPublico">
                  <h2 className="fs-3">Titulo: {evento.title}</h2>
                  <h3 className="fs-3">Descripción: {evento.calendar}</h3>
                  <h3 className="fs-3">Fecha: {evento.fecha}</h3>
                  <h3 className="fs-3">Evento: {evento.tipo}</h3>
                  <Link to={`/chats/${evento._id}`}>Acceder al chat</Link>
                </div>
              </div>
            ))}
            {/* filtrado de eventos por paginas */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
              className="previous-btn"
                onClick={() => setDisplayedEvents(displayedEvents - 1)}
                disabled={displayedEvents === 1}
              >
                Anterior
              </button>
              <span className="pages">
                Página {displayedEvents} de {totalPages}
              </span>
              <button
              className="next-btn"
                onClick={() => setDisplayedEvents(displayedEvents + 1)}
                disabled={displayedEvents === totalPages}
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventosPublicos;
