import {
  ChartColumnIncreasing,
  Circle,
  ClockFading,
  LoaderCircle,
  Rocket,
  Workflow,
} from "lucide-react"

export function UIAudit() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col gap-4 p-4 bg-surface-secondary border border-line-translucent rounded-xl sm:h-90 max-w-lg"
    >
      <div className="flex flex-col gap-4">
        <span className="text-sm font-semibold text-ink-secondary">
          Analyzing Your Workflows...
        </span>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center font-medium text-[10px] leading-4 text-ink-secondary">
            <span>Overall Analysis Progress</span>
            <span>42%</span>
          </div>
          <div className="relative bg-[#54545420] rounded-md w-full h-2">
            <div className="absolute top-0 left-0  bg-accent rounded-md w-[42%] h-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2 p-2.5 rounded-md bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <ChartColumnIncreasing
                size={12}
                strokeWidth={1.5}
                className="text-blue-400"
              />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Workflows
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                <span className="text-ink-primary text-sm leading-4 font-bold">
                  8
                </span>
                <span className="text-ink-tertiary text-[10px] leading-4">
                  / 47
                </span>
              </div>
              <div className="relative bg-[#54545420] rounded-md w-full h-1.5">
                <div className="absolute top-0 left-0  bg-blue-400 rounded-md w-[17%] h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2.5 rounded-md bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <Workflow
                size={12}
                strokeWidth={1.5}
                className="text-yellow-500"
              />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Data Processed
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                <span className="text-ink-primary text-sm leading-4 font-bold">
                  483
                </span>
                <span className="text-ink-tertiary text-[10px] leading-4">
                  / 2.3K
                </span>
              </div>
              <div className="relative bg-[#54545420] rounded-md w-full h-1.5">
                <div className="absolute top-0 left-0  bg-yellow-500 rounded-md w-[21%] h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2.5 rounded-md bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <Rocket size={12} strokeWidth={1.5} className="text-red-400" />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Automation Tasks
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                <span className="text-ink-primary text-sm leading-4 font-bold">
                  6
                </span>
                <span className="text-ink-tertiary text-[10px] leading-4">
                  / 34
                </span>
              </div>
              <div className="relative bg-[#54545420] rounded-md w-full h-1.5">
                <div className="absolute top-0 left-0  bg-red-400 rounded-md w-[18%] h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2.5 rounded-md bg-surface-tertiary border border-line-translucent">
            <div className="flex items-center gap-1.5">
              <ClockFading
                size={12}
                strokeWidth={1.5}
                className="text-green-500"
              />
              <span className="text-[10px] leading-3 text-ink-tertiary">
                Est. Time Savings
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                <span className="text-ink-primary text-sm leading-4 font-bold">
                  10
                </span>
                <span className="text-ink-tertiary text-[10px] leading-4">
                  %
                </span>
              </div>
              <div className="relative bg-[#54545420] rounded-md w-full h-1.5">
                <div className="absolute top-0 left-0  bg-green-600 rounded-md w-[10%] h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-1">
            <div className="flex justify-center items-center p-1">
              <LoaderCircle
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary animate-spin animation-duration-[2s]"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-ink-secondary text-[8px] leading-2 font-medium">
                Data Movements & Mapping
              </span>
              <span className="text-ink-tertiary text-[6px] leading-2">
                Analyzing workflow data flows and dependencies...
              </span>
            </div>
            <div className="text-ink-secondary text-[6px] leading-2 px-1.5 py-0.5 bg-surface-quaternary rounded-xs h-fit">
              In Progress
            </div>
          </div>
          <div className="flex gap-1 opacity-40">
            <div className="flex justify-center items-center p-1">
              <Circle
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-ink-secondary text-[8px] leading-2 font-medium">
                Human Touchpoint Discovery
              </span>
              <span className="text-ink-tertiary text-[6px] leading-2">
                Identifying automation-ready tasks and intervention points...
              </span>
            </div>
            <div className="text-ink-secondary text-[6px] leading-2 px-1.5 py-0.5 bg-surface-quaternary rounded-xs h-fit">
              Queued
            </div>
          </div>
          <div className="flex gap-1 opacity-40">
            <div className="flex justify-center items-center p-1">
              <Circle
                size={10}
                strokeWidth={1.5}
                className="text-ink-primary"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-ink-secondary text-[8px] leading-2 font-medium">
                Impact Assessment & ROI Scoring
              </span>
              <span className="text-ink-tertiary text-[6px] leading-2">
                Calculating automation impact and implementation priority...
              </span>
            </div>
            <div className="text-ink-secondary text-[6px] leading-2 px-1.5 py-0.5 bg-surface-quaternary rounded-xs h-fit">
              Pending
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
