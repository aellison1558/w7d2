class Api::StepsController < ApplicationController
  def index
    todo = Todo.find(params[:todo_id])
    render json: todo.steps
  end

  def create
    step = Step.new(step_params)
    step.todo_id = params[:todo_id]
    render json: step.save(step_params)
  end

  def update
    step = Step.find(params[:id])
    render json: step.update(step_params)
  end

  def destroy
    step = Step.find(params[:id])
    step.destroy
    render json: Todo.find(step.todo_id)
  end

  private
  def step_params
    params.require('step').permit(:content, :todo_id, :done)
  end
end
