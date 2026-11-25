import type { FormEvent } from "react";
import type { MemberData, Plan } from "@/types/gimnasio";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import FormField from "../molecules/FormField";
import "./memberForm.css";

interface Props {
  member?: MemberData;
  plans: Plan[];
  defaultPlanId?: string;
  saving: boolean;
  onSave: (data: MemberData) => void;
}

export default function MemberForm({ member, plans, defaultPlanId, saving, onSave }: Props) {
  function dateInput(value = "") {
    const isoDate = /^\d{4}-\d{2}-\d{2}/.test(value);
    return { type: isoDate || !value ? "date" : "text", defaultValue: isoDate ? value.slice(0, 10) : value };
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const text = (name: string) => String(fields.get(name) ?? "").trim();
    const number = (name: string) => Number(text(name));

    function date(name: "fechaNacimiento" | "fechaIngreso" | "fechaFinalizacion") {
      const stored = member?.[name];
      const value = text(name);
      return stored && value === dateInput(stored).defaultValue ? stored : value;
    }

    onSave({
      nombre: text("nombre"),
      foto: text("foto"),
      celular: text("celular"),
      genero: text("genero"),
      numeroMiembro: text("numeroMiembro"),
      altura: number("altura"),
      peso: number("peso"),
      pecho: number("pecho"),
      cintura: number("cintura"),
      fechaNacimiento: date("fechaNacimiento"),
      direccion: text("direccion"),
      entrenamiento: text("entrenamiento"),
      planId: text("planId"),
      horario: text("horario"),
      fechaIngreso: date("fechaIngreso"),
      fechaFinalizacion: date("fechaFinalizacion"),
      montoPagado: number("montoPagado"),
      montoPendiente: number("montoPendiente"),
      metodoPago: text("metodoPago"),
      activo: fields.has("activo"),
    });
  }

  const planId = member?.planId ?? defaultPlanId ?? "";
  const availablePlans = plans.filter((plan) => plan.activo || plan.id === planId);
  const genders = ["Male", "Female"];
  const trainings = ["Trainer", "Personal"];

  if (member?.genero && !genders.includes(member.genero)) genders.push(member.genero);
  if (member?.entrenamiento && !trainings.includes(member.entrenamiento)) trainings.push(member.entrenamiento);

  return (
    <form className="member-form" onSubmit={submit}>
      <fieldset className="form-content" disabled={saving}>
        <FormField label="Name -:" name="nombre" defaultValue={member?.nombre} pattern=".*\S.*" required />
        <FormField label="Upload Photo -:" name="foto" type="url" placeholder="https://…" defaultValue={member?.foto} />
        <FormField label="Mobile No. -:" name="celular" type="tel" defaultValue={member?.celular} pattern=".*\S.*" required />
        <fieldset className="form-options">
          <legend>Gender -:</legend>
          {genders.map((gender) => (
            <label key={gender}><Input type="radio" name="genero" value={gender} defaultChecked={member?.genero === gender} required />{gender}</label>
          ))}
        </fieldset>
        <FormField label="Member No -:" name="numeroMiembro" defaultValue={member?.numeroMiembro} pattern=".*\S.*" required />
        <fieldset className="measurement">
          <legend>Measurement -:</legend>
          <div>
            <FormField label="Height" name="altura" type="number" min="0" step="any" defaultValue={member?.altura} />
            <FormField label="Weight" name="peso" type="number" min="0" step="any" defaultValue={member?.peso} />
            <FormField label="Chest" name="pecho" type="number" min="0" step="any" defaultValue={member?.pecho} />
            <FormField label="Waist" name="cintura" type="number" min="0" step="any" defaultValue={member?.cintura} />
          </div>
        </fieldset>
        <FormField label="Date of Birth -:" name="fechaNacimiento" {...dateInput(member?.fechaNacimiento)} required />
        <FormField label="Address -:" name="direccion" defaultValue={member?.direccion} pattern=".*\S.*" required />
        <fieldset className="form-options">
          <legend>Training -:</legend>
          {trainings.map((training) => (
            <label key={training}><Input type="radio" name="entrenamiento" value={training} defaultChecked={member?.entrenamiento === training} required />{training}</label>
          ))}
        </fieldset>
        <label className="form-field">
          <span>Plan -:</span>
          <Select name="planId" defaultValue={planId} required>
            <option value="">Select Plan</option>
            {member?.planId && !availablePlans.some((plan) => plan.id === member.planId) &&
              <option value={member.planId}>{member.planId}</option>}
            {availablePlans.map((plan) => <option key={plan.id} value={plan.id}>{plan.name} [ {plan.precio} ]</option>)}
          </Select>
        </label>
        <FormField label="Batch Time -:" name="horario" defaultValue={member?.horario} pattern=".*\S.*" required />
        <div className="joining-dates">
          <FormField label="Joining Date -:" name="fechaIngreso" {...dateInput(member?.fechaIngreso)} required />
          <FormField label="To" name="fechaFinalizacion" {...dateInput(member?.fechaFinalizacion)} required />
        </div>
        <FormField label="Paid Amount -:" name="montoPagado" type="number" min="0" step="any" defaultValue={member?.montoPagado} required />
        <FormField label="Due Amount -:" name="montoPendiente" type="number" min="0" step="any" defaultValue={member?.montoPendiente} required />
        <FormField label="Payment Method -:" name="metodoPago" defaultValue={member?.metodoPago} pattern=".*\S.*" required />
        <label className="active-field"><Input type="checkbox" name="activo" defaultChecked={member?.activo ?? true} /> Active</label>
        <Button className="save-button" type="submit">{saving ? "Saving…" : "Save"}</Button>
      </fieldset>
    </form>
  );
}
