import {
  type CircleMarkerProps,
  createElementObject,
  createPathComponent,
  extendContext,
  updateCircle,
} from 'marwan-yasser-react-leaflet-core'
import { CircleMarker as LeafletCircleMarker } from 'leaflet'

export type { CircleMarkerProps } from 'marwan-yasser-react-leaflet-core'

export const CircleMarker = createPathComponent<
  LeafletCircleMarker,
  CircleMarkerProps
>(function createCircleMarker({ center, children: _c, ...options }, ctx) {
  const marker = new LeafletCircleMarker(center, options)
  return createElementObject(
    marker,
    extendContext(ctx, { overlayContainer: marker }),
  )
}, updateCircle)
