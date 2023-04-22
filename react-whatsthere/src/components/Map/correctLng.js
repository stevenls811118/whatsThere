export const correctLng = (centerLng, neLng, swLng) => {
  if (centerLng <= -180) {
    while (centerLng <= -180) {
      centerLng += 360;
      neLng += 360;
      swLng += 360;
    }
    if (swLng < -180) {
      swLng += 360;
    }
    if (neLng > 180) {
      neLng -= 360;
    }
    return { centerLng, neLng, swLng };
  } else if (centerLng >= 180) {
    while (centerLng > 180) {
      centerLng -= 360;
      neLng -= 360;
      swLng -= 360;
    }
    if (swLng < -180) {
      swLng += 360;
    }
    if (neLng > 180) {
      neLng -= 360;
    }
    return { centerLng, neLng, swLng };
  } else {
    if (swLng < -180) {
      swLng += 360;
    }
    if (neLng > 180) {
      neLng -= 360;
    }
    return { centerLng, neLng, swLng };
  }

};
