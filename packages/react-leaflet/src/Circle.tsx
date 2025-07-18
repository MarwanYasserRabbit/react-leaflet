import {
  type CircleProps,
  createElementObject,
  createPathComponent,
  extendContext,
  updateCircle,
} from 'marwan-yasser-react-leaflet-core'
import { Circle as LeafletCircle } from 'leaflet'

export type { CircleProps } from 'marwan-yasser-react-leaflet-core'

export const Circle = createPathComponent<LeafletCircle, CircleProps>(
  function createCircle({ center, children: _c, ...options }, ctx) {
    const circle = new LeafletCircle(center, options)
    return createElementObject(
      circle,
      extendContext(ctx, { overlayContainer: circle }),
    )
  },
  updateCircle,
)
