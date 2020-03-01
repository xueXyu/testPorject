/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const model = sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        company_account: {
            type: DataTypes.STRING(32),
            allowNull: false,
            defaultValue: '0'
        },
        company_password: {
            type: DataTypes.STRING(64),
            allowNull: false,
            defaultValue: '0'
        },
        company_name: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: ''
        },
        company_phone: {
            type: DataTypes.STRING(32),
            allowNull: true,
            defaultValue: ''
        },
        company_contacts: {
            type: DataTypes.STRING(32),
            allowNull: true,
            defaultValue: ''
        },
        company_size: {
            type: DataTypes.STRING(32),
            allowNull: true,
            defaultValue: ''
        },
        company_address: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: ''
        }
    }, {
        tableName: 'company',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    });

    model.associate = function (models) {
        models.Company.hasMany(models.CompanyJob, {
            as: 'jobs',
            sourceKey: 'id',
            foreignKey: 'company_id',
        });
        models.CompanyJob.belongsTo(models.Company, {
            as: 'company',
            sourceKey: 'id',
            foreignKey: 'company_id',
        });
    };

    return model;
};
