import knexfile from '../../knexfile'
import knex from 'knex'

const knexCn = knex(knexfile["development"]) 

export default knexCn