import { Badge, Button, Card, Input, ProgressBar } from "./index";

function DesignSystemPreview() {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">New</Badge>
          <Badge tone="success">On track</Badge>
          <Badge tone="warning">Needs push</Badge>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <div>
            <p className="text-caption uppercase tracking-[0.24em] text-slate-500">
              Progress
            </p>
            <h2 className="mt-1 text-h2 text-slate-900">
              Day 12 challenge momentum
            </h2>
          </div>
          <ProgressBar value={72} max={100} label="Consistency" />
          <Input placeholder="Enter your streak goal" />
        </div>
      </Card>
    </div>
  );
}

export default DesignSystemPreview;
