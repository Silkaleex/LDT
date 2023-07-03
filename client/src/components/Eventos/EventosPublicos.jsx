import axios from "axios";
import "./todosLosCalendar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EventosPublicos.css";

const EventosPublicos = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10; // Cambia el número 10 por la cantidad de eventos que deseas mostrar por página
  const [filter, setFilter] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [sortBy, setSortBy] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");

  const getEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/calendars`, {
        headers: {
          Authorization: token,
        },
        params: {
          page: currentPage,
          limit: eventsPerPage,
        },
      });
      setEvents(response.data.calendars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, [currentPage]);

  useEffect(() => {
    const filtered = events.filter(
      (evento) =>
        evento.title.toLowerCase().includes(filter.toLowerCase()) ||
        evento.calendar.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [events, filter]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  return (
    <>
      <div className="fondoPublico">
        <div className="cajaPublico">
          <h1 className="tituloPublico">Tus Eventos</h1>
           {/* filtrado en html */}
          <div className="filter">
            <input
              type="text"
              className="inputFilter"
              placeholder="Titulo de evento que desees buscar"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button className="btnFiltro"onClick={() => setFilter("")}>Limpiar filtro</button>
          </div>
          {/* Botones de ordenamiento de eventos */}
          <div className="sort">
            <button className="btnOrden1" onClick={() => handleSort("title")}>
              Ordenar por título {sortBy === "title" && sortDirection === "asc" ? "↑" : "↓"}
            </button>
            <button  className="btnOrden2"  onClick={() => handleSort("fecha")}>
              Ordenar por fecha {sortBy === "fecha" && sortDirection === "asc" ? "↑" : "↓"}
            </button>
          </div>
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
            .map((evento) => {
              return (
                <div key={evento._id}>
                  <div className="cajaContenidoPublico">
                    <h2 className="fs-3">Titulo: {evento.title}</h2>
                    <h3 className="fs-3">Descripción: {evento.calendar}</h3>
                    <h3 className="fs-3">Fecha: {evento.fecha}</h3>
                    <h3 className="fs-3">Evento: {evento.tipo}</h3>
                    <Link to={`/chats/${evento._id}`}>Acceder al chat</Link>
                  </div>
                </div>
              );
            })}
        </div>
        {filteredEvents.length >= eventsPerPage && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(filteredEvents.length / eventsPerPage)
              }
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default EventosPublicos;
