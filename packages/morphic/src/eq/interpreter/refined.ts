import { memo } from "../../utils"
import { eqApplyConfig } from "../config"
import { EqType, EqURI } from "../hkt"

import { introduce } from "@matechs/core/Function"
import type { AnyEnv } from "@matechs/morphic-alg/config"
import type { MatechsAlgebraRefined1 } from "@matechs/morphic-alg/refined"

export const eqRefinedInterpreter = memo(
  <Env extends AnyEnv>(): MatechsAlgebraRefined1<EqURI, Env> => ({
    _F: EqURI,
    refined: (getEq, _ref, config) => (env) =>
      introduce(getEq(env).eq)(
        (eq) => new EqType(eqApplyConfig(config?.conf)(eq, env, { eq, eqRefined: eq }))
      ),
    constrained: (getEq, _ref, config) => (env) =>
      introduce(getEq(env).eq)(
        (eq) => new EqType(eqApplyConfig(config?.conf)(eq, env, { eq }))
      )
  })
)
