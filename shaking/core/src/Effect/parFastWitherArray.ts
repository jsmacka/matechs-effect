import { wither_ } from "../Array/array"
import type { Option } from "../Option/option"
import type { AsyncRE } from "../Support/Common/effect"

import { parFastEffect } from "./effect"

export const parFastWitherArray_ =
  /*#__PURE__*/
  (() => wither_(parFastEffect))()

export const parFastWitherArray: <A, R, E, B>(
  f: (a: A) => AsyncRE<R, E, Option<B>>
) => (ta: Array<A>) => AsyncRE<R, E, Array<B>> = (f) => (ta) =>
  parFastWitherArray_(ta, f)