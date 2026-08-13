import {
  Brain,
  ChartLine,
  ChevronRight,
  CircleDashedIcon,
  Clock,
  ClockFading,
  Coins,
  TrendingUp,
} from "lucide-react"

export function UIPerformance() {
  return (
    <div aria-hidden="true" className="flex flex-col p-4 bg-surface-secondary border border-line-translucent rounded-xl lg:h-90 max-w-lg">
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-semibold text-ink-secondary">
          Performance
        </span>
        <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <ClockFading
                size={12}
                strokeWidth={1.5}
                className="text-blue-400"
              />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Exe. Speed
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between gap-1.5">
                <span className="text-ink-primary text-xs leading-4 font-bold">
                  2.3s
                </span>
                <span className="text-green-400 text-[10px] leading-4">
                  -18%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <Coins size={12} strokeWidth={1.5} className="text-yellow-500" />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Cost
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between gap-1.5">
                <span className="text-ink-primary text-xs leading-4 font-bold">
                  $0.42
                </span>
                <span className="text-green-400 text-[10px] leading-4">
                  -34%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <TrendingUp
                size={12}
                strokeWidth={1.5}
                className="text-red-400"
              />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Error Rate
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between gap-1.5">
                <span className="text-ink-primary text-xs leading-4 font-bold">
                  0.12%
                </span>
                <span className="text-green-400 text-[10px] leading-4">
                  -52%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2.5 py-1.5 rounded-lg bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <Brain
                size={12}
                strokeWidth={1.5}
                className="text-body-largeurple-500"
              />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Learning
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between gap-1.5">
                <span className="text-ink-primary text-xs leading-4 font-bold">
                  94.2%
                </span>
                <span className="text-green-400 text-[10px] leading-4">
                  +8.7%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <ChartLine
              size={10}
              strokeWidth={1}
              className="text-ink-secondary"
            />
            <span className="font-medium text-ink-tertiary text-[10px] leading-4">
              Performance Trends
            </span>
          </div>
          <div className="relative bg-surface-tertiary w-full h-10 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="601"
              height="77"
              fill="none"
              overflow="visible"
              className="absolute -top-8 -left-18"
            >
              <g>
                <defs>
                  <linearGradient
                    id="idid_uu8LUOBX3g-491382765"
                    x1="0.49965174129353235"
                    x2="0.5024875621890548"
                    y1="0.43"
                    y2="1"
                  >
                    <stop
                      offset="0"
                      stopColor="rgb(20, 204, 128)"
                      stopOpacity="1"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="rgba(19, 21, 22, 0.5)"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 77 L 0 66.399 L 54.586 66.399 L 102.487 57.471 L 149.275 61.377 L 188.265 69.188 L 230.04 49.101 L 272.929 61.377 L 329.185 61.377 L 389.341 49.101 L 451.168 66.399 L 495.171 53.007 L 543.629 44.08 L 601 0 L 601 76.953 Z"
                  fill="url(#idid_uu8LUOBX3g-491382765)"
                  strokeWidth="0.5"
                  stroke="rgb(20, 204, 128)"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1">
            <Clock size={10} strokeWidth={1} className="text-ink-secondary" />
            <span className="font-medium text-ink-tertiary text-[10px] leading-4">
              Recent Executions
            </span>
          </div>
          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm">
            <div className="flex justify-center items-center p-2">
              <CircleDashedIcon
                size={7}
                strokeWidth={3}
                className="text-blue-400 animate-spin animation-duration-[2s]"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>Customer Data Validation</span>
                <span>...</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2 animate-pulse">
                <span>Running….</span>
                <span>...</span>
              </div>
            </div>
            <div className=" pl-2 pr-1">
              <ChevronRight
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm">
            <div className="flex justify-center items-center p-2">
              <span className="bg-green-400 w-1.5 h-1.5 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>Order Processing</span>
                <span>2.1s</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2">
                <span>5m ago</span>
                <span>€0.41</span>
              </div>
            </div>
            <div className=" pl-2 pr-1">
              <ChevronRight
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm opacity-50">
            <div className="flex justify-center items-center p-2">
              <span className="bg-green-400 w-1.5 h-1.5 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>Inventory Update</span>
                <span>1.9s</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2">
                <span>8m ago</span>
                <span>€0.39</span>
              </div>
            </div>
            <div className=" pl-2 pr-1">
              <ChevronRight
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 bg-surface-tertiary px-1 py-1 rounded-sm opacity-40">
            <div className="flex justify-center items-center p-2">
              <span className="bg-green-400 w-1.5 h-1.5 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-ink-secondary text-[8px] leading-2 font-medium">
                <span>Report generation</span>
                <span>2.3s</span>
              </div>
              <div className="flex justify-between text-ink-tertiary text-[6px] leading-2">
                <span>12m ago</span>
                <span>€0.45</span>
              </div>
            </div>
            <div className=" pl-2 pr-1">
              <ChevronRight
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
