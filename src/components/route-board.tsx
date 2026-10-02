import { Check, Clock3, PackageCheck, Truck } from "lucide-react";

export function RouteBoard() {
  return (
    <div className="route-board" aria-label="Live shipment preview">
      <div className="route-board-top">
        <span className="status status-transit"><i /> In transit</span>
        <span>VQ-2847-1903</span>
      </div>
      <div className="route-cities">
        <div>
          <span>Pickup</span>
          <strong>Brooklyn</strong>
          <small>08:42 collected</small>
        </div>
        <div className="eta-block">
          <Clock3 size={18} />
          <strong>34 min</strong>
          <span>remaining</span>
        </div>
        <div className="align-right">
          <span>Drop-off</span>
          <strong>Queens</strong>
          <small>ETA 10:26</small>
        </div>
      </div>
      <div className="route-line" aria-hidden="true">
        <span className="route-complete" />
        <i className="route-origin"><Check size={13} /></i>
        <i className="route-truck"><Truck size={17} /></i>
        <i className="route-destination"><PackageCheck size={15} /></i>
      </div>
      <div className="driver-strip">
        <div className="driver-avatar">AM</div>
        <div>
          <strong>Alex Morgan</strong>
          <span>Driver · Van 18</span>
        </div>
        <div className="driver-metric">
          <span>Last update</span>
          <strong>Just now</strong>
        </div>
        <div className="driver-metric">
          <span>Temperature</span>
          <strong>18°C</strong>
        </div>
      </div>
    </div>
  );
}
