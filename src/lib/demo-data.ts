export const trackingRecords = {
  "VQ-2847-1903": {
    trackingId: "VQ-2847-1903",
    status: "in_transit",
    eta: "2026-10-02T10:26:00-04:00",
    driver: { name: "Alex Morgan", vehicle: "Van 18" },
    location: { latitude: 40.7318, longitude: -73.9496, recordedAt: "2026-10-02T09:52:00-04:00" },
    events: [
      { status: "in_transit", occurredAt: "2026-10-02T09:52:00-04:00", detail: "Driver is 8.4 km from delivery" },
      { status: "picked_up", occurredAt: "2026-10-02T08:42:00-04:00", detail: "Collected in Brooklyn" },
      { status: "assigned", occurredAt: "2026-10-02T08:17:00-04:00", detail: "Assigned to Alex Morgan" },
      { status: "pending", occurredAt: "2026-10-02T07:58:00-04:00", detail: "Order confirmed" },
    ],
  },
} as const;
